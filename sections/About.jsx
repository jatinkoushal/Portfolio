import React, { useEffect, useRef } from 'react'
import AboutCard from '../src/components/AboutCard'
import { CodeXmlIcon, LightbulbIcon, RocketIcon, UsersIcon } from 'lucide-react';
import { aboutHeading, aboutMe, btn, cardsAnima } from '../src/components/GSAP';

const About = () => {
  const headingRef = useRef();
  const paraRef = useRef();
  const charRef = useRef();
  const cardsRef =useRef([]);
  const parentRef=useRef();
  const cardConfigs = [
    { i: 0, x: -100, y: -100 },
    { i: 1, x: 0, y: -100 },
    { i: 2, x: -100, y: 100 },
    { i: 3, x: 0, y: 100 },
  ];
  useEffect(() => {
    cardConfigs.forEach(({i,x,y})=>{
        cardsAnima(cardsRef.current[i],parent.current,x,y)
    })
    aboutMe(charRef.current);
    aboutHeading(headingRef.current, paraRef.current);
  }, [])

  const CodeXml = () => <CodeXmlIcon />
  const Rocket = () => <RocketIcon />
  const Users = () => <UsersIcon />
  const Lightbulb = () => <LightbulbIcon />
  const cards = [
    { component: CodeXml },
    { component: Rocket },
    { component: Users },
    { component: Lightbulb },
  ];
  const CardData = [
    { title: "Clean Code", description: "Writing maintainable, scalable code that stands the test of time." },
    { title: "Performance", description: "Optimizing for speed and delivering lightning-fast user experiences." },
    { title: "Collaboration", description: "Working closely with teams to bring ideas to life." },
    { title: "Innovation", description: "Staying ahead with the latest technologies and best practices." },
  ];

  return (
    <div className='px-4 md:px-16 bg-[rgb(15,20,24)] md:h-screen'  id='about'>
      <p className='text-sm text-primary pt-15' ref={charRef} >ABOUT ME</p>
      <div className='text-5xl md:w-[50%] mt-8 leading-tight text' ref={headingRef} ><h1 className='font-bold inline text-primary' ref={parentRef}>Building the future,</h1><span className='font-serif italic font-thin ' > one component at a time.</span></div>
      <span className=' grid md:w-[45%] grid-row-2 grid-cols-2 gap-y-8 md:absolute right-10 gap-4 mt-4 md:mt-auto' >
        {cards.map((item, idx) => (
          <div key={idx} ref={(el)=> cardsRef.current[idx]=el }>
          <AboutCard title={CardData[idx].title} description={CardData[idx].description} value={item.component} />
        </div>
        ))}
      </span>
      <div className='md:w-[42%] text-muted-foreground font-[500] mt-8 ' ref={paraRef}>
        <p>I'm a passionate frontend developer and computer science student, driven by a curiosity for how the web works — and a relentless desire to build things that look and feel exceptional.
        </p><p className='mt-4' >
          I specialize in crafting modern, interactive web experiences using React.js, GSAP, and the full suite of web fundamentals — HTML, CSS, and JavaScript. Whether it's a pixel-perfect landing page or an animation-heavy UI, I bring both technical precision and a sharp eye for design to everything I build.
        </p>
        <p className="mt-4">
          Beyond the browser, I'm consistently sharpening my problem-solving skills — having solved 100+ DSA problems on LeetCode, with strong command over concepts like two pointers, binary search, and sliding window techniques. I believe great frontend engineers don't just write beautiful UI — they think algorithmically.</p>
      </div>


    </div>
  )
}

export default About

