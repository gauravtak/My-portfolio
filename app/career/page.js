"use client";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function Career() {

    return (
        <div>
            <section className='flex flex-col md:flex-row justify-center gap-4 mx-10 mt-16 font-JetBrainsMono text-[#d1d0d0]'>
                 {/******************* 1st Company*******************/}
                <div className='css-card-tile-cyan max-w-[380px] px-6 pb-10 rounded-lg'>
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
                </div>
            </section>
        </div>
    )
} 

