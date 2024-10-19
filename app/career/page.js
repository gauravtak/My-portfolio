"use client";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";




const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}


export default function Career() {
    const control = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }

    }, [control, inView]);



    return (
        <div>

            <section className='flex flex-col md:flex-row justify-center gap-4 mx-10 mt-16 font-JetBrainsMono text-[#d1d0d0]'>
                 {/******************* 1st Company*******************/}
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='css-card-tile-cyan max-w-[380px] px-6 pb-10 rounded-lg'>
                    
                    <Link className='hover:underline' href={'https://truss.biz'}><h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa'>Truss Studios</h1></Link>
                    <div className='text-left mt-2'>
	  	    <ol className='flex flex-col gap-2'>
	    		<li>
	    		  Currently Working as a <span className="font-bold">Full Stack Developer</span>
  			</li>
	    		<li>         
	    		 Improving current state of Supply Chains
  			</li>
	    		<li>         
	    		 Leveraging <span  className="font-bold">Blockchain and AI</span>
  			</li>
	    	    </ol>
	    		
                    </div>
                    <ul className='flex flex-row gap-3 justify-center text-[15px] sm:text-[10px] font-bold mt-4'>
                        <li>Typescript</li>
                        <li>Nextjs</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                    </ul>
                </motion.div>
                  {/******************* XXXXXX **********************/}

	    {/*<motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='css-card-tile-violet max-w-[380px] px-10 pb-10 rounded-lg'>
                    <h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa'>Bit To Byte Robotics</h1>
                    <p className='text-center'>
                        A Social Media Application for the people who loves cooking and like shaing their food-code.
                    </p>
                    <ul className='flex flex-row gap-3 justify-center text-[15px] sm:text-[10px]  font-bold mt-4'>
                        <li>Nextjs (App router)</li>
                        <li>Firebase</li>
                        <li>Tailwind CSS</li>
                    </ul>

                </motion.div>*/}
                   {/***************** X XXXX****************/}
	    {/*
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='css-card-tile-blue max-w-[380px] px-10 pb-10 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left  mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/MoviesDB"}><FiGithub size={20}/></Link>
                        <Link href={"https://movies-db-llon.vercel.app/"}><FiExternalLink size={20}/></Link>
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa'>Movies DB</h1>
                    <p className='text-center'>
                        Your movies DB which fetches data from API. Its a PWA.
                    </p>
                    <ul className='flex flex-row gap-3 justify-center text-[15px] sm:text-[10px] font-bold mt-4'>
                        <li>ReactJs</li>
                        <li>Tailwind CSS</li>
                        
                    </ul>

                </motion.div>
*/}

                
            </section>


        </div>
    )
} 

