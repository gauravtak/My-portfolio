import styles from '@/styles/Home.module.css'
// import React from 'react';
import { FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Social from './Social';
// import { useLayoutEffect } from 'react';


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
  hidden: { opacity: 0, scale: 0 }
}







export default function Contact() {

  // const control = useAnimation()

  // const [ref, inView] = useInView()

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   }
  //   else {
  //     control.start("hidden");
  //   }
  // }, [control, inView])





  return (
    <div className='text-center mt-20'>
    <h1 className='font-Comfortaa bg-gradient-to-r from-red-300 via-fuchsia-300 to bg-blue-200 text-transparent bg-clip-text inline-block font-bold text-[25px] md:text-[30px] mb-12'>Portfolio</h1>
      

    <Social/>
    {/* bg-gradient-to-tr from-red-500 via-pink-200 to-red-600 */}

      <section className='md:flex my-4 text-center md:justify-center md:gap-4 font-Comfortaa'>
        <h2 className=' text-white mt-16 mb-6 md:my-0'>copyright @ 2023</h2>
        <p className=' text-white mb-7'>Created by <span className='hover:text-fuchsia-600'>Gaurav Tak</span></p>
      </section>


    </div>
  )
}