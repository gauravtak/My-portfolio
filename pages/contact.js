import styles from '@/styles/Home.module.css';
import Projects from '../pages/projects.js';
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Link from "next/link";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import mypic from "../public/pixelgoku.png";
import emailjs from '@emailjs/browser';



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
        //service_nn3jgqq }

    }, [control, inView]);




    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nn3jgqq', 'template_pf3twos', form.current, '3cokTcxKKTUxhh18r')
            .then((result) => {
                alert("Your message sent successfully");
            }).catch((err) => {
                alert(err);
            });
    }







    return (
        <section className='font-Comfortaa'>
            <Header />
            <div className='flex md:flex-row flex-col mt-12 '>
                <div className='m-12 md:basis-[50%]'>
                    <div className='flex'>
                        <h1 className='my-6 text-3xl md:text-5xl text-white'>Get In Touch</h1>
                        <Image className='md:mb-4 md:mt-2 w-[65px] h-[65px]' src={mypic} alt="apic" />
                    </div>

                    <p className=' my-4 text-white font-bold md:text-3xl'>I'm open to collaborate, will be more than happy to help you out.</p>
                    <p className='my-2 text-white md:text-2xl'>E-mail me on:</p>
                    <Link href={"/"} className="text-white font-extrabold ">gauravtak996@gmail.com</Link>
                </div>


                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='css-card-tile-cyan basis-[100%] md:basis-[50%] md:mr-12 md:mb-16 py-16 px-10 my-10 mx-10 rounded-lg'>

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10">
                        <input className='rounded-lg p-2 bg-slate-300 outline-none' type="text" name='user_name' placeholder='Name' />
                        <input className='rounded-lg p-2 bg-slate-300 outline-none' type="email" name="user_email" id="" placeholder='Email' />
                        <textarea className='rounded-lg p-2 h-[160px] bg-slate-300 outline-none' type="text" name='user_message' placeholder='Message' />
                        <input type='submit' className='css-btn transition-all ease-in-out shadow-xl duration-300 p-2  hover:rounded-lg'/>
                    </form>


                </motion.div>
            </div>
            <Footer />

        </section>

    )
}