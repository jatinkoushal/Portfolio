import React from 'react'
import Button from '../src/components/Button'
import { Download, FolderGitIcon, GitForkIcon, MoveLeftIcon, MoveRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden px-8 py-28 pb-12' >
      <div className='absolute inset-0' >
        <img src="/hero-bg.jpg" alt="Hero image" className='w-full object-cover h-full opacity-50  opacity-20 block [mask-image:linear-gradient(to_bottom,black_30%,transparent_80%)] ' />
        <div className='absolute inset-0 bg-gradient-to-b 
from-[rgba(15,20,24,0.2)] 
via-[rgba(15,20,24,0.8)] 
to-[rgb(15,20,24)]' ></div>
      </div>

      <div>
        {/* {<div>
          {Array.from({ length: 20 }).map((_, index) => {
            const size = Math.random() * 5 + 2;
            const left = Math.random() * 100;
            const duration = Math.random() * 5 + 5;
            const delay = Math.random() * 0;

            return (
              <div
                key={index}
                className="dot"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}vw`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>} */}
      </div>
      <div className='relative z-10 text-center px-4' >
        <div className='w-[50%] ' >
          <h1 className='text-6xl md:text-7xl font-bold text-white leading-tight text-left' >
            Crafting <span className='text-primary [text-shadow:0px_0px_30px_theme(colors.primary)]' >digital </span> 
             experiences with
           <i className='font-serif font-thin italic '> precision.</i>
          </h1>
          <p className='py-8 text-left leading-7 w-[80%] font-[500] text-muted-foreground text-[1.13rem]' >Hi, I'm Jatin — a Frontend Developer crafting high-performance web experiences. I bridge the gap between complex logic in C++ and fluid, interactive interfaces using React and GSAP.</p>
        </div>
        <div className='flex justify-start items-center gap-4 '>
        <a href='/#contact' ><Button size="lg" className='mt-3' >
          Contact Me <MoveRight/>
        </Button></a>
        <button className='flex w-50 h-15 rounded-full border-none mt-3 bg-surface  items-center justify-center btn-color' >
          Download Resume <Download className='ml-2' />
        </button>
        </div>
        <div className='flex items-center mt-10 gap-5 text-muted-foreground' >
          <p>Follow me:</p> 
          <a href="https://github.com/jatinkoushal" target='_blank'>
        <img src="/Github.png" alt="git hub" className='ml-2 cursor-pointer' /></a>
        <a href="https://leetcode.com/u/jatinkoushal/" target='_blank'>
        <img src="/Leetcode.png" alt="git hub" className='ml-2 cursor-pointer' /></a>
        <a href="https://www.linkedin.com/in/jatin-koushal-a91836342/" target="_blank">
        <img src="/LinkdIn.png" alt="git hub" className='ml-5 cursor-pointer' />
        </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
