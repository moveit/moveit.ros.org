/*
 * Consent manager for moveit.ai. The only third-party tag is the Leadfeeder
 * (Dealfront) visitor tracker; it loads only after the visitor opts in, so no
 * tracking cookies are set without consent. Mirrors the picknik.ai consent flow:
 * denied by default, granted on opt-in, cleared and reloaded on withdrawal.
 */
(function () {
  'use strict';

  var COOKIE_NAME = 'pn_consent';
  var COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
  var SCHEMA_VERSION = 1; // re-ask when the cookie shape changes
  var LEADFEEDER_ID = 'lYNOR8xOKPOaWQJZ';
  var PRIVACY_POLICY_URL = 'https://picknik.ai/privacy-policy/';

  // Cookie Leadfeeder drops; cleared when advertising consent is withdrawn.
  var LF_COOKIES = ['_lfa'];

  var leadfeederLoaded = false;
  var banner = null;

  /* ------------------------------------------------------------------ cookie */

  function readConsent() {
    var match = document.cookie.match(new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]*)'));
    if (!match) return null;
    try {
      var parsed = JSON.parse(decodeURIComponent(match[1]));
      if (!parsed || parsed.v !== SCHEMA_VERSION) return null;
      return { advertising: parsed.advertising === true };
    } catch (e) {
      return null;
    }
  }

  function writeConsent(advertising) {
    // Same shape as picknik.ai's pn_consent; moveit.ai only exposes advertising
    // (Leadfeeder), so the other categories are always false.
    var payload = {
      v: SCHEMA_VERSION,
      ts: new Date().toISOString(),
      functional: false,
      analytics: false,
      advertising: advertising === true
    };
    document.cookie =
      COOKIE_NAME + '=' + encodeURIComponent(JSON.stringify(payload)) +
      ';path=/;max-age=' + COOKIE_MAX_AGE + ';SameSite=Lax' +
      (location.protocol === 'https:' ? ';Secure' : '');
  }

  function hasLeadfeederCookies() {
    return document.cookie.split('; ').some(function (raw) {
      return LF_COOKIES.indexOf(raw.split('=')[0]) !== -1;
    });
  }

  function clearLeadfeederCookies() {
    var host = location.hostname;
    var domains = ['', host, '.' + host];
    // Leadfeeder may scope _lfa to the registrable domain so it's shared across
    // subdomains; clear it there too (e.g. on www.moveit.ai). ES5 suffix check.
    var apex = '.moveit.ai';
    if (host.length > apex.length && host.slice(-apex.length) === apex) {
      domains.push(apex);
    }
    document.cookie.split('; ').forEach(function (raw) {
      var name = raw.split('=')[0];
      if (LF_COOKIES.indexOf(name) === -1) return;
      domains.forEach(function (d) {
        document.cookie =
          name + '=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT' + (d ? ';domain=' + d : '');
      });
    });
  }

  /* ------------------------------------------------------------------ loader */

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

  /* -------------------------------------------------------------------- banner */

  function decide(advertising) {
    writeConsent(advertising);
    if (banner) banner.hidden = true;
    document.body.classList.remove('consent-open'); // drop the announcement banner back down

    if (advertising) {
      loadLeadfeeder();
      return;
    }
    // Leadfeeder can't be unloaded once running: if it loaded this session or
    // left cookies behind, drop them and reload.
    if (leadfeederLoaded || hasLeadfeederCookies()) {
      clearLeadfeederCookies();
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
      '<p>This site uses the Dealfront (Leadfeeder) visitor tracker to understand ' +
      'which organizations find MoveIt useful. It loads only if you allow it. See our ' +
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

  function init() {
    buildBanner();
    // `stored` is assigned in the boot block before init runs.
    if (!stored && banner) {
      banner.hidden = false;
      document.body.classList.add('consent-open'); // lift the announcement banner above ours
    }
  }

  /* --------------------------------------------------------------------- boot */

  var stored = readConsent();
  if (stored && stored.advertising) loadLeadfeeder(); // returning opt-in tracks from the start

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
