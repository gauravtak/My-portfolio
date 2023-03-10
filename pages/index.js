import Projects from '../pages/projects.js'
import Footer from "../pages/footer.js";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaTwitter, FaGit, FaJsSquare, FaReact, FaPython } from "react-icons/fa"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { DiMongodb, DiNodejsSmall, DiStackoverflow } from "react-icons/di";
import { HiArrowCircleRight } from "react-icons/hi";
import Header from './Header';
import {Amatic_SC} from '@next/font/google';
import { Rubik } from '@next/font/google';

// https://rxresu.me/gauravtak996/gaurav-tak //Resume link

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700']
}) 

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
}

export default function Home() {

  const router = useRouter();

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
    <div className='md:mx-24 sm:mx-20'>
      <Header/>


      <div className='grid grid-rows-1 md:grid-cols-3 gap-10 text-center mt-10 md:text-left min-h-[55vh] mb-10'>

        {/*------------------------------------------ 1st Motion div --------------------------------------------------------- */}
       {/* <div className='transition-all duration-200 hover:scale-125'> */}
       <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='card basis-[100%] lg:basis-[50%] md:basis-[37%] py-12 px-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg '>
          <div className=" text-zinc-800 font-sans ">
            <img className='transition-all duration-200 hover:scale-150 shadow-2xl my-4 md:my-2 md:ml-4 mx-auto w-20 rounded-full' src="https://www.meme-arsenal.com/memes/5ee99d558641255d6e670bbd54953397.jpg" alt="flower" />
            <div className='md:flex md:flex-col'>
              <h1 className='md:mt-5 text-3xl md:text-4xl lg:text-6xl font-bold font-Comfortaa'>Hi, This is Gaurav</h1>
              <p className='md:pr-40 lg:text-5xl md:mb-4 mt-4 font-Comfortaa'>A Frontend Web Developer</p>
            </div>

          </div>
        </motion.div>
       {/* </div> */}
       

        {/*---------------------------------------- 2nd Motion div ----------------------------------------------*/}

        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='py-12 md:py-10 md:px-12 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
          <div className=" text-zinc-800 font-sans inline-block md:mt-10">
            <div className='md:flex ml-2 md:flex-col '>
            <div className=' transition-all duration-200 hover:scale-110'>
            <HiOutlineClipboardDocumentList className='mx-auto' size={80} />
              <h1 className=' mb-5 md:pl-4 text-2xl font-bold font-Comfortaa'>See My Resume</h1>
            </div>
              

              {/* <button type='button' onClick={() => router.push('/resume')} className='transition-all ease-in-out shadow-xl rounded-xl duration-300 hover:rounded-3xl hover:bg-gradient-to-tr from-pink-400 to-red-400 md:m-0  md:mx-auto md:w-[120px] bg-gray-800 text-lg text-gray-200 px-4 py-2'>Resume</button> */}
              <Link href={"https://rxresu.me/gauravtak996/gaurav-tak"}><button type='button' className='font-Comfortaa transition-all ease-in-out shadow-xl rounded-xl duration-300 hover:rounded-3xl hover:bg-gradient-to-tr from-pink-400 to-red-400 md:m-0  md:mx-14 md:w-[120px] bg-gray-800 text-lg text-gray-200 px-4 py-2'>Resume</button></Link>
              

            </div>

          </div>


        </motion.div>

        {/*---------------------------------------- 3rd Motion div  -------------------------------------------*/}

        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className=' py-14 md:py-10 md:px-12 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
          <div className="text-zinc-800 ">
            <div className='relative flex ml-40 md:ml-2 md:flex-col md:p-[1rem] sm:inline-block sm:mx-auto'> 
             {/* ssm:mx-24 */}
              <Link href={'https://twitter.com/ALLOY992'}><FaTwitter className=' md:mt-6 transition-all duration-200 hover:scale-110 scale-150 sm:w-[5.5rem]' size={200} /></Link>
              <Link href={'https://twitter.com/ALLOY992'}><button type='button'><HiArrowCircleRight className='hover:animate-spin absolute right-4 top-[12rem]  md:left-[7rem] md:top-[12rem] sm:right-[0.5rem] sm:mt-4' size={60}/></button></Link>
            </div>
           
          </div>

        </motion.div>


      </div>

      {/* -----------------------------------Next Section------------------------------------------ */}
      

      <section className='grid md:grid-cols-2 gap-10 text-center md:text-left min-h-[55vh]'>
       {/*------------------------------ Things I know Section------------------------------------------------------  */}
        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className=' basis-[100%] md:basis-[50%] py-12 px-6 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
        {/* ssm:pl-2 */}
          <div className=" text-zinc-800 font-sans">
            <div className='md:flex ml-5 md:flex-col mb-7'>
              <h1 className='md:mt-5 text-2xl md:text-5xl  font-Comfortaa'>Things I Know</h1>
            </div>
            <div className='ml-4 md:ml-[20px] sm:ml-[0.1px] flex md:flex-row mx-auto gap-4 mmd:ml-[29rem]'>
              <Link  href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}><FaJsSquare className='sm:w-[1.6rem] ' size={100}/></Link>
              <Link  href={'https://reactjs.org/'}><FaReact className='sm:w-[1.6rem] ' size={100} /></Link>
              <Link  href={'https://git-scm.com/'}><FaGit className='sm:w-[1.6rem] ' size={100}/></Link>
              <Link  href={'https://www.python.org/'}><FaPython className='sm:w-[1.6rem] ' size={100} /></Link>
              <Link  href={'https://www.mongodb.com/'}><DiMongodb className='sm:w-[1.6rem] ' size={100}/></Link>
              <Link  href={'https://nodejs.org/en/'}><DiNodejsSmall className='sm:w-[1.6rem] ' size={100} /></Link>


            </div>

          </div>
        </motion.div>

            {/*----------------------------------------------- Hire Me section ------------------------------------------------------- */}

        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='basis-[100%] lg:basis-[20%] md:basis-[38%] sm:px-0 px-10 py-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
          <div className=" text-zinc-800 font-sans">
            <div className='md:flex ml-5 md:flex-col mb-7'>
              <h1 className='inline-block md:mt-5 mr-7 text-2xl font-Comfortaa'>Hire Me</h1>
            </div>
            <div className=' flex md:flex-row'>
              <h1 className='text-bolder md:text-5xl inline-block md:ml-4 mx-auto text-3xl font-Comfortaa'>Get In Touch</h1>
              <Link href={"/contact"}><button type='button'><HiArrowCircleRight className='hover:animate-spin right-4 top-[5rem]  md:left-[7rem] md:top-[10rem] sm:right-[0.5rem] sm:mt-4' size={60}/></button></Link>
            </div>
            {/* ssm:left-[10.5rem] */}

          </div>
        </motion.div>
      </section>


      <div>
        <Footer />
      </div>

    </div>

















  )
}


// random code ignore ----------------------- 

// hover:animate-spin absolute left-[18rem] lg:left-[29rem]  top-[2rem] md:left-[18.7rem] md:top-[1rem] sm:w-[10rem] sm:left-[1.5rem] sm:top-[3rem] mmd:left-[30rem]
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
