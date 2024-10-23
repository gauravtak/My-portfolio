import Link from "next/link";

export default function Header() {
  return (
    <div className="font-JetBrainsMono mt-7">
      <ul className="flex  w-1/2 mx-auto justify-left items-center gap-4 ">
        <Link href="/">
          <li className="text-white  hover:underline font-extrabold text-[15px] md:text-[20px]">
            <p>Home</p>
          </li>
        </Link>
        <Link href="/blogs">
          <li className="text-white  hover:underline font-extrabold text-[15px] md:text-[20px]">
            <p>Blogs</p>
          </li>
        </Link>
        <Link href="/career">
          <li className="text-white hover:underline font-extrabold text-[15px] md:text-[20px]">
            <p>Work</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
