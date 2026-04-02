import { ArrowUpRight } from 'lucide-react'
import { Certification } from '../src'

const Certifications = () => {
  return (
    <div className='pt-10 bg-[rgb(15,20,24)] h-[200vh]' id='certifications' >
      <h1 className='text-center mb-8 font-bold text-primary-foreground text-3xl' >Certifications</h1>
      <div className='flex flex-col gap-20'>
      {
      Certification.map((item,index) => (
      <div key={index} className='flex justify-center' >
      <div className='bg-[rgb(244,243,249)] w-250 h-120 rounded certificate-box' >
      <img src={item.logo} alt="Logo" className='relative rounded h-50' />
      <h1 className='text-black relative px-18 font-bold text-2xl '>{item.heading}</h1>
      <div className='text-black w-[60%] ' >
        <ul className='list-disc px-18 text-sm text-muted-foreground mt-3' >
          {item.ul.map((li,index)=>(
            <li key={index} className='mt-2'>{li}</li>
          ))}
        </ul>
      </div>
      <div>
        <a href={item.Credential_link} target='_blank' >
      <ArrowUpRight size={30} className='relative bottom-50 left-190 z-1 icon' />
      </a>
      </div>
      <a href={item.Credential_link} target='_blank'>
      <h1 className='text-black relative left-150 bottom-20 font-bold text-3xl hover:text-gray-600 cursor-pointer inline-flex gap-3 cert'>Show Credential <ArrowUpRight className='arrow' size={35} /> </h1>
      </a>
      <div className='relative bottom-105 left-105 ml-40 mt-3 overflow-hidden rounded h-70 w-100 project-box' >
      <img src={item.Cert_link} alt="CERTIFICATE" className='w-100 h-70 rounded project-img' />
      </div>
      </div>
      </div>
      ))
      }
      </div>
    </div>
  )
}

export default Certifications
