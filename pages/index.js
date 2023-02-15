import styles from '@/styles/Home.module.css'
import Projects from '../pages/projects.js'
import Contact from "../pages/contact.js";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion"

// https://rxresu.me/gauravtak996/gaurav-tak //Resume link

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 }
}

export default function Home() {

  const control = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
    else {
      control.start("hidden")
    }

  }, [control, inView]);




  return (
    <div>
      <div>
        <ul className='flex flex-row '>
          <li className='ml-3 p-2 text-white hover:text-fuchsia-300 font-extrabold text-[15px] lg:text-[20px]' ><button href="#">Home</button></li>
          <li className='ml-3 p-2 text-white hover:text-fuchsia-400 font-extrabold text-[15px] lg:text-[20px]' ><button href="#project">Projects</button></li>
          <li className='ml-3 p-2 text-white hover:text-fuchsia-400 font-extrabold text-[15px] lg:text-[20px]'><button href="#">Contact</button></li>
        </ul>
      </div>


      <div className='text-center md:text-left min-h-[80vh]'>
        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className=' py-16 px-7 m-12 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
          <div className="lg:flex text-zinc-800 font-sans">
            <img className=' shadow-2xl lg:mx-6 mx-auto w-40 rounded-full mb-10' src="https://www.meme-arsenal.com/memes/5ee99d558641255d6e670bbd54953397.jpg" alt="flower" />
            <div className='lg:flex lg:flex-col'>
              <h1 className='lg:mt-5 text-3xl lg:basis-1/2 font-bold'>Hi, This is Gaurav</h1>
              <p className='lg:pr-40 lg:mb-10 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, saepe quam quis porro aliquam, libero odio fugit eius doloremque earum inventore illum quae, laborum quos nesciunt incidunt veniam accusantium? Necessitatibus!</p>
              <button className='transition-all ease-in-out shadow-xl rounded-xl hover:translate-y-2 duration-300 hover:scale-100 hover:rounded-3xl hover:bg-gradient-to-tr from-pink-400 to-red-400 mt-10 lg:m-0 lg:w-[120px] bg-gray-800 text-lg text-gray-200 px-4 py-2'>Resume</button>
            </div>

          </div>

          
          {/* */}

        </motion.div>
      </div>
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