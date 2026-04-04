import React from 'react'

const Footer = () => {
  return (
    <footer className='h-33 bg-[rgb(15,20,24)]  '>
        <div className='border-t md:flex items-center pt-8 md:py-10 justify-center gap-50 border-muted-foreground/20  '>
        <div className='flex flex-col md:ml-0 ml-4 ' >
           <a href='#' className='text-xl font-bold tracking-tight hover:text-primary' >
            JK<span className='text-primary' >.</span>
          </a>
          <p className='text-muted-foreground text-sm' >© 2026 Jatin. All rights reserved.</p>
        </div>
        <nav className='hidden gap-8 md:flex text-sm text-muted-foreground'>
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
            <a href="/#certifications">Certifications</a>
        </nav>
         <div className='flex items-center gap-5 md:mr-4 mr-4 relative justify-end md:bottom-0 bottom-12 text-muted-foreground' >
          <a href="https://github.com/jatinkoushal" target='_blank'>
        <img src="/Github.png" alt="git hub" className='ml-2 cursor-pointer' /></a>
        <a href="https://leetcode.com/u/jatinkoushal/" target='_blank'>
        <img src="/Leetcode.png" alt="git hub" className='ml-2 cursor-pointer' /></a>
        <a href="https://www.linkedin.com/in/jatin-koushal-a91836342/" target="_blank">
        <img src="/LinkdIn.png" alt="git hub" className='ml-5 cursor-pointer' />
        </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer
