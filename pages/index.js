import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <div className='mt-10'>

      <div className='relative pt-10'>
        {/* Navbar division  */}
        <nav className='w-96 mb-10 mr-20 bg-slate-300 flex justify-evenly absolute top-0 right-0 rounded-full'>
          <ul className='flex flex-row '>
            <li className='ml-3 p-2'>Home</li>
            <li className='ml-3 p-2'>About</li>
            <li className='ml-3 p-2'>Contact</li>
          </ul>
        </nav>
        {/* Intro division  */}
        <div className='flex justify-center pt-20'>
          <img className='w-40 h-40 rounded-full object-center' src="https://www.meme-arsenal.com/memes/5ee99d558641255d6e670bbd54953397.jpg" alt="flower" />
        </div>

        <div className='text-center pt-12'>

          <h1 className='text-3xl font-bold '>Hello</h1>
          <h3 className='font-bold'>This is Gaurav Tak</h3>
          <p className=''>A Full-Stack Web Developer</p>
        </div>

         {/* Projects division */}

         <div>
          
         </div>

      </div>




    </div>



  )
}
