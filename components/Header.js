import Link from "next/link";
import { MdHome } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiProjectorLine } from "react-icons/ri";

export default function Header() {
    return(
        <div className='font-JetBrainsMono mt-7 fixed top-0 left-0 h-full w-[160px]  z-[2]'>
        	<ul className='flex flex-col gap-2 '>
        	  <Link href="/"><li className='ml-3 p-2 text-white hover:text-cyan-500  font-extrabold text-[15px] md:text-[20px]' ><MdHome/></li></Link>
        	  <Link href="/projects"><li className='ml-3 p-2 text-white hover:text-cyan-500 font-extrabold text-[15px] md:text-[20px]'><RiProjectorLine/></li></Link>
        	  <Link href="/career"><li className='ml-3 p-2 text-white hover:text-cyan-500 font-extrabold text-[15px] md:text-[20px]'><MdOutlineWorkOutline/></li></Link>
        	</ul>
      </div>
    )
}
