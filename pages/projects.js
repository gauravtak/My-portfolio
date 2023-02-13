import styles from '@/styles/Home.module.css'
import { useRef } from 'react'
import { HiArrowCircleRight,HiArrowCircleLeft } from "react-icons/hi";


export default function Projects() {
// Need to add left and right scroll with buttons
    const ref = useRef(null)

    const scroll = (scrollOffSet) => {
        ref.current.scrollLeft += scrollOffSet; // getting and setting scrolll value 
        console.log(scrollOffSet)
    }



    return (
        <div className='text-center'>
            <h1 className='py-4 m-20 text-fuchsia-400 font-extrabold text-[25px] lg:text-[40px]'>My Projects</h1>

            <div className=' md:mx-40' ref={ref}>
                <div className='snap-x snap-mandatory gap-10 flex overflow-x-scroll' >
                    <div className='snap-center flex-shrink-0'>
                        <img src="/1.jpg" />
                    </div>
                    <div className='snap-center flex-shrink-0'>
                        <img src="/1.jpg" />
                    </div>

                    <div className='snap-center flex-shrink-0'>
                        <img src="/1.jpg" />
                    </div>

                    <div className='snap-center flex-shrink-0'>
                        <img src="/1.jpg" />
                    </div>
                    <div className='snap-center flex-shrink-0'>
                        <img src="/1.jpg" />
                    </div>
                </div>
            </div>
            <div className='mt-10 text-white'>
                <button className='transition-all ease-in-out hover:translate-y-2 duration-300 hover:scale-100' onClick={() => scroll(-20)}><HiArrowCircleLeft size={70}/></button>
                <button className='transition-all ease-in-out hover:translate-x-2 duration-300 hover:scale-100' onClick={() => scroll(20)}><HiArrowCircleRight size={70} color={'#038ffff'}/></button>
            </div>

        </div>
    )
} 