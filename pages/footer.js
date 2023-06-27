import styles from '@/styles/Home.module.css'
// import React from 'react';
import { FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { useEffect } from 'react';
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Social from './Social';
// import { useLayoutEffect } from 'react';


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
}

export default function Contact() {


  const year = new Date().getFullYear();



  return (
    <div className='  text-center mt-20'>
      <div className='portfolio md:mx-80'>
        <h1 className='mt-12 font-Comfortaa bg-gradient-to-r from-red-400 via-fuchsia-300 to bg-cyan-600 text-transparent bg-clip-text inline-block font-bold text-[25px] md:text-[30px] mb-12'>Portfolio</h1>

      </div>


      <Social/>

      <section className='md:flex my-4 text-center md:justify-center md:gap-4 font-Comfortaa'>
        <h2 className=' text-gray-400 mt-16 mb-6 md:my-0'>© {year}</h2>
        <p className=' text-gray-400 mb-7'>Created by <span className='hover:text-cyan-400'>Gaurav Tak</span></p>
        <span className='mr-2 md:mr-0 text-white'>Inspired by</span><Link href={"https://gridfolio.framer.website/"} className="text-white">Gridfolio</Link>
      </section>


    </div>
  )
}