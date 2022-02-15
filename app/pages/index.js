import React from 'react'
import Head from 'next/head'
import {createClient} from 'contentful'
import Cards from '../components/Cards'
import Hero from '../components/Hero'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY 
  })

  const res = await client.getEntries({
    content_type: 'blog',
    order: '-sys.createdAt',
    limit: '12',
  })
  return {
    props: {
      recipes: res.items
    },
    revalidate: 1
  }
}

const Recettes = ({recipes}) => {
  
  console.log(recipes)
  return (
    <section className='flex justify-center w-screen'>
        <Head>
          <title>Ecotidien</title>
          <meta name="description" content="application ecotidien le marmitton du du zéro déchet" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className='lg:w-3/5 h-full sm:px-4 lg:px-0 w-full justify-self-center grid gap-y-36'>
            {
              <div className='row-span-1 w-full h-3/5'>
                <Hero 
                img={recipes[0].fields.thumbnail.fields.file.url}
                title={recipes[0].fields.title}
                slug={recipes[0].fields.slug}
                short_desc={recipes[0].fields.shortDesc}
                date={recipes[0].fields.date}
                author_name={recipes[0].fields.author.fields.name}
                author_surname={recipes[0].fields.author.fields.surname}
                key={recipes[0].fields.id}
                />
              </div>
            }
            <div className='row-span-1 w-full grid sm:grid-cols-1  md:grid-cols-2 gap-y-16 gap-x-8'>
            {
              recipes.map((recipe,i ) => (
                i > 0 &&
                <div className='col-span-1'
                key={recipe.fields.id}>      
                  <Cards 
                  img={recipe.fields.thumbnail.fields.file.url}
                  title={recipe.fields.title}
                  slug={recipe.fields.slug}
                  short_desc={recipe.fields.shortDesc}
                  date={recipe.fields.date}
                  author_name={recipe.fields.author.fields.name}
                  author_surname={recipe.fields.author.fields.surname}
                  />
                </div>
              ))
            }
             </div>

        </div>
    </section>
  )
}

export default Recettes