import React, { useEffect, useRef } from 'react'
import { contactDesc, footerHeader, footerIcons, footerNav } from '../src/components/GSAP';

const Footer = () => {
  const headingRef=useRef();
  const navRef=useRef();
  const GitRef=useRef();
  const LeetRef=useRef();
  const LinkdInRef=useRef();
  useEffect(()=>{
    footerHeader(headingRef.current);
    footerNav(navRef.current);
    footerIcons(GitRef.current);
    footerIcons(LeetRef.current);
    footerIcons(LinkdInRef.current);
  })
  return (
    <footer className='h-33 bg-[rgb(15,20,24)] overflow-hidden '>
        <div className='border-t md:flex items-center pt-8 md:py-10 justify-center gap-50 border-muted-foreground/20  '>
        <div className='flex flex-col md:ml-0 ml-4 ' ref={headingRef} >
           <a href='#' className='text-xl font-bold tracking-tight hover:text-primary' >
            JK<span className='text-primary' >.</span>
          </a>
          <p className='text-muted-foreground text-sm'>© 2026 Jatin. All rights reserved.</p>
        </div>
        <nav className='hidden gap-8 md:flex text-sm text-muted-foreground' ref={navRef} >
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
            <a href="/#certifications">Certifications</a>
        </nav>
         <div className='flex items-center gap-5 md:mr-4 mr-4 relative justify-end md:bottom-0 bottom-12 text-muted-foreground' >
          <a href="https://github.com/jatinkoushal" target='_blank'>
        <img src="/Github.png" alt="git hub" className='ml-2 cursor-pointer' ref={GitRef} /></a>
        <a href="https://leetcode.com/u/jatinkoushal/" target='_blank'>
        <img src="/Leetcode.png" alt="leetcode" className='ml-2 cursor-pointer' ref={LeetRef} /></a>
        <a href="https://www.linkedin.com/in/jatin-koushal-a91836342/" target="_blank">
        <img src="/LinkdIn.png" alt="linkdin" className='ml-5 cursor-pointer' ref={LinkdInRef} />
        </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer
