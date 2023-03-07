gsap.registerPlugin(ScrollTrigger);

gsap.from(".tinder-publico", {
  scrollTrigger: {
    trigger: ".tinder-publico",
    markers: true,
    start: "20px 60%",
    // end: () => `+=${document.querySelector(".tinder-publico").offsetHeight}`,
    toggleActions: "restart complete restart none",
    toggleClass: { targets: ".tinder-publico", className: "show" },
  },
  y: 15,
  duration: 3,
  ease: "power1.out",
});
