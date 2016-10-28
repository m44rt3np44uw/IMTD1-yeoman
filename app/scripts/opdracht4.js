$(document).ready(function () {

  // Variables.
  var $slider = $('#opdracht_4_slider_detail'),
    $photo  = $('#opdracht-photo');

  // 20 seconden voor elke slide.
  $slider.carousel({
    interval: 1000 * 20
  });

  // verander de achtergrond.
  $slider.on('slid.bs.carousel', function () {

    // Haal de source van de afbeelding op.
    var source = $slider.find('.active img').attr('src');

    // Veranderd de achtergrond afbeelding.
    $photo.css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("' + source + '")');
  });
});
