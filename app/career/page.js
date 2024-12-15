import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function Career() {
    return (
        <div>
            <section className='mt-16 font-parkinsans text-[#d1d0d0]'>
                 {/******************* 1st Company*******************/}
                <div className='css-card p-3 rounded-lg'>
                    <Link className='hover:underline' href={'https://truss.biz'}><h1 className='text-2xl font-bold'>Truss Studios</h1></Link>
                    <div className='text-left mt-2'>
	  	    <ol className='flex flex-col gap-2'>
	    		<li>
	    		  Currently Working as a <span className="font-bold">Full Stack Engineer</span>
  			</li>
	    	    </ol>
                    </div>
                    <ul className='flex flex-row gap-3 text-[15px] sm:text-[10px] font-bold mt-4'>
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

