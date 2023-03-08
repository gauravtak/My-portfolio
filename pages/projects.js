import styles from '@/styles/Home.module.css';
import Header from "./Header";
import Footer from "./footer";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


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
            <section className='flex m-10 flex-col md:flex-row gap-4'>
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='basis-[50%] md:basis-[30%] md:pt-40 py-12 mx-7 md:mb-10 md:mx-1 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                    <h1 className='text-center text-2xl font-bold'>Rock Paper Scissors</h1>
                </motion.div>
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='basis-[50%] md:basis-[30%] md:pt-40 py-12 mx-7 md:mb-10 md:mx-1 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                    <h1 className='text-center text-2xl font-bold'>Sign Up page with Authentication and Security</h1>
                </motion.div>
            </section>

            <Footer/>

        </div>
    )
} 