const runAnimation=()=>{

    // const t1 =gsap.timeline({duration:0.3,stagger:0.4});
    var tl = new TimelineMax();

    gsap.from('#cloud3',{

        opacity:0,
        delay:0.1,
        translateX:50,


    })
    gsap.from('#cloud6',{

        opacity:0,
        delay:0.1,
        translateX:-50,
    })
    gsap.from('#semiCloud5',{

        opacity:0,
        delay:0.1,
        translateX:-50,
    })
    gsap.from('#cloud7',{

        opacity:0,
        delay:0.1,
        translateX:50,
    })
    
    // clouds done in

    // borders 
    gsap.from('#border1',{

        opacity:0,
        delay:0.1,
        translateY:-50,
        ease:Back.easeOut.config(1.7),
    })
        gsap.from('#border7',{

        opacity:0,
        delay:0.1,
        translateX:150,
        
        transformOrigin:'bottom right',
        delay:1.6,
   
        

    })
    gsap.from('#border4',{

        opacity:0,
        delay:.3,
        translateY:-50,
        stagger:0.3,
    
        
    })
    gsap.from('#border6',{

        opacity:0,
        delay:0.1,
        translateY:-100,
        stagger:0.3,
        rotate:-135,
        transformOrigin:'bottom left'
    })
    gsap.from('#border2',{

        opacity:0,
        delay:0.1,
        translateY:100,
        stagger:0.3,zIndex:99,
    })
    gsap.from('#border8',{

        opacity:0,
        delay:0.5,
        translateY:100,
        stagger:0.3,zIndex:99,
    })
    gsap.from('#border9',{

        opacity:0,
        delay:0.5,
        translateY:100,
        stagger:0.3,zIndex:99,
    })
    gsap.from('#border3',{

        opacity:0,
        delay:0.5,
        translateY:100,
        stagger:0.3,zIndex:99,
    })
gsap.from('#base',{

        opacity:0,
        delay:0.1,
        translateY:100,
        stagger:0.3
    })
    
gsap.from('#flower1',{
        rotate:110,
        
        
        duration:1,
        transformOrigin:'right '
       
 
    })

   
    
gsap.from('#flower2',{
        rotate:200,
        delay:0.1,
        ease:Back.easeOut.config(1.7),
       
    })
    
gsap.from('#flower3',{
        rotate:100,
        delay:0.1,
        transformOrigin:'bottom right',
        ease:Back.easeOut.config(1.7),
    })
    gsap.from('#flower4',{
            rotate:-100,
            delay:0.2,
            transformOrigin:'bottom',
            ease:Back.easeOut.config(1.7),
        })
    gsap.from('#moon',{
        translateY:300,
        duration:3,
        transformOrigin:'center',
        ease:Back.easeOut.config(1.7),
        })
    gsap.from('#leaf6',{
        rotate:60,
        transformOrigin:'bottom right',
        delay:0.5,
        ease:Back.easeOut.config(1.7),
    })
    gsap.from('#leaf8',{
        rotate:60,
        transformOrigin:'bottom right',
        ease:Back.easeOut.config(1.7),
       
    })
    gsap.from('#leaf7',{
        rotate:60,
        transformOrigin:'bottom left',
        ease:Back.easeOut.config(1.7),

       
    })
    gsap.from('#leaf3_1_',{
        rotate:60,
        transformOrigin:'bottom left',
        ease:Back.easeOut.config(1.7),
       
    })
    gsap.from('#leaf23',{
        rotate:60,
        transformOrigin:'bottom right',
        delay:1,
        ease:Back.easeOut.config(1.7),
       
    })
   
    gsap.from('#leaf44',{
        rotate:60,
        transformOrigin:'bottom right',
        delay:1.2,
        ease:Back.easeOut.config(1.7),
       
    })
    gsap.from('#leaf41',{
        rotate:60,
        transformOrigin:'bottom right',
        delay:1.6,
        ease:Back.easeOut.config(1.7),
       
    })
    gsap.from('#leaf45',{
        rotate:60,
        transformOrigin:'bottom right',
        delay:2,
        ease:Back.easeOut.config(1.7),
       
    })
    gsap.from('#leaf42',{
        rotate:30,
        transformOrigin:'top left',
        delay:1.7,
        ease:Back.easeOut.config(1.7),
        translateX:-30,
       
       
       
    })
    // var tl = new TimelineMax();

   
    // tl.fromTo("#leaf42", 1, {rotation:-10,translateX:-30}, {rotation:10, repeat:-1, yoyo:true, ease:Power2.easeInOut})
   
    gsap.from('#leaf5',{
        rotate:-110,
        transformOrigin:'bottom left',
        ease:Back.easeOut.config(1.7),
        
       
    })
    gsap.from('#leaf46',{
        rotate:-110,
        transformOrigin:'bottom left',
        delay:1,
        ease:Back.easeOut.config(1.7),
  
    })
    gsap.from('#leaf1',{
        rotate:110,
        transformOrigin:'top',
        delay:1,
        ease:Back.easeOut.config(1.7),
  
    })
    gsap.from('#leaf2',{
        rotate:110,
        transformOrigin:'top',
        delay:1.2,
        ease:Back.easeOut.config(1.7),
  
    })
    gsap.from('#leaf3',{
        rotate:-110,
        transformOrigin:'top',
        delay:1.2,
        ease:Back.easeOut.config(1.7),
  
    })
    gsap.from('#leaf43',{
        rotate:-120,
        transformOrigin:'top',
        delay:1.2
  
    })
    gsap.from('#cry1',{
        rotate:150,
        transformOrigin:'left',
        delay:1.2
  
    })
   
  

   
    gsap.from('#clif',{
        delay:0,
        translateY:300
    })
  
    gsap.from('#couple',{
        
        translateY:100
    })
  
    if (document.documentElement.clientWidth < 745) {

        gsap.from('#moon',{
            translateY:300,
            duration:3,
            transformOrigin:'center',
            ease:Back.easeOut.config(1.7),
            })
        gsap.to('#moon',{
            translateY:100,
            duration:3,
            transformOrigin:'center',
            ease:Back.easeOut.config(1.7),
            })

        gsap.from('#couple',{
        
            translateY:-300,
            opacity:0,
        })
        gsap.to('#couple',{
        
            translateY:600,
            opacity:1,
        })

        gsap.from('#clif',{
            delay:0,
            translateY:300
        })
        gsap.to('#clif',{
            delay:0,
            translateY:-65,
            translateX:-80,
        })
        // scripts
    }
    
    gsap.from('.cover',{
        delay:3,
        display:'none',
        opacity:0,
        color:'#FBB317'

    })
    
    


}