import Link from 'next/link'
import Image from 'next/image'

const Hero = ({img, title, time, author_name, author_surname, date, slug, short_desc}) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const event = new Date(date)
  return (
    <section className='flex flex-col-reverse p-5 sm:p-0 mt-4 md:m-0 rounded-lg'>
        <section className='h-full flex flex-col md:grid md:grid-cols-2 md:mt-12'>
          <div className='md:col-span-1'>
            <h1 className='hover:underline text-4xl font-semibold pr-3 mt-2 '>
              <Link className='hover:underline' href={'/recette/'+slug}>{title}</Link>
            </h1>
            <div className='text-xl h-5 font-light mt-4'>
              <p>{event.toLocaleDateString(undefined, options)}</p>
            </div>
          </div>
          <div className='md:col-span-1'>
            <div className='text-md mt-4 text-justify'>
              <p>{short_desc}</p>
            </div>
            <div className='mt-4 text-right'>
              <p className='font-extralight text-gray-500 text-md'>Auteur: {author_surname} {author_name}</p>
            </div>
          </div>
        </section>
        <div className='rounded-md transition ease-in-out duration-700 hover:blur-sm'>
          <Link className='' href={'/recette/'+slug}>
              <Image  src={'https:'+img} width={600} height={300} layout='responsive' objectFit='cover' className='rounded-md'/>
          </Link>
        </div>
    </section>
  )
}

export default Hero