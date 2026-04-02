import { ArrowUpRight } from 'lucide-react'
import { FiGithub } from "react-icons/fi";
import Project_Details from '..';

const ProjectCard = () => {
  return (
    <div className='flex gap-20 p-16 pt-0 justify-center' >
      {
        Project_Details.map((project,index) => (
           <div key={index} className='bg-[rgb(20,28,33)] rounded w-[40%] h-130 border border-bg-color overflow-hidden imgs' >
        <img src={project.image} className='rounded-tr rounded-tl object-cover transition-transform duration-[1000ms] hover:scale-110' alt="GSAP Project" />
        <div className='border-1px h-52 relative z-1 project-card bg-[rgb(20,28,33)] p-6 py-0'>
        <div className=' gap-8 relative z-2 bottom-40 left-40 inline-flex ' >
          <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
        <FiGithub size={30} className='icon' />
        </a>
        <a href={project.liveDemoLink} target='_blank' rel='noopener noreferrer'>
        <ArrowUpRight size={30} className='icon' />
        </a>
        </div>
          <div className='flex justify-between' >
          <h1 className='text-xl font-bold '>{project.title}</h1>
          <a href={project.liveDemoLink} target='_blank' rel='noopener noreferrer'>
         <ArrowUpRight className='w-4.5 arrow' />
         </a>
         </div>
          <p className='text-sm text-muted-foreground mt-4' >{project.description}</p>
          <div className='flex gap-3' >
            {project.skills.map((skill, index) => (
              <button key={index} className='project-skill' >{skill}</button>
            ))}
          </div>
        </div>
      </div>
        ))
      }
    </div>
  )
}

export default ProjectCard
