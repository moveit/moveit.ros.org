/*
 * Consent manager for moveit.ai. Third-party tags — Google Analytics 4
 * (analytics), the Dealfront (Leadfeeder) visitor tracker (advertising), and
 * the HubSpot newsletter form on Get Involved — load only after the visitor
 * opts in, so no tracking cookies are set without consent. Mirrors the
 * picknik.ai consent flow: denied by default, granted on opt-in, cleared and
 * reloaded on withdrawal.
 */
(function () {
  'use strict';

  var COOKIE_NAME = 'pn_consent';
  var COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
  var SCHEMA_VERSION = 1; // re-ask when the cookie shape changes
  var GA_MEASUREMENT_ID = 'G-0FNPMEP8NE';
  var LEADFEEDER_ID = 'lYNOR8xOKPOaWQJZ';
  var HUBSPOT_PORTAL_ID = '45692735';
  var HUBSPOT_FORM_ID = 'dea35ae4-e2aa-4a2e-9edb-ef5af8a38626';
  var PRIVACY_POLICY_URL = 'https://picknik.ai/privacy-policy/';

  // Cookies the vendors drop; cleared when consent is withdrawn. _ga_<ID> and
  // _gac_* vary per property, so they are matched by prefix. The __hs*/hubspotutk
  // cookies come from the newsletter form embed (Get Involved page).
  var TRACKING_COOKIES = ['_ga', '_gid', '_gat', '_lfa', 'hubspotutk', '__hstc', '__hssc', '__hssrc'];
  var TRACKING_COOKIE_PREFIXES = ['_ga_', '_gac_', '_lfa'];

  var gaLoaded = false;
  var leadfeederLoaded = false;
  var hubspotFormLoaded = false;
  var banner = null;

  /* ------------------------------------------------------------------ cookie */

  function readConsent() {
    var match = document.cookie.match(new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]*)'));
    if (!match) return null;
    try {
      var parsed = JSON.parse(decodeURIComponent(match[1]));
      if (!parsed || parsed.v !== SCHEMA_VERSION) return null;
      return { analytics: parsed.analytics === true, advertising: parsed.advertising === true };
    } catch (e) {
      return null;
    }
  }

  function writeConsent(granted) {
    // Same shape as picknik.ai's pn_consent. moveit.ai's single Accept/Reject
    // grants analytics (GA4) and advertising (Leadfeeder) together.
    var payload = {
      v: SCHEMA_VERSION,
      ts: new Date().toISOString(),
      functional: false,
      analytics: granted === true,
      advertising: granted === true
    };
    document.cookie =
      COOKIE_NAME + '=' + encodeURIComponent(JSON.stringify(payload)) +
      ';path=/;max-age=' + COOKIE_MAX_AGE + ';SameSite=Lax' +
      (location.protocol === 'https:' ? ';Secure' : '');
  }

  function isTrackingCookie(name) {
    if (TRACKING_COOKIES.indexOf(name) !== -1) return true;
    for (var i = 0; i < TRACKING_COOKIE_PREFIXES.length; i++) {
      if (name.indexOf(TRACKING_COOKIE_PREFIXES[i]) === 0) return true;
    }
    return false;
  }

  function hasTrackingCookies() {
    return document.cookie.split('; ').some(function (raw) {
      return isTrackingCookie(raw.split('=')[0]);
    });
  }

  function clearTrackingCookies() {
    var host = location.hostname;
    var domains = ['', host, '.' + host];
    // GA4/Leadfeeder scope cookies to the registrable domain so they are shared
    // across subdomains; clear them there too (e.g. on www.moveit.ai). ES5 check.
    var apex = '.moveit.ai';
    if (host.length > apex.length && host.slice(-apex.length) === apex) {
      domains.push(apex);
    }
    document.cookie.split('; ').forEach(function (raw) {
      var name = raw.split('=')[0];
      if (!isTrackingCookie(name)) return;
      domains.forEach(function (d) {
        document.cookie =
          name + '=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT' + (d ? ';domain=' + d : '');
      });
    });
  }

  /* ------------------------------------------------------- google consent mode */

  function initConsentMode() {
    window.dataLayer = window.dataLayer || [];
    // A plain function (not an arrow) so `arguments` is available — this is
    // Google's canonical gtag shim.
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    // Denied is the starting point for everyone; GA is not loaded until opt-in.
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied'
    });
  }

  /* ------------------------------------------------------------------ loaders */

  function loadGA() {
    if (gaLoaded) return;
    gaLoaded = true;
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
  }

  // The vendor snippet formerly inlined in _includes/default.html; runs only
  // after the visitor opts in.
  function loadLeadfeeder() {
    if (leadfeederLoaded) return;
    leadfeederLoaded = true;
    window.ldfdr =
      window.ldfdr ||
      function () {
        (window.ldfdr._q = window.ldfdr._q || []).push([].slice.call(arguments));
      };
    var first = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');
    script.src = 'https://sc.lfeeder.com/lftracker_v1_' + LEADFEEDER_ID + '.js';
    script.async = true;
    first.parentNode.insertBefore(script, first);
  }

  // The PickNik newsletter signup on the Get Involved page. The HubSpot embed
  // pulls js.hsforms.net and sets hubspotutk, so it loads only after opt-in.
  function loadHubSpotForm() {
    if (hubspotFormLoaded) return;
    var target = document.getElementById('newsletter-form');
    if (!target) return; // the form only exists on the Get Involved page
    hubspotFormLoaded = true;
    var script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.async = true;
    script.onload = function () {
      if (window.hbspt && window.hbspt.forms) {
        window.hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          target: '#newsletter-form'
        });
      }
    };
    document.head.appendChild(script);
  }

  // Load the form when consent is granted; otherwise show the "accept cookies"
  // prompt in its place. No-op on pages without the form.
  function updateNewsletterForm(granted) {
    var fallback = document.getElementById('newsletter-consent-fallback');
    if (granted) {
      loadHubSpotForm();
      if (fallback) fallback.hidden = true;
    } else if (fallback) {
      fallback.hidden = false;
    }
  }

  /* -------------------------------------------------------------------- banner */

  function decide(granted) {
    writeConsent(granted);
    if (banner) banner.hidden = true;
    document.body.classList.remove('consent-open'); // drop the announcement banner back down

    if (granted) {
      loadGA();
      loadLeadfeeder();
      updateNewsletterForm(true);
      return;
    }
    updateNewsletterForm(false);
    // A loaded tag can't be pulled back out: if anything loaded this session or
    // left cookies behind, drop them and reload.
    if (gaLoaded || leadfeederLoaded || hubspotFormLoaded || hasTrackingCookies()) {
      clearTrackingCookies();
      location.reload();
    }
  }

  function buildBanner() {
    banner = document.createElement('div');
    banner.className = 'consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.hidden = true;
    banner.innerHTML =
      '<div class="consent-banner__inner">' +
      '<div class="consent-banner__text">' +
      '<h2 class="consent-banner__title">Cookies? Your call.</h2>' +
      '<p>This site uses cookies to understand which organizations find MoveIt ' +
      'useful. It loads only if you allow it. See our ' +
      '<a href="' + PRIVACY_POLICY_URL + '" rel="noopener" target="_blank">Privacy Policy</a>.</p>' +
      '</div>' +
      '<div class="consent-banner__actions">' +
      '<button type="button" class="consent-btn consent-btn--accept" data-consent-action="accept">Accept</button>' +
      '<button type="button" class="consent-btn consent-btn--reject" data-consent-action="reject">Reject</button>' +
      '</div>' +
      '</div>';

    banner.addEventListener('click', function (event) {
      var action = event.target.getAttribute('data-consent-action');
      if (action === 'accept') decide(true);
      if (action === 'reject') decide(false);
    });

    document.body.appendChild(banner);
  }

  function openBanner() {
    if (!banner) return;
    banner.hidden = false;
    document.body.classList.add('consent-open'); // lift the announcement banner above ours
  }

  function init() {
    buildBanner();
    if (!stored) openBanner(); // `stored` is assigned in the boot block before init runs

    // Reflect stored consent in the newsletter form: load it for returning
    // opt-ins, show the "accept cookies" prompt otherwise (no-op off that page).
    updateNewsletterForm(!!(stored && stored.analytics));

    // Footer "Cookie settings" link reopens the banner so a visitor can change
    // (and withdraw) their choice as easily as they gave it.
    document.addEventListener('click', function (event) {
      var trigger = event.target.closest ? event.target.closest('[data-consent-open]') : null;
      if (!trigger) return;
      event.preventDefault();
      openBanner();
    });
  }

  /* --------------------------------------------------------------------- boot */

  initConsentMode();
  var stored = readConsent();
  if (stored && stored.analytics) loadGA(); // returning opt-in tracks from the start
  if (stored && stored.advertising) loadLeadfeeder();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
