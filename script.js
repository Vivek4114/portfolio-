$(document).ready(function() {
  // Hamburger icon par click karne par navbar ko toggle karo
  $('.fa-bars').click(function() {
      $(this).toggleClass('fa-bars fa-times'); // Hamburger icon ko cancel icon se badalna
      $('.navbar').toggleClass('nav-toggle');  // Navbar ko show ya hide karna
  });

  // Cancel icon (fa-times) pe click karne par navbar ko hide karo
  $('.fa-times').click(function() {
      $(this).toggleClass('fa-times fa-bars'); // Cancel icon ko wapas hamburger icon se badalna
      $('.navbar').removeClass('nav-toggle');  // Navbar ko hide karna
  });
});
