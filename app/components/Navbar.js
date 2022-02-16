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
  const str = 'recette'
  return (
    <header className='w-screen'>
      {pathname.includes(str) === false ?
        <div className='w-full xsm:h-24 lg:h-80 md:flex md:justify-center'>
          <div className='w-full md:w-3/5 h-full xsm:hidden lg:flex flex-row justify-between place-items-center items-center'>
            <p className='text-6xl font-extrabold ml-10'>
                Ecotidien. 
            </p>
          
            <div className='flex flex-row place-items-center justify-between w-96 h-full text-xl content-evenly items-center font-semibold'>
                <div className='place-self-center md:flex flex-col'>
                  {pathname === "/" && <div className='rounded-full h-3 w-3 bg-emerald-800 place-self-center'></div>}
                  <Link href="/">Recettes</Link>
                </div>
                <div className='place-self-center md:flex flex-col'>
                  {pathname === "/a-propos" && <div className='rounded-full h-3 w-3 bg-emerald-800 place-self-center'></div>}
                  <Link href="/a-propos">A propos</Link>
                </div>
              </div>
            </div>
            <div className='w-full h-full flex lg:hidden flex-row justify-between place-items-center items-center'>
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
        </div>
        :
        <div className='w-full h-24 lg:h-32 flex justify-center'>
          <div className='w-full lg:w-3/5 h-full px-3 flex flex-row justify-between place-items-center items-center'>
            <Link href={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <p className='text-4xl font-extrabold ml-10 text-right'>
                Ecotidien. 
            </p>
          </div>
        </div>
      }
    </header>
  )
}

export default Navbar