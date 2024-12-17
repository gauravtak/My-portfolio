import Link from "next/link";
import {
  FaTwitter,
  FaGit,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import localFont from "next/font/local";
import Item from "../components/Home/Item.js"
import {ProjectsData, BooksData} from "../components/Home/Data.js"

export default function Home() {
  return (
    <div className={`font-poppins flex flex-col gap-10 text-[#F8F8FF] mt-10`}>
      <h1 className="text-5xl bg-gradient-to-br from-purple-500 to-cyan-400 text-transparent bg-clip-text font-bold leading-normal">Who?</h1>
      <ul className="text-xl list-disc pl-10">
        <li>
             👋 Hi, I am Gaurav nice to meet you, hope you like it here.
        </li>
        <li>
             💻 I’m a software engineer. With experience in JavaScript, TypeScript, Python, C, and Go.
        </li>
        <li>
            📖 I like to do research and writing.
        </li>
        <li>
            🤝 Get in touch, drop a dm
        </li>
        
      </ul> 
      <h1 className="text-5xl leading-normal bg-gradient-to-br from-red-500 to-yellow-400 text-transparent bg-clip-text font-bold">Projects</h1>
      <div className="flex flex-col gap-5" >
        {
            ProjectsData.map((project, index)=>{
                return <Item key={index} title={project.title} link={project.link} desc={project.desc}/>
            })
        }
      </div> 

      <h1 className="text-5xl leading-normal bg-gradient-to-br from-red-400 to-fuchsia-700 text-transparent bg-clip-text font-bold">Books</h1>
      <div className="flex flex-col gap-5" >
        {
            BooksData.map((book, index)=>{
                return <Item key={index} title={book.title} link={book.link} desc={book.desc}/>
            })
        }
      </div> 
    </div>
  );
}
