import React, { useEffect, useRef } from 'react'
import Button from '../src/components/Button'
import { Download, MoveRight } from 'lucide-react'
import {heading,desc,btn} from '../src/components/GSAP'

const Hero = () => {
  const titleRef=useRef(null);
  const descRef=useRef();
  const CbtnRef=useRef();
  const DbtnRef=useRef();
  const GitRef=useRef();
  const linkRef=useRef();
  const leetRef=useRef();
  useEffect(()=>{
      heading(titleRef.current,0.3,0.5);
      desc(descRef.current);
      btn(CbtnRef.current);
      btn(DbtnRef.current);
      btn(GitRef.current);
      btn(leetRef.current);
      btn(linkRef.current);
  },[])
  return (
    <section className='relative min-h-screen flex items-center px-1 md:px-8 md:py-28 pb-0 pt-0 md:pb-12' >
      <div className='absolute inset-0 hero' >
        <img src="/hero-bg.jpg" alt="Hero image" className='w-full object-cover h-full opacity-50  opacity-20 block [mask-image:linear-gradient(to_bottom,black_30%,transparent_80%)] ' />
        <div className='absolute inset-0 bg-gradient-to-b 
from-[rgba(15,20,24,0.2)] 
via-[rgba(15,20,24,0.8)] 
to-[rgb(15,20,24)]' ></div>
      </div>
      <div className='relative z-10 text-center px-4' >
        <div className='md:w-[50%] w-screen ' >
          <h1 className='text-5xl md:text-7xl font-bold text-white leading-tight text-left heading1' ref={titleRef} >
            Crafting <span className='text-primary [text-shadow:0px_0px_30px_theme(colors.primary)]' >digital </span> 
             experiences with
           <i className='font-serif font-thin italic '> precision.</i>
          </h1>
          <p className='py-8 text-left leading-7 md:w-[80%] font-[500] text-muted-foreground text-[1.13rem]' ref={descRef} >Hi, I'm Jatin — a Frontend Developer crafting high-performance web experiences. I bridge the gap between complex logic in C++ and fluid, interactive interfaces using React and GSAP.</p>
        </div>
        <div className='flex w-[92%] md:flex-row flex-col justify-start md:items-center gap-4'>
        <a href='/#contact' className='flex' >
        <div ref={CbtnRef} className='flex w-full' ><Button size="lg" className=' mt-3 md:w-auto flex w-full justify-center' >
          Contact Me <MoveRight/>
        </Button></div></a>
        <a href="https://drive.google.com/file/d/1Wt-7325-Inm4EyiEnXv1Ckyj-MrOFLLp/view?usp=sharing" target='_blank' >
        <div ref={DbtnRef}><button className='flex md:w-50 w-full h-15 rounded-full border-none mt-3 bg-surface  items-center justify-center btn-color mx-0'  >
          Download Resume <Download className='ml-2' />
        </button></div>
        </a>
        </div>
        <div className='flex items-center mt-10 gap-5 text-muted-foreground' >
          <p>Follow me:</p> 
          <a href="https://github.com/jatinkoushal" target='_blank'>
        <img src="/Github.png" alt="git hub" className='ml-2 cursor-pointer' ref={GitRef} /></a>
        <a href="https://leetcode.com/u/jatinkoushal/" target='_blank'>
        <img src="/Leetcode.png" alt="git hub" className='ml-2 cursor-pointer' ref={leetRef} /></a>
        <a href="https://www.linkedin.com/in/jatin-koushal-a91836342/" target="_blank">
        <img src="/LinkdIn.png" ref={linkRef} alt="git hub" className='ml-5 cursor-pointer' />
        </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
