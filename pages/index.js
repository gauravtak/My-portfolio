import styles from '@/styles/Home.module.css'

// https://rxresu.me/gauravtak996/gaurav-tak //Resume link

export default function Home() {
  return (
    <div className='mt-10 mx-16 bg-fixed'>

      <div className="flex relative bg-neutral-800 rounded-xl">
        {/* Navbar division  */}
        {/* <nav className='w-96 mt-10 mb-10 mr-20 bg-slate-600 flex justify-evenly absolute top-0 right-0 rounded-full'>
          <ul className='flex flex-row '>
            <li className='ml-3 p-2'><a href="#">Home</a></li>
            <li className='ml-3 p-2'><a href="#">About</a></li>
            <li className='ml-3 p-2'><a href="#">Contact</a></li>
          </ul>
        </nav> */}
        {/* Intro division  */}
        <div className='flex justify-left pt-20'>
          <img className='m-14 w-40 h-40 rounded-full' src="https://www.meme-arsenal.com/memes/5ee99d558641255d6e670bbd54953397.jpg" alt="flower" />
        </div>

        <div className=' text-left pt-40 pl-20'>

          <h1 className='text-5xl text-red-600 text-opacity-50 font-bold font-white '>Hi, I'm Gaurav Tak</h1>
          <p className='text-white'>A Frontend Web Developer</p>
          <p className='text-white pr-40'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nulla repellendus totam eligendi temporibus culpa inventore sit eveniet quas cum nesciunt, dolorem itaque quos perferendis sapiente delectus minus ex nemo!</p>
        </div>



      </div>


      {/* Projects division */}
      <div>

        <div className='relative my-20 py-20 bg-zinc-500 rounded-xl'>

          {/* Intro division  */}
          <div className='flex justify-center pt-20'>
            {/* <img className='w-40 h-40 rounded-full object-center'/> */}
          </div>

          <div className='text-center pt-12'>

          </div>



        </div>

      </div>




    </div>



  )
}





