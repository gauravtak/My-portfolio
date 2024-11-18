import Link from "next/link";
import {
  FaTwitter,
  FaGit,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { DiMongodb, DiNodejsSmall, DiStackoverflow } from "react-icons/di";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import localFont from "next/font/local";

export default function Home() {
  return (
    <div className={`relative m-auto font-JetBrainsMono`}>
      <div className="flex flex-col md:flex-row text-center justify-center  md:text-left">
        {/*------------------------------------------ 1st Motion div --------------------------------------------------------- */}
        {/* <div className='transition-all duration-200 hover:scale-125'> */}
        <div className=" css-card max-h-[380px] max-w-[500px] hover:drop-shadow-xl card basis-[100%]  py-12 px-10 m-10 md:mx-1 md:mb-10 rounded-lg ">
          <div className=" text-[#d1d0d0]  ">
            <img
              className="transition-all duration-200 hover:scale-150 shadow-2xl my-4 md:my-2 md:ml-4 mx-auto w-20 rounded-full"
              src="/jojo.jpg"
              alt="flower"
            />
            <div className="md:flex ml-5 md:flex-col">
              <h1 className="md:mt-5 text-3xl font-bold ">
                Hi, This is{" "}
                <span className=" bg-gradient-to-br from-purple-500 to-cyan-400 text-transparent bg-clip-text inline-block font-bold">
                  Gaurav
                </span>
              </h1>
              <p className="md:pr-40 md:mb-4 mt-4 ">Full Stack Engineer</p>
            </div>
          </div>
        </div>

        {/*---------------------------------------- 2nd Motion div ----------------------------------------------*/}
        <div className="css-card max-h-[380px] max-w-[500px]  hover:drop-shadow-xl  mx-10 py-12 md:py-10 md:px-12 md:my-10 md:mx-5 rounded-lg">
          <div className=" text-[#d1d0d0]  inline-block md:mt-10">
            <div className="md:flex ml-2 md:flex-col ">
              <div className=" transition-all duration-200 hover:scale-110">
                <HiOutlineClipboardDocumentList className="mx-auto" size={80} />
                <h1 className=" mb-5 md:pl-4 text-2xl font-bold ">
                  See My Resume
                </h1>
              </div>
              <Link
                href={
                  "https://drive.google.com/file/d/1lGAHqbpLqPJ641bOwp0cIZgw32VM5fvF/view?usp=sharing"
                }
              >
                <button
                  type="button"
                  className="css-btn  transition-all ease-in-out shadow-xl rounded-xl duration-300 hover:rounded-3xl  md:mx-14 md:w-[120px] bg-gray-800 text-lg text-gray-200 px-4 py-2"
                >
                  Resume
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*---------------------------------------- 3rd Motion div  -------------------------------------------*/}
        <div className="css-card max-h-[380px] max-w-[300px] sm:max-w-[500px] hover:drop-shadow-xl mx-10 py-14 md:py-14 md:px-20 my-10 md:mx-1 rounded-lg ">
          <div className="text-[#d1d0d0]">
            <div className="relative flex ml-40 md:ml-2 md:flex-col md:p-[1rem] sm:inline-block sm:mx-auto">
              {/* ssm:mx-24 */}
              {/* <Link href={'https://twitter.com/ALLOY992'}><FaTwitter className=' md:mt-6 transition-all duration-200 hover:scale-110 sm:w-[5.5rem]' size={100} /></Link> */}
              <Link href="https://github.com/gaurav-2-0-0-2">
                <FaGithub
                  className=" md:mt-6 transition-all duration-200 hover:scale-110 sm:w-[5.5rem]"
                  size={100}
                />
              </Link>
              <Link href={"https://github.com/gaurav-2-0-0-2"}>
                <button type="button"></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------Next Section------------------------------------------ */}
      <section className="flex flex-col md:flex-row text-center justify-center md:text-left md:ml-[30px] ">
        {/*------------------------------ Things I know Section------------------------------------------------------  */}
        <div className="css-card max-h-[450px] max-w-[500px] md:max-w-[640px] hover:drop-shadow-xl  basis-[100%] md:basis-[50%] md:pt-40 py-12 px-6 mx-10 md:mb-10 md:mx-1  rounded-lg">
          {/* ssm:pl-2 */}
          <div className=" text-[#d1d0d0] ">
            <div className="md:flex ml-5 md:flex-col mb-7">
              <h1 className="md:mt-5 text-lg ">Things I Know</h1>
            </div>
            <div className="ml-4 md:ml-[20px] sm:ml-[0.1px] flex md:flex-wrap sm:justify-center md:justify-start mx-auto gap-4">
              <Link
                href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
              >
                <FaJsSquare className="w-[1rem] sm:w-[1.6rem]" size={40} />
              </Link>
              <Link href={"https://reactjs.org/"}>
                <FaReact className="w-[1rem] sm:w-[1.6rem]" size={40} />
              </Link>
              <Link href={"https://git-scm.com/"}>
                <FaGit className="w-[1rem] sm:w-[1.6rem]" size={40} />
              </Link>
              <Link href={"https://www.python.org/"}>
                <FaPython className="w-[1rem] sm:w-[1.6rem]" size={40} />
              </Link>
              <Link href={"https://www.mongodb.com/"}>
                <DiMongodb className="w-[1rem] sm:w-[1.6rem]" size={40} />
              </Link>
              <Link href={"https://nodejs.org/en/"}>
                <DiNodejsSmall className="w-[1rem] sm:w-[1.6rem]" size={40} />
              </Link>
              <Link href={"https://www.typescriptlang.org/"}>
                <SiTypescript className="w-[1rem] sm:w-[1.6rem]" size={40} />
              </Link>
              <Link href={"https://www.postgresql.org/"}>
                <SiPostgresql className="w-[1rem] sm:w-[1.6rem]" size={40} />
              </Link>
            </div>
          </div>
        </div>

        {/*----------------------------------------------- Hire Me section ------------------------------------------------------- */}
        <div className="css-card max-h-[450px] max-w-[500px] hover:drop-shadow-xl basis-[100%] lg:basis-[37.3%] md:basis-[38%] md:pt-20 py-16 px-10 my-10 md:my-0 mx-10 md:mb-10 md:mx-7 rounded-lg">
          <div className=" text-[#d1d0d0]  sm:pb-6">
            <div className="md:flex ml-5 md:flex-col mb-7">
              <h1 className="md:mt-5 mr-7 text-lg ">Hire Me</h1>
            </div>
            <div className="relative">
              <h1 className="text-bolder md:text-5xl inline-block md:ml-4 mx-auto text-lg font-Comfortaa">
                Get In Touch
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
