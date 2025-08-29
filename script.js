let tl = gsap.timeline();
tl.from(".front", {
  y: 1000,
  duration: 1,
});
tl.from("#coffee", {
  y: 800,
  duration: 1,
  scale: 2,
});
tl.from(".front h1", {
  y: 1000,
  duration: 1,
});
tl.from("#coffeeBean1", {
  y: 800,
  duration: 1,
  scale: 2,
});
tl.from("#coffeeBean2", {
  y: 800,
  duration: 1,
  scale: 2,
});
tl.from("#coffeeBean3", {
  y: 800,
  duration: 1,
  scale: 2,
});
tl.from("#coffeeBean4", {
  y: 800,
  duration: 1,
  scale: 2,
});
tl.from("#coffeeBean5", {
  y: 800,
  duration: 1,
  scale: 2,
});

let master = gsap.timeline({
  scrollTrigger: {
    trigger: "#coffeeWrapper", 
    scroller: "body",
    scrub: 2,
    start:"top center",
    end:"center top",
  }
});

master.to("#coffee", {
  top: 615,
  left: 100,
  scale: 0.9,
}, "about")

master.to("#coffeeBean1", {
  top: 601,
  left: 218,
  scale: 0.9,
  rotate: 142
}, "about")

master.to("#coffee", {
  top: 1204,
  left: 525,
  scale: 0.9,
}, "menu")

master.to("#coffeeBean1", {
  top: 1192,
  left: 415,
  scale: 0.9,
  rotate: 211
}, "menu")

master.from("#coffee1", { 
  x: -300, 
  duration: 1 
}, "menu")
master.from("#coffee2", { 
  x: 300, 
  duration: 1 
}, "menu");
 
master.to("#coffee", {
  top: 1838,
  left: 786,
  scale: 0.9,
  zIndex:10
}, "contact")

master.to("#coffeeBean1", {
  top: 1815,
  left: 728,
  scale: 0.9,
  rotate: 133
}, "contact")

master.to("#coffee1", {
  top: 686,
  left: 556,
  scale: 1,
  rotate: -14
}, "contact")

master.to("#coffee2", {
  top: 650,
  left: 985,
  scale: 1  ,
  rotate: 14,
}, "contact")

