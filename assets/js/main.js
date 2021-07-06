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

function futureVersion() {
  var currentDate = Date.now();
  //                        DAY / MONTH / YEAR
  var startDate  = new Date('07/01/2021'); // Start Date
  var freezeDate = new Date('04/30/2022'); // Feature Freeze
  var finalDate  = new Date('05/30/2022'); // Release Date
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

$(document).ready(function() {
  futureVersion();
});
