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
