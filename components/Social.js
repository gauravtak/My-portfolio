import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa"

export default function Social() {
    return (
        <div className='flex gap-7 justify-center text-[#d1d0d0] mb-4'>
                <a href="https://twitter.com/ALLOY992"><FaTwitter size={20} /></a>
                <a href="https://github.com/gaurav-2-0-0-2"><FaGithub size={20} /></a>
                <a href="https://www.linkedin.com/in/gaurav-tak-a4190222a/"><FaLinkedin size={20} /></a>
                <a href="https://t.me/gauravtak"><FaTelegram size={20} /></a>
        </div>
    )
}
