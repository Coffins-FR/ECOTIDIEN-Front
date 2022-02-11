import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Cards = ({img, title, time, author_name, author_surname, date, slug, short_desc}) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const event = new Date(date)
  return (
    <section className='flex flex-col-reverse p-5 sm:p-0 w-full md:w-2/5 h-136 mt-4 md:m-0 rounded-lg'>
        <section className='h-full flex flex-col'>
          <div className='hover:underline text-2xl font-semibold pr-3'>
            <Link className='hover:underline text-2xl' href={'/recettes/'+slug}>{title}</Link>
          </div>
          <div className='text-md h-5 font-light mt-4'>
            <p>{event.toLocaleDateString(undefined, options)}</p>
          </div>
          <div className='text-md mt-4'>
            <p>{short_desc}</p>
          </div>
          <div className='mt-4'>
            <p className='font-extralight text-gray-500'>Auteur: {author_surname} {author_name}</p>
          </div>
        </section>
        <div className='rounded-md transition ease-in-out duration-700 hover:blur-sm'>
          <Link className='' href={'/recettes/'+slug}>
              <Image  src={'https:'+img} width={600} height={250} className='rounded-md' objectFit='cover'/>
          </Link>
        </div>
    </section>
  )
}

export default Cards