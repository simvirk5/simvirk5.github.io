  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );

// $('a[href^="#"]').on('click', function(event) {
//     var target = $(this.getAttribute('href'));
//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').stop().animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }
// });

  $(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
  });
    

$('.scrollspy').scrollSpy();

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
    var instances = M.Modal.close(elems, options);
  });



  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal({dismissible: false, closeIcon: true});
    instance.close();

  });
     