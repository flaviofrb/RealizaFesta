// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

 // imagem zoom
 const zoomOverlay = document.getElementById('zoomOverlay');
 const zoomedImage = document.getElementById('zoomedImage');
 
 function zoomIn(image) {
     zoomedImage.src = image.src;
     zoomOverlay.style.opacity = '1';
     zoomOverlay.style.pointerEvents = 'auto';
 }
 
 zoomOverlay.addEventListener('click', () => {
     zoomOverlay.style.opacity = '0';
     zoomOverlay.style.pointerEvents = 'none';
 });

//tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));