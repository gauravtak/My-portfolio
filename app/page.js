import Link from "next/link";
import {
  FaTwitter,
  FaGit,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiTypescript, SiGo, SiC } from "react-icons/si";
import localFont from "next/font/local";
import Item from "../components/Home/Item.js";
import {ProjectsData, BooksData} from "../components/Home/Data.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Gaurav</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Software Engineer with expertise in modern web technologies, 
            passionate about building scalable solutions and continuous learning.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/#about" className="bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors">
              Learn More
            </Link>
            <Link href="/#contact" className="border-2 border-gray-900 text-gray-900 px-6 py-3 font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" style={{ borderTop: '2px solid #7c3aed' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="section-card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Background</h3>
              <p className="text-gray-700 mb-4">
                I'm a software engineer with experience in multiple programming languages and technologies. 
                I enjoy solving complex problems and building efficient, scalable applications.
              </p>
              <p className="text-gray-700">
                When I'm not coding, I love reading books, researching new technologies, 
                and staying up-to-date with industry trends.
              </p>
            </div>
            
            <div className="section-card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">Go</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {ProjectsData.map((project, index) => (
                <Item key={index} title={project.title} link={project.link} desc={project.desc}/>
              ))}
            </div>
          </div>

          {/* Books Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Books I've Read</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {BooksData.map((book, index) => (
                <Item key={index} title={book.title} link={book.link} desc={book.desc}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Get in Touch</h2>
          
          <div className="section-card">
            <p className="text-lg text-gray-700 mb-8">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or just want to say hello!
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="mailto:your.email@example.com" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <FaEnvelope className="text-xl" />
                <span>Email</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
