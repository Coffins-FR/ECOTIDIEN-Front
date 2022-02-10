import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Menu = ({toggle, open}) => {
    const router = useRouter()
    const pathname  = router.pathname

    return (
        <>
                <div className={`z-50 top-0 absolute h-screen w-screen bg-white transition duration-500 ease-in-out transform ${open ? '-translate-x-full' : '-translate-x-0'}`}>
                    <div onClick={toggle} className=' h-24 w-24 mt-8 ml-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 xsm:mr-4 sm:mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <section className='flex flex-col justify-evenly h-32 text-xl font-semibold'>
                        <div className='place-self-center flex items-center'>
                            <Link href="/recettes">Recettes</Link>
                            {pathname === "/recettes" && <div className='rounded-full h-3 w-3 ml-4 bg-emerald-800'></div>}
                        </div>
                        <div className='place-self-center flex items-center'>
                            <Link href="/a-propos">Recettes</Link>
                            {pathname === "/a-propos" && <div className='rounded-full h-3 w-3 ml-4 bg-emerald-800'></div>}
                        </div>
                    </section>
                </div>
            
        </>
    )
}

export default Menu