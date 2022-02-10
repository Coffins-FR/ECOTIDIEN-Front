import React, {useState}  from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './Menu'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const pathname  = router.pathname
  const [isOpen, setOpen] = useState(true);
  const toggle = () => {
      setOpen(!isOpen);
  }
  console.log(router)
  return (
    <section className='w-full xsm:h-24 lg:h-40 bg-white'>
        <div className='w-full h-full xsm:hidden lg:flex flex-row justify-between place-items-center items-center'>
          <p className='text-6xl font-extrabold ml-10'>
              Ecotidien. 
          </p>
          <Image  src='/logo.png' height='100px' width='100px'/>
          
          <div className='flex flex-row place-items-center justify-evenly w-96 h-full text-xl content-evenly items-center font-semibold'>
            <div className='place-self-center flex items-center'>
              <Link href="/recettes">Recettes</Link>
              {pathname === "/recettes" && <div className='rounded-full h-3 w-3 ml-4 bg-emerald-800'></div>}
            </div>
            <div className='place-self-center'>
              <Link href="/a-propos">A propos</Link>
              {pathname === "/a-propos" && <div className='rounded-full h-2 w-2 ml-4 bg-emerald-800'></div>}
            </div>
          </div>
        </div>
        <div className='w-full h-full xsm:flex lg:hidden flex-row justify-between place-items-center items-center'>
          <p className='text-3xl font-extrabold xsm:ml-4 sm:ml-8'>
              Ecotidien. 
          </p>
          <div onClick={() => setOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 xsm:mr-4 sm:mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
          </div>
          <Menu  toggle={toggle} open={isOpen} />
        </div>
    </section>
  )
}

export default Navbar