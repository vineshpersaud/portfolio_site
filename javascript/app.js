$(document).ready(function() {
  // https://stackoverflow.com/questions/45728818/how-to-smooth-scroll-to-an-id-after-clicking-a-link-from-another-page
  $('#linkproj').click(function(event) {
     event.preventDefault();
     $('html, body').animate({
          scrollTop : $(this.hash).offset().top
      }, 1000);
  });

});
