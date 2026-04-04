import { SendIcon,CheckCircle,AlertCircle, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  });
  const [isLoading,setIsLoading]=useState(false);
  const [submitStatus,setSubmitStatus]=useState({
    type:null,
    message:"",
  })
  const handleform = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setSubmitStatus({type:null,message:""});
    try{
      const serviceId=import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId=import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey=import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if(!serviceId || !templateId || !publicKey){
        throw new Error(
        "EmailJS configuration is missing.Please Check .env variables"
        );
      }

      await emailjs.send(serviceId,templateId,{
        name: formData.name,
        email:formData.email ,
        message:formData.message ,
      },publicKey)

      setSubmitStatus({
        type:"success",
        message:"Message sent successfully! I'll get back to you soon.",
      });
      setFormData({name:"",email:"",message:""});
    }catch(err){
      console.error("EmailJs error",err);
      setSubmitStatus({
        type:"error",
        message:err.text||"Failed to send message.Please try again later.",
      });
    }finally{
      setIsLoading(false);
    }
  }
  return (
    <div className='bg-[rgb(15,20,24)] h-[170vh] md:h-[140vh] md:px-18 pt-10' id='contact'>
      <div>
        <h1 className='font-bold md:text-5xl text-4xl text-center text-primary' >Let’s Connect</h1>
        <div className='md:text-4xl md:mt-4 mt-2 text-center ' ><h1 className='font-bold inline text-primary ' >Driven by curiosity,</h1><span className='font-serif italic font-thin ' > powered by code.</span></div>

        <p className='text-muted-foreground text-sm px-4 md:px-50 text-center mt-4' >Dedicated student developer turning academic foundations into real-world solutions.
          Open to new roles, collaborations, or a quick chat about my latest projects.</p>
      </div>

      <div className='md:grid md:grid-cols-2 gap-12 max-w-5xl mx-auto md:mt-18 mt-10 h-[90vh]' >
        <div className='md:h-135 md:w-120 bg-[rgb(21,31,36)] rounded p-8 md:m-0 m-4 border-[rgb(25,75,74)] border' >
          <form action="post" className='outline-none' onSubmit={handleform} >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name='Name' placeholder='Your name...' className='bg-[rgb(26,35,41)] p-3 flex w-full  outline-none focus:ring-primary focus:ring-1 rounded mb-5 border-muted border' 
            value={formData.name}
            onChange={(e)=>setFormData({...formData,name:e.target.value})} required />
            <label htmlFor="email">Email</label>
            <input value={formData.email}
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
            type="text" id="enmail" name='Email' placeholder='your@email.com' className='flex w-full bg-[rgb(26,35,41)] p-3 rounded mb-5 outline-none focus:ring-primary focus:ring-1 border-muted border' required />
            <label htmlFor="message">Message</label>
            <textarea name="Message" id="message" value={formData.message}
            onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder='Your message...' className='flex w-full h-40 bg-[rgb(26,35,41)] p-3 rounded resize-none outline-none focus:ring-primary focus:ring-1 border-muted border' required ></textarea>
            <button type="submit" className='flex w-full justify-center h-15 mt-3 overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25' disabled={isLoading} >
              <span className="relative flex items-center justify-center gap-2">
                {isLoading?(
                  <>
                  Sending...
                  </>
                ):(
                  <>
                  Send Message<SendIcon />
                  </>
                )
                }
              </span>
            </button>
            {
              submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl ${
                  submitStatus.type==="success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`} >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )
            }
          </form>
        </div>
        <div className='bg-[rgb(21,31,36)] h-93 md:w-115 md:m-0 m-4 rounded border-muted border p-4' >
          <div className='font-bold p-4 px-8 text-xl' >
            <h1>Contact Information</h1>
          </div>
          <div className='flex gap-4 hover:bg-muted/60 h-18 items-center p-3 rounded m-5 mt-0'>
            <div className='bg-[rgb(21,43,46)] hover:bg-[rgb(39,79,83)] w-12 h-12 rounded flex justify-center items-center' ><Mail color="#20b2a6"/></div> 
          <div>
          <p className='text-sm text-muted-foreground' >Email</p>
          <p>jatinkoushal13@gmail.com</p>
          </div>
          </div>

          <div className='flex gap-4 hover:bg-muted/60 h-18 items-center p-3 rounded m-5 mt-0'>
            <div className='bg-[rgb(21,43,46)] hover:bg-[rgb(39,79,83)] w-12 h-12 rounded flex justify-center items-center' ><Phone color="#20b2a6"/></div> 
          <div>
          <p className='text-sm text-muted-foreground' >Phone</p>
          <p>+91 98780-87486</p>
          </div>
          </div>

          <div className='flex gap-4 hover:bg-muted/60 h-18 items-center p-3 rounded m-5 mt-0'>
            <div className='bg-[rgb(21,43,46)] hover:bg-[rgb(39,79,83)] w-12 h-12 rounded flex justify-center items-center' ><MapPin color="#20b2a6"/></div> 
          <div>
          <p className='text-sm text-muted-foreground' >Location</p>
          <p>Dasuya, Punjab, India</p>
          </div>
          </div>
        </div>
          <div className= 'rounded border-muted/60 border bg-[rgb(21,31,36)] p-6 md:relative bottom-50 left-134 md:w-115 md:m-0 m-4'>
            <span className='font-bold'>Currently Available</span>
            <p className='text-sm text-muted-foreground mt-3' >I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!</p>
          </div>
      </div>
    </div>
  )
}

export default Contact;