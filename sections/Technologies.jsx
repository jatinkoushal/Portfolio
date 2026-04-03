import { ChevronsDown } from 'lucide-react'
import React from 'react'

const Technologies = () => {
    const skills=["React","GSAP","C/C++","JavaScript","HTML","Tailwind CSS","PHP","MYSQL","PYTHON"]
    return (
    <section className='md:h-[30vh] bg-[rgb(15,20,24)]' >
        <div className='text-muted-foreground  flex justify-center text-sm' >Technologies I work with</div>
        <div className='relative overflow-hidden pt-6 [mask-image:linear-gradient(to_right,transparent_4%,black_30%,black_70%,transparent)]'>
        <div className='flex skill' >
        {[...skills,...skills].map((skill,index)=>(
            <div key={index} className='flex-shrink-0 px-8 py-4' >
                <span className='md:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors' >{skill}</span>
            </div>
        ))}
        </div>
        </div>
        <p className='text-muted-foreground/50 text-sm flex items-center justify-center flex-col'>SCROLL <span><ChevronsDown className='animate-bounce mt-2'/></span> </p>
    </section>
  )
}

export default Technologies
