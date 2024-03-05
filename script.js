var ang = 0;

$("#prev").click(function(){
	ang = ang + 22.5;
  $("*").css("--ang", ang);
});

$("#next").click(function(){
	ang = ang - 22.5;
  $("*").css("--ang", ang);
});







gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 10%',
      end: 'center 0.01%',
      scrub: true,
    },
  });
});



























