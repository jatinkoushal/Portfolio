import { CodeXml } from 'lucide-react'
import React from 'react'

const AboutCard = ({value,title,description}) => {
    let Component=value;
  return (
    <div className='bg-[rgb(20,28,33)] md:h-45 rounded md:w-[22vw] border border-bg-color p-6' >
      <div className='bg-[rgb(21,43,46)] hover:bg-[rgb(39,79,83)] w-12 h-12 rounded flex justify-center items-center' ><Component color="#20b2a6"/></div>  
      <h1 className='font-bold mt-4' >{title}</h1>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </div>
  )
}

export default AboutCard
