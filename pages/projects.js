import styles from '@/styles/Home.module.css';
import Header from "./Header";
import Footer from "./footer";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";




const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}


export default function Projects() {
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
        <div>

            <Header />
            <section className='flex flex-col md:flex-row gap-4 mx-10 mt-16 font-Nunito'>
                 {/******************* 1st Project *******************/}
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className=' px-10 pb-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/rock-paper-scissors-in-javascript-"}><FiGithub size={20} /></Link>
                        <Link href={"https://rock-paper-scissors-in-javascript.vercel.app/"}><FiExternalLink size={20} /></Link>
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa '>Rock Paper Scissors</h1>
                    <p className='text-center'>
                        An interactive Rock Paper Scissors Game.
                    </p>
                    <ul className='flex flex-row gap-5 justify-center text-sm font-bold mt-4'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                    </ul>
                </motion.div>
                  {/******************* 2nd Project **********************/}
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='basis-[40%] px-10 pb-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left  mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/LetsBeFrenz"}><FiGithub size={20} /></Link>
                        {/* <FiExternalLink size={30} /> */}
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa'>LetsBeFrenz</h1>
                    <p className='text-center'>
                        A signup page with authentication and security. For data security bcrypt is used.
                    </p>
                    <ul className='flex flex-row gap-5 justify-center text-sm font-bold mt-4'>
                        <li>NodeJs</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Bcrypt</li>
                        <li>EJS</li>
                    </ul>

                </motion.div>
                   {/***************** 3rd Project ****************/}
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className=' px-10 pb-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left  mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/MoviesDB"}><FiGithub size={20} /></Link>
                        {/* <FiExternalLink size={30} /> */}
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa'>Movies DB</h1>
                    <p className='text-center'>
                        Your movies DB which fetches data from API using axios.
                    </p>
                    <ul className='flex flex-row gap-5 justify-center text-sm font-bold mt-4'>
                        <li>ReactJs</li>
                        <li>Tailwind CSS</li>
                        
                    </ul>

                </motion.div>
            </section>

            <Footer />

        </div>
    )
} 