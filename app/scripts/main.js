$(document).ready(function () {

  // Slider
  $('#opdracht_4_slider').carousel({
    interval: 1000 * 20
  });

  // Tooltips
  var $tooltips = $('[data-toggle="tooltip"]');

  // Tooltips
  $tooltips.tooltip();

  // Leeftijd
  leeftijd(1993);

  // Leerjaar
  leerjaar(2014);

  // Easter Egg.
  easterEgg();
});

// Vul mijn leeftijd in.
function leeftijd(year_birth) {
  var year_now = new Date().getFullYear(),
      age = year_now - year_birth,
      $leeftijd = $('.leeftijd');

  // Vul de leeftijd klasse.
  $leeftijd.html(age);
}

function leerjaar(start_jaar) {
  var studie_jaar         = new Date().getFullYear() - start_jaar,
      $studie_jaar        = $('.studie_jaar'),
      $studie_jaar_voluit = $('.studie_jaar_voluit'),
      $jaar_begin         = $('.begin_jaar'),
      $jaar_eind          = $('.eind_jaar'),
      studie_jaar_voluit;

  if(studie_jaar > 4) {
    studie_jaar = 4;
  }

  switch (studie_jaar) {
    case 1:
      studie_jaar_voluit = 'eerstejaars';
      break;
    case 2:
      studie_jaar_voluit = 'tweedejaars';
      break;
    case 3:
      studie_jaar_voluit = 'derdejaars';
      break;
    default:
      studie_jaar_voluit = 'eindexamen';
      break;
  }

  $jaar_begin.html((start_jaar + studie_jaar));
  $jaar_eind.html(start_jaar + studie_jaar + 1);

  $studie_jaar.html(studie_jaar);
  $studie_jaar_voluit.html(studie_jaar_voluit);
}

// Gerrie easter egg.
function easterEgg() {

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

  var key = 'gerrie';
  var value = 'verstrooid';

  // Easter Egg
  if($.urlParam(key) != null && $.urlParam(key) == value) {

    // Comix Sans MS is echt mooi.
    $('h1, h2, h3, h4, h5, h6, p, a, li').css({
      'font-family': 'Comic Sans MS'
    });

    // Zelfs de tooltips moeten mooi worden.
    $tooltips.on('inserted.bs.tooltip', function () {
      $('.tooltip-inner').css('font-family', 'Comic Sans MS');
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
        $(url).attr('href', current_url + '?' + key + '=' + value);
      }
    });
  }
}
