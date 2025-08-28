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

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    scrub: 2,
    markers:true,
    start:"0% 90%",
    end:"50% 50%"
  },
});

tl2.to("#coffee", {
  top: 615,
  left: 100,
  scale:0.9
},"cb");

tl2.to("#coffeeBean1",{
  top: 601,
  left: 218,
  scale:0.9,
  rotate:142
},"cb")

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#menu",
    scroller: "body",
    scrub: 2,
    markers:true,
    start:"0% 90%",
    end:"50% 50%"
  },
});

tl3.to("#coffee", {
  top: 1204,
  left: 525,
  scale:0.9
,},"cb");

tl3.to("#coffeeBean1",{
  top: 1192,
  left: 415,
  scale:0.9,
  rotate:211
},"cb")

tl3.from("#coffee1",{
  x:-300,
  duration:1,
},"cb")

tl3.from("#coffee2",{
  x:300,
  duration:1,
},"cb")