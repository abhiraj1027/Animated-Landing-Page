var tl = gsap.timeline()

tl.from('#nav h3',{
    y:-50,
    opacity:0,
    duration:0.5,

    ease:"power2.out",})

tl.from('#nav h2',{
    y:-50,
    opacity:0,
    duration:0.5,

    ease:"power2.out",
    stagger:0.2    //0.2 mili seconds k antar pr leke aayega ek ek kr k saare h2 ko
})

tl.from('#main h1',{
    opacity:0,
    x:-500,
    duration:0.5,
    stagger:0.2,
    ease:"power2.out",
})
tl.from('img',{
    x:100,
    opacity:0,
    duration:0.5,
    ease:"power2.out",
    rotate:45,
    stagger:0.4
})