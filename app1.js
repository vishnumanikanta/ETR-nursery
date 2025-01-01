



gsap.from(".navbar-brand", {
    y:-20,
    duration: 1,
    delay: 0,
    opacity: 0
   
  

});
var tl=gsap.timeline()
tl.from("li", {

    y: -20,
    opacity: 0,
    duration: 1,
    delay:0.5,
    stagger: 0.3
  
});

