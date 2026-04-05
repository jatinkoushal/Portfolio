import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const tl=gsap.timeline();
export const heading=(ele,delay=0.3,duration=0.5)=>{
tl.from(ele,{
    x:-400,
    delay,
    duration,
    opacity:0,
    ease:'power1.out'
})
}
export const desc=(ele,duration=0.5)=>{
    const desc=SplitText.create(ele,{type:'lines'});
    tl.from(desc.lines,{
        y:50,
        duration,
        opacity:0,
        stagger:0.1,
        ease:'power1.inOut'
    })
}
export const btn=(ele,duration=0.3)=>{
    tl.from(ele,{
        scale: 0,
        opacity:0,
       duration,
    })
}
export const aboutHeading=(ele,secele)=>{
    const title=SplitText.create(secele,{type:'words'});
    const timeline=gsap.timeline({
        scrollTrigger:{
            trigger:'.hero',
            start:'80%',
            end:'120%',
            scrub:1,
        },  ease:'power1.inOut',
    })
    timeline.fromTo(ele,{
        x:-300,
        opacity:0,
        immediateRender:false,
    },{
        opacity:1,
        x:0,
    }).from(title.words,{
         x:-300,
        opacity:0,
        stagger:0.06,
        ease:'power1.in'
    })
}
export const aboutMe=(ele,y)=>{
    gsap.from(ele,{
        scrollTrigger:{
            trigger:'.hero',
            start:'70%',
            end:'90%',
            scrub:true,
        },
        y,
        opacity:0,
        ease:'bounce'
    })
}

export const cardsAnima=(ele,parent,x,y)=>{
    gsap.from(ele,{
        scrollTrigger:{
            trigger:parent,
            start:'15%',
            end:'20%',
            scrub:1,
        },
        x,
        y,
        opacity:0,
        ease:'power1.inOut'
    })
}
export const features=(ele,parent)=>{
    gsap.from(ele,{
        scrollTrigger:{
            trigger:parent,
            start:'-27%',
            end:'-5%',
            scrub:true,
        },
        y:-30,
        opacity:0,
        ease:'bounce'
    })
}
export const featureHeading=(ele,parent)=>{
        gsap.from(ele,{
        scrollTrigger:{
            trigger:parent,
            start:'-25%',
            end:'-5%',
            scrub:true,
        },
        y:20,
        opacity:0,
        ease:'power1.inOut'
    })
}
export const featurepara=(ele,parent)=>{
      const title=SplitText.create(ele,{type:'words'});
      gsap.from(title.words,{
        scrollTrigger:{
            trigger:parent,
            start:'-10%',
            end:'8%',
            scrub:true,
        },
        x:200,
        opacity:0,
        stagger:0.06,
        ease:'power1.in'
      })
}
export const lproject=(ele)=>{
    gsap.from(ele,{
        scrollTrigger:{
            trigger:'.projects',
            start:'-10%',
            end:'10%',
            scrub:true,
        },
        x:-100,
        opacity:0,
        ease:'power1.in'
    })
}
export const rproject=(ele)=>{
    gsap.from(ele,{
        scrollTrigger:{
            trigger:'.projects',
            start:'-10%',
            end:'10%',
            scrub:true,
        },
        x:100,
        opacity:0,
        ease:'power1.in'
    })
}
export const viewbtn=(ele,parent)=>{
    gsap.from(ele,{
        scrollTrigger:{
            trigger:parent,
            start:'60%',
            end:'70%',
            scrub:true,
        },
        scale:0,
        opacity:0,
        ease:'bounce.inOut'
    })
}
export const lcertificate=(ele)=>{
    gsap.from(ele,{
        scrollTrigger:{
            trigger:'.certificates',
            start:'-10%',
            end:'9%',
            scrub:true,
        },
        x:-200,
        opacity:0,
        ease:'power1.in'
    })
}
export const rcertificate=(ele)=>{
 gsap.from(ele,{
        scrollTrigger:{
            trigger:'.certificates',
            start:'9%',
            end:'50%',
            scrub:true,
        },
        x:200,
        opacity:0,
        ease:'power1.in'
    })   
}