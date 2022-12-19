// var elem = document.querySelector('.collection-list');
// var iso = new Isotope( elem, {
//   // options
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows'
// });


// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });