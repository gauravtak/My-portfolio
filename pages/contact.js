import styles from '@/styles/Home.module.css'
import {FaLinkedin, FaTwitter} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedIn} from "react-icons/fa"

export default function Contact(){
    return(
     <div className='text-center'>
        <h1 className='text-white py-4 m-20'>Contacts</h1>
        <div className='flex py-16 px-7 gap-10  m-12 bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
        <a href=""><FaTwitter/></a>
        <a href=""><FaGithub/></a>
        <a href=""><FaInstagram/></a>
        <a href=""><FaLinkedin/></a>

        {/* bg-gradient-to-tr from-red-500 via-pink-200 to-red-600 */}
        
      </div>
     </div>
    )
}