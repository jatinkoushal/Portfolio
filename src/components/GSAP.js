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
export const aboutMe=(ele)=>{
    gsap.from(ele,{
        scrollTrigger:{
            trigger:'.hero',
            start:'70%',
            end:'80%',
            scrub:true,
        },
        y:-300,
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