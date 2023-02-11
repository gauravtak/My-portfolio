import styles from '@/styles/Home.module.css'
import { useRef } from 'react'


export default function Projects() {

    const ref = useRef(null)

    const scroll = (scrollOffSet)=>{
        ref.current.scrollLeft += scrollOffSet;
        console.log(scrollOffSet)
    }



    return (
        <div className='text-center'>
            <h1 className=' bg-white py-4 m-20'>My Projects</h1>

            <div className='md:mx-40'>
                <div className='snap-x snap-mandatory gap-10 flex overflow-x-scroll' ref={ref}>
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
            <div className='mt-10'>
            <button onClick={()=>scroll(-20)}>left</button>
            <button onClick={()=>scroll(20)}>right</button>
            </div>
           
        </div>
    )
} 