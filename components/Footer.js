import Link from "next/link";
import Social from './Social';
// import { useLayoutEffect } from 'react';



export default function Contact() {


  const year = new Date().getFullYear();



  return (
    <div className='  text-center mt-20'>
      <div className='portfolio md:mx-80'>
        <h1 className='mt-12 font-Comfortaa bg-gradient-to-br from-cyan-600 to-red-600 text-transparent bg-clip-text inline-block font-bold text-[25px] md:text-[30px] mb-12'>Portfolio</h1>

      </div>


      <Social/>

      <section className='md:flex my-4 text-center md:justify-center md:gap-4 font-Comfortaa'>
        <h2 className=' text-gray-400 mt-16 mb-6 md:my-0'>{year}</h2>
        <p className=' text-gray-400 mb-7'>Created by <span className='hover:text-cyan-400'>Gaurav Tak</span></p>
        <span className='mr-2 md:mr-0 text-white'>Inspired by</span><Link href={"https://gridfolio.framer.website/"} className="text-white">Gridfolio</Link>
      </section>


    </div>
  )
}
