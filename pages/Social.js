import styles from '@/styles/Home.module.css'
// import React from 'react';
import { FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from 'next/link';

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}

export default function Social() {
    const control = useAnimation()

    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }
    }, [control, inView])
    return (
        <motion.div ref={ref} variants={boxVariant} initial='hidden' animate={control} className='flex gap-7 justify-center overflow-x-auto'>
            <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <Link href={'https://twitter.com/ALLOY992'}><FaTwitter size={20} /></Link>
            </div>
            <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <Link href={'https://github.com/gaurav-2-0-0-2'}><FaGithub size={20} /></Link>
            </div>
            <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <Link href={'https://www.instagram.com/1_gauravtak/'}><FaInstagram size={20} /></Link>
            </div>
            <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <Link href={'https://www.linkedin.com/in/gaurav-tak-a4190222a/'}><FaLinkedin size={20} /></Link>
            </div>
            <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <Link href={'https://web.telegram.org/z/'}><FaTelegram size={20} /></Link>
            </div>
        </motion.div>
    )
}