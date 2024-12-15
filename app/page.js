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
import Project from "../components/Home/Project.js"
import {ProjectData} from "../components/Home/ProjectData.js"

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
            ProjectData.map((project, index)=>{
                return <Project key={index} title={project.title} githubLink={project.githubLink} desc={project.desc}/>
            })
        }
      </div> 
    </div>
  );
}
