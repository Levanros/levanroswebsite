ScrollTrigger.normalizeScroll(true);

function header(){
        var menu=document.querySelector(".ri-menu-4-fill");
        var cross=document.querySelector(".ri-close-large-fill");
        var body=document.querySelector(".hero-section-text1");

        var tl=gsap.timeline();
        tl.to(".full",{
        right:0,
        duration:0.8
        });
        tl.from(".full h4",{
        x:150,
        duration:0.7,
        stagger:0.28,
        opacity:0
        })
        tl.from(".full i",{
        opacity:0
        });
        tl.pause()

        menu.addEventListener("click",()=>{
            tl.play();
        })
        cross.addEventListener("click",()=>{
            tl.reverse();
        })
        body.addEventListener("click",()=>{
            tl.reverse();
        })
}
function cursor(){
    var cursor=document.querySelector('.cursor');
    var body=document.querySelector("html");
    var imageDiv=document.querySelector(".grid-item");
    
    
    body.addEventListener("mouseenter",(dets)=>{
        gsap.to(cursor,{
        opacity:1,
        duration:0.01
            
        })
    });

    body.addEventListener("mousemove",(dets)=>{
        gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.8  
        })
    });

    imageDiv.addEventListener("mouseenter",()=>{
        cursor.innerHTML="view site";
        gsap.to(cursor,{
            scale:2,
            backgroundColor: "#cf3c2996"
        })
    })
    imageDiv.addEventListener("mouseleave",()=>{
        cursor.innerHTML=""
        gsap.to(cursor,{
            backgroundColor:"#00d1cd",
            scale:1,
           
        })
    })
    
    }
function vectorAnimate(){
    var vectoranimation=document.querySelector(".image-section-image-class");
    gsap.to(vectoranimation,{
        y:20,
        duration:1.3,
        repeat:-1,
        yoyo:true,
        yoyoease:true,
        ease: "power1.inOut",
        skewX:2,
        skewY:2

    })

}
function page2() {
    
let mm=gsap.matchMedia();
mm.add("(max-width:500px)",()=>{
  gsap.to(".page2 h1",{
    transform:"translateX(-450%)",
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      markers:"true",
      start:"top 0%",
      end:"top -100%",
      scrub:2,
      pin:true
  
    }
  });
})
mm.add("(min-width:500px)",()=>{
  gsap.to(".page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",

      start:"top 0%",
      end:"top -100%",
      scrub:2,
      pin:true
  
    }
  });
})
}

function section2(){

let mm= gsap.matchMedia();

mm.add("(max-width:500px)",()=>{
    gsap.to(".section-2 h1",{
        transform:"translateX(-100%)",
        scrollTrigger:{
          trigger:".section-2",
          scroller:"body",
          start:"top 0%",
          end:"top -100%",
          scrub:2,
          pin:true
      
        }
      });

    
      
   
})

mm.add("(min-width:500px)",()=>{
    gsap.to(".section-2 h1",{
        transform:"translateX(-100%)",
        scrollTrigger:{
          trigger:".section-2",
          scroller:"body",
          start:"top 0%",
          end:"top -100%",
          scrub:2,
          pin:true
      
        }
      });
  })


    
}

function textmove(){
    window.addEventListener("wheel",(dets)=>{
        if(dets.deltaY>0){
          gsap.to(".marque",{
              transform:'translateX(-200%)',
              ease:"none",
              duration:5,
              repeat:-1,
              
          })
          gsap.to(".marque i",{
            rotate:180
        })
         
        }else{
          gsap.to(".marque",{
              transform:'translateX(0%)',
              ease:"none",
              duration:5,
              repeat:-1,
             
             
          })
          gsap.to(".marque i",{
              rotate:0
          })
  
        }
  });
  

}

function textanimation(){

    gsap.from(".grid-item-left",{
         x:-200,
         scale:1.2,
         duration:5,
         scrollTrigger:{
            trigger:".section-3",
            scroller:"body",
            
           
            start:"top 50%",
            end:"top 20%",
            scrub:2
    
         }
           
        
    });

    gsap.from(".grid-item-right",{
        x:200,
        scale:1.2,
        duration:5,
        scrollTrigger:{
           trigger:".section-3",
           scroller:"body",
           
           start:"top 50%",
           end:"top 20%",
           scrub:2
   
        }
          
       
   });
    
    
    gsap.from(".description",{
        y:20,
        borderRadius:8000,
        
        duration:2,
        scrollTrigger:{
           trigger:".section-5",
           scroller:"body",
           markers:false,
           start:"top 40%",
           end:"top 50%",
           scrub:1
    
        }
          
       
    });
    
    
    }
    

textmove();
header();
cursor();
vectorAnimate();
section2();
textanimation();
page2();

ScrollTrigger.refresh();

