function locomotiveanimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 

      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },

      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

};


function loader() {

    var tl = gsap.timeline()

    tl.from(".line h1, .line h2", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    });


    tl.from("#line1-part1, .line h2", {
        opacity: 0,
        onStart: function(){

            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function(){
                if(grow<100){
                    h5timer.innerHTML = grow++
                
                }else{
                    h5timer.innerHTML = grow
                
                }
            },32);
        }
    });

    tl.to("#loader", {
        opacity: 0,
        duration: 0.1,
        delay: 3
    });

    tl.from("#page1", {
        y: 1200,
        opacity: 0,
        delay: 0.1,
        duration: 0.5
    });

    tl.to("#loader", {
        display: "none"
    });

    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 120,
        stagger: 0.2
    })

}


function cursorAnimation() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 2, 0.320, 1)",
        duration: 1,
        scale: 4

    });
      
    Shery.makeMagnet("#nav-part2 h4", {
    });

    var videocontainer = document.querySelector("#vid-container")
    var video = document.querySelector("#vid-container video")
    videocontainer.addEventListener("mouseenter", function(){
        videocontainer.addEventListener("mousemove", function(dets){
            gsap.to(".mousefollower", {
                opacity: 0
            })
            gsap.to("#video-cursor", {
                left:dets.x -500,
                y:dets.y -100
            })
        })
    })
    videocontainer.addEventListener("mouseleave", function(){
        gsap.to(".mousefollower", {
            opacity: 1
        })
        gsap.to("#video-cursor",{
            left: "40%",
            top: "0%"
        })
    })

    var flag = 0
    videocontainer.addEventListener("click", function(){
        if(flag == 0){
            video.play(),
            video.style.opacity = 1,
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-line"></i>`
            gsap.to("#video-cursor", {
                scale: .5
            })
            flag = 1
        }else{
            video.pause(),
            video.style.opacity = 0,
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
            gsap.to("#video-cursor", {
                scale: 1
            })
            flag = 0
        }
    })
}


function sheryanimation() {
    Shery.imageEffect(".img-div", {
     style: 5,
     config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.9,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7930966609153571},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.53,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
     gooey: true
    })
};


function flaganimation() {

    document.addEventListener("mousemove", function(dets){
        gsap.to("#flag", {
            x:dets.x,
            y:dets.y
        })
    })
    
    
    document.querySelector("#hero3").addEventListener("mouseenter", function(){
        gsap.to("#flag", {
            opacity: 1
        })
    })
    
    document.querySelector("#hero3").addEventListener("mouseleave", function(){
        gsap.to("#flag", {
            opacity: 0
        })
    })
};


locomotiveanimation();
loader();
cursorAnimation();
sheryanimation();
flaganimation();





