var videoSrc = 'https://www.youtube.com/embed/HSsqzzuGTPo'; 
$('#exampleModal').on('show.bs.modal', function () {
  var iframe = $('#iframeVideo');
  iframe.attr("src", videoSrc + "?autoplay=1");
});

$('#exampleModal').on('hidden.bs.modal', function (e) {

  var iframe = $('#iframeVideo');
  iframe.attr("src", videoSrc);

});