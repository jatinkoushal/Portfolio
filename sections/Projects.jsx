import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '../src/components/ProjectCard'
import { useEffect, useRef } from 'react'
import { featureHeading, featurepara, features, viewbtn } from '../src/components/GSAP';

const Projects = () => {
  const parentRef=useRef();
  const featureRef=useRef();
  const HeadingRef=useRef();
  const paraRef=useRef();
  const viewRef=useRef();
  useEffect(()=>{
    viewbtn(viewRef.current,parentRef.current);
    featurepara(paraRef.current,parentRef.current);
    featureHeading(HeadingRef.current,parentRef.current);
    features(featureRef.current,parentRef.current)
  })
  return (
    <div className='bg-[rgb(15,20,24)] h-[160vh] projects' ref={parentRef} >
      <div className='flex flex-col md:items-center md:p-18 p-4  md:ml-50 md:w-[70%] md:pt-20 pt-10' id='projects'>
      <p className='text-primary text-sm mb-4' ref={featureRef} >FEATURED WORK</p>
      <div ref={HeadingRef}>
      <h1 className='md:text-5xl text-3xl mb-5' ><span className="text-primary font-bold" >Projects that</span><span className='font-serif italic ' > make an impact.</span></h1>
      </div>
      <p className='text-muted-foreground md:text-center' ref={paraRef} >A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.</p>
      </div>
    <div>
      <ProjectCard />
    </div>
    <div className='flex justify-center' ref={viewRef} >
      <a href="https://github.com/jatinkoushal?tab=repositories" target='_blank'>
      <button className='flex w-100 md:w-55 h-15 rounded-full border-none mt-3 items-center justify-center btn-color text-lg font-bold' >
          View All Projects <ArrowUpRight size={20} className='ml-1' />
      </button>
      </a>
      </div>
    </div>
  )
}

export default Projects
