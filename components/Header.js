import Link from "next/link";
import { TiHome } from "react-icons/ti";

export default function Header() {
  return (
    <div className="font-poppins mt-7">
      <div className="flex justify-between items-center" >
        <Link className="text-white  hover:underline font-extrabold text-[15px] md:text-[20px]" href="/">
            <TiHome/>
        </Link>
      <ul className="flex items-center gap-4 ">
        <Link href="/">
          <li className="text-white  hover:underline hover:font-extrabold text-[15px] md:text-[20px]">
          </li>
        </Link>
        <Link href="/blogs">
          <li className="text-white  hover:underline hover:font-extrabold text-[15px] md:text-[20px]">
            <p>Blogs</p>
          </li>
        </Link>
        <Link href="/career">
          <li className="text-white hover:underline hover:font-extrabold text-[15px] md:text-[20px]">
          </li>
        </Link>
      </ul>
      </div> 
    </div>
  );
}
