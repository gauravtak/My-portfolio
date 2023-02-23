import styles from '@/styles/Home.module.css';
import Projects from '../pages/projects.js';
import Footer from "../pages/footer.js";
import Header from "./Header";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"



const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}




export default function Contact() {

    const control = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
        // else {
        //   control.start("hidden")
        // }

    }, [control, inView]);
    return (
        <section className=''>
         <Header/>
         <div className='flex md:flex-row flex-col '>
         <div className='m-12 md:basis-[50%]'>
                <h1 className='my-6 text-3xl md:text-5xl text-white'>Get In Touch</h1>
                <p className=' my-4 text-white font-bold'>I'm open to collaborate, You can email Me.</p>
                <p className='my-2 text-white '>E-mail me on:</p>
                <Link href={"/"} className="text-white font-extrabold ">gauravtak996@gmail.com</Link>
            </div>


            <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className=' flex flex-col gap-10 basis-[100%] md:basis-[50%] md:mr-12 md:mb-16 py-16 px-10 my-10 mx-10  bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                <input className='rounded-lg p-2' type="text" placeholder='Name' />
                <input className='rounded-lg p-2' type="email" name="" id="" placeholder='Email' />
                <textarea className='rounded-lg p-2' type="text" placeholder='Message' />
                <button type='button' className=' p-2 bg-gray-600 hover:bg-gradient-to-tr from-pink-400 to-red-400 hover:rounded-lg'>SEND E-MAIL</button>

            </motion.div>
         </div>
           <Footer/>

        </section>
     
    )
}