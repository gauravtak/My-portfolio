import Link from "next/link";

export default function Header() {
    return(
        <div className='font-JetBrainsMono mt-7 md:fixed block md:top-0 md:left-0 md:h-full md:w-[160px] md:z-[2]'>
        	<ul className='flex justify-around md:flex-col gap-2 '>
        	  <Link href="/">
	    		<li className='flex items-start gap-4 ml-3 p-2 text-white hover:text-cyan-500  font-extrabold text-[15px] md:text-[20px]' >
	    			<MdHome size={25}/>
	    			<p className="md:block hidden">Home</p> 
	    		</li>
	    	  </Link>
        	  <Link href="/projects">
	    		<li className='flex items-start gap-4 ml-3 p-2 text-white hover:text-cyan-500 font-extrabold text-[15px] md:text-[20px]'>
	    			<RiProjectorLine size={25}/>
	    			<p className="md:block hidden">Projects</p> 
	    		</li>
	    	  </Link>
        	  <Link href="/career">
	    		<li className='flex items-start gap-4 ml-3 p-2 text-white hover:text-cyan-500 font-extrabold text-[15px] md:text-[20px]'>
	    			<MdOutlineWorkOutline size={25}/>
	    			<p className="md:block hidden">Work</p> 
	    		</li>
	    	  </Link>
        	</ul>
      </div>
    )
}
