import styles from '@/styles/Home.module.css'
import { useRouter } from "next/navigation";
import Link from "next/link";




export default function Header() {
    return(
        <div>


        <ul className='flex flex-row justify-center'>
          <Link href="/"><li className='ml-3 p-2 text-white hover:text-fuchsia-400 font-extrabold text-[15px] md:text-[20px]' >Home</li></Link>
          <Link href="/projects"><li className='ml-3 p-2 text-white hover:text-fuchsia-400 font-extrabold text-[15px] md:text-[20px]' >Projects</li></Link>
          <Link href="/contact"><li className='ml-3 p-2 text-white hover:text-fuchsia-400 font-extrabold text-[15px] md:text-[20px]'>Contact</li></Link>




        </ul>
      </div>
    )
}