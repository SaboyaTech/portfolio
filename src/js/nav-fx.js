// responsive navbar (changes color on scrolling)
$(window).scroll(function() {
  let height = $(".nav-section").height();
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= height + 890) {
    // makes the navbar solid
    $(".nav-section").addClass("nav-solid");
  } else {
    // restores the bg transparency
    $(".nav-section").removeClass("nav-solid");
  }
});

/* After a certain point on the page When scrolling down, hide the navbar. When scrolling up, show the navbar */
// $("#back2Top").hide();
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   let scrollTop = $(window).scrollTop();
//   let currentScrollPos = window.pageYOffset;
//   if (scrollTop < 790) {
//     $("#back2Top").hide();
//   } else if (scrollTop >= 790) {
//     if (prevScrollpos > currentScrollPos) {
//       $(".navbar").css("top", "0");
//       $("#back2Top").fadeOut();
//     } else {
//       $(".navbar").css("top", "-8em");
//       $("#back2Top").fadeIn();
//     }
//     prevScrollpos = currentScrollPos;
//   }
// };