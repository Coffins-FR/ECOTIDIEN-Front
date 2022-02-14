import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Cards = ({img, title, time, author_name, author_surname, date, slug, short_desc}) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const event = new Date(date)
  return (
    <section className='flex flex-col-reverse p-5 sm:p-0 mt-4 md:m-0 rounded-lg'>
        <section className='h-full flex flex-col'>
          <h2 className='hover:underline text-3xl font-semibold pr-3 mt-3'>
            <Link className='hover:underline text-2xl' href={'/recette/'+slug}>{title}</Link>
          </h2>
          <div className='text-2xl h-5 font-light mt-4'>
            <p>{event.toLocaleDateString(undefined, options)}</p>
          </div>
          <div className='text-md mt-4'>
            <p>{short_desc}</p>
          </div>
          <div className='mt-4'>
            <p className='font-extralight text-gray-500 text-right text-md'>Auteur: {author_surname} {author_name}</p>
          </div>
        </section>
        <div className='rounded-md transition ease-in-out duration-700 hover:blur-sm'>
          <Link className='' href={'/recette/'+slug}>
              <Image  src={'https:'+img} width={600} height={250} layout='responsive' objectFit='cover' className='rounded-md'/>
          </Link>
        </div>
    </section>
  )
}

export default Cards