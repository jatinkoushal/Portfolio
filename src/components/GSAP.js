import gsap from "gsap";
import { SplitText } from "gsap/all";

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
