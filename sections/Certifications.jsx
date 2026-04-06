import { ArrowUpRight } from 'lucide-react'
import { Certification } from '../src'
import { useEffect, useRef } from 'react'
import { featureHeading, lcertificate, rcertificate, } from '../src/components/GSAP';

const Certifications = () => {
  const cards=[lcertificate,rcertificate];
  const headingRef=useRef();
  const certificates=useRef([]);
  useEffect(()=>{
    certificates.current.forEach((ele,i)=>{
      cards[i](ele);
    })
    featureHeading(headingRef.current,'.certificates');
  })
  return (
    <div className='pt-10 md:pt-10 p-4 md:p-auto bg-[rgb(15,20,24)] md:h-[190vh] certificates overflow-hidden' id='certifications'  >
      <h1 className='text-center mb-8 font-bold text-primary-foreground text-3xl' ref={headingRef}>Certifications</h1>
      <div className='flex flex-col gap-20'>
      {
      Certification.map((item,index) => (
      <div key={index} ref={(e)=> certificates.current[index]=e} className='md:flex justify-center' >
      <div className='bg-white md:w-250 md:h-120 h-96 rounded certificate-box ' >
        <div className='flex md:block flex-row' >
      <img src={item.logo} alt="Logo" className='relative rounded md:h-50 h-15 md:m-0 m-2' />
      <h1 className='text-black relative md:px-18 md:py-0 py-4 md:pr-0 pr-9 font-bold text-xl md:text-2xl '>{item.heading}</h1>
      </div>
      <div className='text-black md:w-[60%] ' >
        <ul className='list-disc px-8 md:px-18 text-sm text-muted-foreground mt-3' >
          {item.ul.map((li,index)=>(
            <li key={index} className='mt-2'>{li}</li>
          ))}
        </ul>
      </div>
      <div>
        <a href={item.Credential_link} target='_blank' >
      <ArrowUpRight size={30} className='md:block hidden relative bottom-50 left-190 z-1 icon' />
      </a>
      </div>
      <div className='bg-gray-200 h-12 border-muted-foreground border-t rounded-br rounded-bl mt-3 md:h-0 flex items-end justify-end md:block md:border-none'>
      <a href={item.Credential_link} target='_blank'>
      <h1 className='text-black md:relative left-150 bottom-25 font-bold md:text-3xl text-xl hover:text-gray-600 cursor-pointer inline-flex gap-3 cert'>Show Credential <ArrowUpRight className='arrow' size={35} /> </h1>
      </a>
      </div>
      <div className='relative bottom-105 left-105 ml-40 mt-3 overflow-hidden rounded h-70 w-100 project-box' >
      <img src={item.Cert_link} alt="CERTIFICATE" className='w-100 h-70 rounded project-img hidden md:block ' />
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