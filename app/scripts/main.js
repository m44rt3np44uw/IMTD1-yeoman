$(document).ready(function () {

  // Slider
  $('#opdracht_4_slider').carousel({
    interval: 1000 * 20
  });

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  // http://stackoverflow.com/a/25359264/2940668
  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
      return null;
    }
    else{
      return results[1] || 0;
    }
  };

  // Easter Egg
  if($.urlParam('gerrie') != null && $.urlParam('gerrie') == 'verstrooid') {

    // Comix Sans MS is echt mooi.
    $('h1, h2, h3, h4, h5, h6, p, a, li, .tooltip-inner').css({
      'font-family': 'Comic Sans MS'
    });

    // Alle urls
    var $urls = $('a');

    // Bekijk all urls.
    $.each($urls, function (index, url) {

      // Sla de huidige link op.
      var current_url = $(url).attr('href');

      // Als het een lokale link is.
      if(current_url.endsWith('.html')) {

        // Voeg dan de easteregg toe.
        $(url).attr('href', current_url + '?gerrie=verstrooid');
      }
    });
  }
});
