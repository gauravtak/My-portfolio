import styles from '@/styles/Home.module.css'
import Projects from '../pages/projects.js'
import Contact from "../pages/contact.js";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion"

// https://rxresu.me/gauravtak996/gaurav-tak //Resume link

const boxVariant = {
  visible: {opacity: 1, scale:1, transition: {duration: 0.7}},
  hidden: {opacity:0 , scale: 0}
}

export default function Home() {

  const control = useAnimation();

  const [ref, inView] = useInView();

  useEffect(()=>{
    if(inView){
      control.start("visible")
    }
    else{
      control.start("hidden")
    }

  }, [control, inView]);




  return (
    <div className='text-center'>

      <ul className='flex flex-row '>
        <li className='ml-3 p-2 text-white' ><button href="#">Home</button></li>
        <li className='ml-3 p-2 text-white' ><button href="#project">Projects</button></li>
        <li className='ml-3 p-2 text-white'><button href="#">Contact</button></li>
      </ul>


      <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control}  className='py-16 px-7  m-12 bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
        <img className='mx-auto w-40 rounded-full mb-10' src="https://www.meme-arsenal.com/memes/5ee99d558641255d6e670bbd54953397.jpg" alt="flower" />
        <h1 className='text-3xl font-bold'>Hi, This is Gaurav</h1>
        <p className='lg:px-40 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, saepe quam quis porro aliquam, libero odio fugit eius doloremque earum inventore illum quae, laborum quos nesciunt incidunt veniam accusantium? Necessitatibus!</p>
        <button className=' mt-10 bg-green-400  rounded-xl text-lg text-black px-4 py-2'>Resume</button>
        {/* bg-gradient-to-tr from-red-500 via-pink-200 to-red-600 */}

      </motion.div>

      {/* Projects Section */}
      <div className=' min-h-[100vh]'>
        <Projects />
      </div>
      <div className=' min-h-[80vh]'>
        <Contact />
      </div>

    </div>

















  )
}


// random code ignore ----------------------- 


{/* <div className="flex relative bg-neutral-800 rounded-xl"> */ }
{/* Navbar division  */ }
{/* <nav className='w-96 mt-10 mb-10 mr-20 flex justify-evenly absolute top-0 right-0 rounded-full'>
          <ul className='flex flex-row '>
            <li className='ml-3 p-2 text-white'><a href="#">Home</a></li>
            <li className='ml-3 p-2 text-white'><a href="#">About</a></li>
            <li className='ml-3 p-2 text-white'><a href="#">Contact</a></li>
          </ul>
        </nav> */}
{/* Intro division  */ }
// <div className=''>
{/* <img className='' src="https://www.meme-arsenal.com/memes/5ee99d558641255d6e670bbd54953397.jpg" alt="flower" /> */ }
// </div>

// <div className=''>

{/* <h1 className=''>Hi, I'm Gaurav Tak</h1> */ }
{/* <p className='text-white'>A Frontend Web Developer</p>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nulla repellendus totam eligendi temporibus culpa inventore sit eveniet quas cum nesciunt, dolorem itaque quos perferendis sapiente delectus minus ex nemo!</p> */}
      //   </div>



      // </div>