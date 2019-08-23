$(document).ready(function() {
  $('#toggle-nav').click(function() {
    $(this).toggleClass('open');
  });
});

var videoSrc = $('#modalVideo iframe').attr('src');

$('#modalVideo').on('show.bs.modal', function() {
  // on opening the modal
  // set the video to autostart
  $('#modalVideo iframe').attr('src', videoSrc + '&amp;autoplay=1');
});

$('#modalVideo').on('hidden.bs.modal', function(e) {
  // on closing the modal
  // stop the video
  $('#modalVideo iframe').attr('src', null);
});

function currentVersion() {
  var currentDate = Date.now();
  var startDate = new Date('03/01/2019');
  var finalDate = new Date('03/01/2020');
  var freezeDate = new Date('02/01/2020');
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

function futureVersion() {
  var currentDate = Date.now();
  var startDate = new Date('06/01/2019');
  var finalDate = new Date('01/01/2020');
  var freezeDate = new Date('12/01/2019');
  var totalTime = finalDate.getTime() - startDate.getTime();
  var progressTime = currentDate - startDate;
  var percent = (progressTime / totalTime) * 100;
  if (currentDate >= finalDate.getTime()) {
    $('#time-line--red-2').css('display', 'block');
  } else if (currentDate > freezeDate.getTime()) {
    $('#time-line--orange-2').css('width', `${percent}%`);
  } else {
    $('#time-line--blue-2').css('width', `${percent}%`);
  }
}

$(document).ready(function() {
  currentVersion();
  futureVersion();
});
