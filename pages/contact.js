import styles from '@/styles/Home.module.css';
import Projects from '../pages/projects.js';
import Footer from "../pages/footer.js";
import { useRouter } from "next/navigation";
import Link from "next/link";






export default function Contact() {
    return (
        <section className='flex md:flex-row '>
        {/* div 1 */}
           <div>
            
           </div>
           {/* div 2 */}
           <div>

           </div>
           {/* Footer Section  */}
           <div>
            <Footer/>
           </div>
        </section>
    )
}