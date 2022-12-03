// Scroll Reveal
ScrollReveal({
   reset: true,
   distance: "60px",
   duration: 2000,
   delay: 400,
});

ScrollReveal().reveal(".header-section", { delay: 500, origin: "left" });
ScrollReveal().reveal(".header_wrap", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".header_content_box .headline_title", { delay: 500, origin: "left" });
ScrollReveal().reveal(".header_content_box .headline_button", { delay: 500, origin: "right" });
ScrollReveal().reveal(".box, .copyright span, .copyright a", { delay: 500, origin: "bottom", interval: 200 });
ScrollReveal().reveal(".about_wrap img, .left_item", { delay: 500, origin: "top" });
ScrollReveal().reveal(".about_wrap .text-center, .right_item", { delay: 500, origin: "bottom" });
