// Load the YouTube embed only when the modal opens, so nothing is fetched
// from YouTube (no IP handed over) until the visitor asks for the video.
var videoSrc = $('#modalVideo iframe').attr('data-src');

$('#modalVideo').on('show.bs.modal', function() {
  // on opening the modal
  // set the video to autostart
  $('#modalVideo iframe').attr('src', videoSrc + '&autoplay=1');
});

$('#modalVideo').on('hidden.bs.modal', function(e) {
  // on closing the modal
  // stop the video
  $('#modalVideo iframe').attr('src', null);
});

function futureVersion() {
  var currentDate = Date.now();
  //                        DAY / MONTH / YEAR
  var startDate  = new Date('06/01/2023'); // Start Date
  var freezeDate = new Date('03/30/2024'); // Feature Freeze
  var finalDate  = new Date('05/30/2024'); // Release Date
  var totalTime = finalDate.getTime() - startDate.getTime();
  var progressTime = currentDate - startDate;
  var percent = (progressTime / totalTime) * 100;
  if (currentDate >= finalDate.getTime()) {
    $('#time-line--red-1').css('display', 'block');
  } else if (currentDate > freezeDate.getTime()) {
    $('#time-line--orange-1').css('width', `${percent}%`);
  } else {
    $('#time-line--blue-1').css('width', `${percent}%`);
  }
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("bannerMoveitPro");
  let targetHtml = $('.moveit_announcement_banner');
  if (user !== "") {
    targetHtml.css('display', 'none');
  }
}

function closeBannerOnClick() {
  let targetHtml = $('.moveit_announcement_banner');
  targetHtml.click(function() {
    $(this).addClass('moveit_announcement_banner--hide');
    setCookie("bannerMoveitPro", "moveit_announcement_banner", 30);
  });
}

// Click-to-load video facades (see _includes/video.html): the iframe is built
// only on click, so no request reaches YouTube/Vimeo until the visitor asks.
function initVideoFacades() {
  function load(facade) {
    if (facade.getAttribute('data-loaded')) return;
    var src = facade.getAttribute('data-video-src');
    if (!src) return;
    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.className = 'video-facade__frame';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('title', facade.getAttribute('aria-label') || 'Video');
    facade.innerHTML = '';
    facade.appendChild(iframe);
    facade.setAttribute('data-loaded', '1');
  }
  document.addEventListener('click', function (e) {
    var f = e.target.closest ? e.target.closest('.video-facade') : null;
    if (f) load(f);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
    var f = e.target.closest ? e.target.closest('.video-facade') : null;
    if (f) { e.preventDefault(); load(f); }
  });
}

$(document).ready(function() {
  $('#toggle-nav').click(function() {
    $(this).toggleClass('open');
  });

  futureVersion();
  checkCookie();
  closeBannerOnClick();
  initVideoFacades();

  // Google feedback form: load the Forms iframe only when its modal opens, so
  // it isn't fetched from Google on page load.
  $('#feedbackform').on('show.bs.modal', function () {
    var frame = document.getElementById('google-feedback-form');
    if (frame && !frame.getAttribute('src') && frame.getAttribute('data-src')) {
      frame.setAttribute('src', frame.getAttribute('data-src'));
    }
  });
});
