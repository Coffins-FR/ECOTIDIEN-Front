import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Cards = ({img, title, time, author,}) => {
  return (
    <section className='flex flex-col md:flex-row w-80 h-40 rounded-md shadow-lg hover:blur-sm hover:scale-105 transition duration-700 ease-in-out mt-4 md:m-0'>
        <div className='relative'>
            <div className='w-full h-40 absolute rounded-md top-0 left-0 z-10 bg-gradient-to-t from-slate-800 opacity-60 '></div>
            <div className='w-full h-40 absolute p-4 flex flex-col-reverse top-0 left-0 justify-start z-20 text-white'>
                <p className='justify-self-end text-sm '>
                    <span className='underline'>Préparation :</span> {time} min
                </p>
                <p className='justify-self-end text-lg font-semibold'>
                    {title}
                </p>
            </div>
            <div className='w-full h-40 top-0 left-0 z-0 rounded-md'>
                <Image className='rounded-md' src={'https:'+img} width='320' height='160' layout='intrinsic'/>
            </div>
        </div>
    </section>
  )
}

export default Cards