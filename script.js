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
loader();


function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
    
    
    Shery.makeMagnet("#nav-part2 h4", {
    });
}

cursorAnimation();