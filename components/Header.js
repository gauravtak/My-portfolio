import styles from '@/styles/Home.module.css'
import { useRouter } from "next/navigation";
import Link from "next/link";





export default function Header() {
    return(
        <div className='font-Comfortaa mt-4'>


        <ul className='flex flex-row justify-center'>
          <Link href="/"><li className='ml-3 p-2 text-white hover:text-cyan-500  font-extrabold text-[15px] md:text-[20px]' >HOME</li></Link>
          <Link href="/projects"><li className='ml-3 p-2 text-white hover:text-cyan-500 font-extrabold text-[15px] md:text-[20px]' >PROJECTS</li></Link>
          <Link href="/contact"><li className='ml-3 p-2 text-white hover:text-cyan-500 font-extrabold text-[15px] md:text-[20px]'>CONTACT</li></Link>




        </ul>
      </div>
    )
}
