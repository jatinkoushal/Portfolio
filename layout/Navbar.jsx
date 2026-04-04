import React, { useState } from 'react'
import Button from '../src/components/Button'
import { Menu, X } from 'lucide-react'
const navLinks=[
  {href:"#about",label:"About"},
  {href:"#projects",label:"Projects"},
  {href:"#certifications",label:"Certifications"},
]


const Navbar = () => {
  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
  return (
    <header className='fixed right-0 top-0 left-0 bg-[#00000050] w-screen py-4 z-99 backdrop-blur-[6px]' >
        <nav className='container mx-auto px-6 flex items-center justify-between'>
          <a href='#' className='text-xl font-bold tracking-tight hover:text-primary' >
            JK<span className='text-primary' >.</span>
          </a>

          <div className='hidden md:flex  items-center gap-1' >
            <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link,index)=>(
              <a key={index} href={link.href} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface' >{link.label}</a>
            ))}
            </div>
          </div>

          <div className='hidden md:block' >
            <a href="/#contact">
            <Button size="sm">
              Contact Me
            </Button>
            </a>
          </div>

          <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={()=> setIsMobileMenuOpen((prev) => !prev )} >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

            {isMobileMenuOpen && (
          <div className='md:hidden glass-strong animate-fade-in' >
          <div className='container mx-auto px-6 py-6 flex flex-col gap-4' >
            {navLinks.map((link,index)=>(
              <a key={index} href={link.href} className='text-lg text-muted-foreground hover:text-foreground py-2' >{link.label}</a>
            ))}
            <Button>
              Contact Me
            </Button>
          </div>
        </div>
          ) }
    </header>
  )
}

export default Navbar
