import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '../src/components/ProjectCard'

const Projects = () => {

  return (
    <div className='bg-[rgb(15,20,24)] h-[160vh]' >
      <div className='flex flex-col md:items-center md:p-18 p-4  md:ml-50 md:w-[70%] md:pt-20 pt-10' id='projects'>
      <p className='text-primary text-sm mb-4' >FEATURED WORK</p>
      <h1 className='md:text-5xl text-3xl mb-5' ><span className="text-primary font-bold" >Projects that</span><span className='font-serif italic ' > make an impact.</span></h1>
      <p className='text-muted-foreground md:text-center' >A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.</p>
      </div>
    <div>
      <ProjectCard />
    </div>
    <div className='flex justify-center' >
      <a href="#viewallprojects">
      <button className='flex w-100 md:w-55 h-15 rounded-full border-none mt-3 items-center justify-center btn-color text-lg font-bold' >
          View All Projects <ArrowUpRight size={20} className='ml-1' />
      </button>
      </a>
      </div>
    </div>
  )
}

export default Projects
