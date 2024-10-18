import Link from "next/link";

export default function Header() {
    return(
        <div className='font-Comfortaa mt-2'>
        	<ul className='flex flex-row justify-center'>
        	  <Link href="/"><li className='ml-3 p-2 text-white hover:text-cyan-500  font-extrabold text-[15px] md:text-[20px]' >HOME</li></Link>
        	  <Link href="/projects"><li className='ml-3 p-2 text-white hover:text-cyan-500 font-extrabold text-[15px] md:text-[20px]' >PROJECTS</li></Link>
        	  <Link href="/career"><li className='ml-3 p-2 text-white hover:text-cyan-500 font-extrabold text-[15px] md:text-[20px]'>CAREER</li></Link>
        	</ul>
      </div>
    )
}
