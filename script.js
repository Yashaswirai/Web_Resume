function mousefollow(dets) {
    var mouse = document.querySelector("#mousefollower");
    document.addEventListener("mousemove",function(dets){
        mouse.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)` 
})
}
function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
 
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}

function time(){
    var a = 0;
    setInterval(function(){
        a = a + (Math.floor(Math.random()*15));
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a +"%"
        }
        else{
            a=100;
            document.querySelector("#loader h1").innerHTML = a +"%"
        }
    },150)
}

function homeanimation(){
    gsap.from("#homeleft",{
        opacity:0,
        delay:6,
        ease: Power2
    })
    var tl = gsap.timeline();
    
        tl
        .to("#loader h1",{
            scale: 2  ,
            duration: 2,
            onStart: time()
        })
        .to("#loader",{
            top: "-100vh",
            delay: 0.5,
            duration: 2,
        })
        .from("#nav",{
            opacity: 0,
            y: -50,
        })
            .from("#navleft a",{
                y:-100,
                stagger: .4
            })
            .from("#homeright h2",{
                opacity: 0,
                x: 40, 
                ease: Expo.easeInOut
            })
            .from("#homeright h1",{
                opacity: 0,
                ease: Expo.easeInOut
            })
            .from("#homeright p",{
                opacity: 0,
                stagger:0.2,
                ease: Expo.easeInOut
            })
            .from("#homeright i",{
                opacity: 0,
                stagger:0.2,
                ease: Expo.easeInOut
            })
            .from("#homeright button",{
                opacity: 0,
                ease: Expo.easeInOut
            })
}
function aboutanim(){
    gsap.from("#aboutright",{
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: "#aboutright",
            scroller: "#main",
            // markers: true,
            scrub: true,
            start: "top 90%",
            end: "top 50%"
        }
    })
    gsap.from("#aboutleft h1,#aboutleft h2 ,#aboutleft p",{
        opacity: 0,
        y: 50,
        stagger: .4,
        scrollTrigger: {
            trigger: "#aboutleft h1,#aboutleft h2 ,#aboutleft p",
            scroller: "#main",
            // markers: true,
            scrub: true,
            start: "top 90%",
            end: "top 50%"
        }
    }) 
    gsap.from("#aboutleft button",{
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: "#aboutleft button",
            scroller: "#main",
            // markers: true,
            scrub: true,
            start: "top 100%",
            end: "top 80%"
        }
    })   
}    
function myservice(){
    gsap.from("#services h1",{
        opacity: 0,
        scale: 0,
        duration: 2,
        scrollTrigger: {
            trigger: "#services h1",
            scroller: "#main",
            // markers: true,
            end: "top 50%",
            scrub: true
        }
    })
    gsap.from("#boxes i, #boxes h3, #boxes p, #boxes button",{
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: "#boxes i, #boxes h3, #boxes p, #boxes button",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 50%",
            scrub: true
        }
    })
}
function myskill() {
    gsap.from("#skills h1",{
        y: -150,
        opacity: 0,
        ease: Power1,
        scrollTrigger: {
            trigger: "#skillright h1",
            scroller: "#main",
            // markers: true,
            end: "top 60%",
            scrub: true
        } 
    })
    gsap.from("#skillright .anim",{
        width: 0,
        ease: Power1,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#skillright .anim",
            scroller: "#main",
            // markers: true,
            end: "top 60%",
            scrub: true
        } 
    })
    gsap.from("#contain #creativity, #contain #communication, #contain #problem, #contain #team",{
        opacity: 0,
        stagger: 1,
        ease: Power1,
        scrollTrigger: {
            trigger: "#contain #creativity, #contain #communication, #contain #problem, #contain #team",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 50%",
            scrub: true
        } 
    })
}
function project() {
    gsap.from("#project h1",{
        y:-50,
        opacity: 0,
        stagger: .5,
        ease: Power1,
        scrollTrigger: {
            trigger: "#project h1",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 60%",
            scrub: true
        }
    })
    gsap.from(".item a img",{
        scale: 0,
        ease: Power1,
        scrollTrigger: {
            trigger: ".item img",
            scroller: "#main",
            // markers: true,
            start: "top 105%",
            end: "top 60%",
            scrub: true
        }
    })
    gsap.from(".item h2",{
        y: 100,
        ease: Power1,
        scrollTrigger: {
            trigger: ".item img",
            scroller: "#main",
            end: "top 60%",
            scrub: true
        }
    })
}
function contact() {
    gsap.from("#lcontact h1",{
        scale: 0,
        y:-50,
        opacity: 0,
        ease: Power1,
        scrollTrigger: {
            trigger: "#lcontact h1",
            scroller: "#main",
            // markers: true,
            end: "top 60%",
            scrub: true
        }
    })
    gsap.from("#lcontact h3, #lcontact p, #lcontact i",{
        x:-50,
        opacity: 0,
        stagger: .5,
        ease: Power1,
        scrollTrigger: {
            trigger: "#lcontact h3, #lcontact p, #lcontact i",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 43%",
            scrub: true
        }
    })
    gsap.from("form input, textarea",{
        x:50,
        opacity: 0,
        stagger: .5,
        ease: Power1,
        scrollTrigger: {
            trigger: "form input, textarea",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 70%",
            scrub: true
        }
    })
    gsap.from("form button",{
        scale: 0,
        opacity: 0,
        ease: Power1,
        scrollTrigger: {
            trigger: "form button",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 92%",
            scrub: true
        }
    })
}
loco()
mousefollow()
myskill()
homeanimation()
aboutanim()
myservice()
project()
contact()