import React from 'react'

const Footer = () => {
  return (
    <footer className='h-33 bg-[rgb(15,20,24)]  '>
        <div className='border-t flex items-center py-10 justify-center gap-50 border-muted-foreground/20  '>
        <div className='flex flex-col' >
           <a href='#' className='text-xl font-bold tracking-tight hover:text-primary' >
            JK<span className='text-primary' >.</span>
          </a>
          <p className='text-muted-foreground text-sm ' >© 2026 Jatin Koushal. All rights reserved.</p>
        </div>
        <nav className='flex gap-8 text-sm text-muted-foreground'>
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
            <a href="/#certifications">Certifications</a>
        </nav>
         <div className='flex items-center gap-5 text-muted-foreground' >
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
