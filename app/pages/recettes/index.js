import React from 'react'
import {createClient} from 'contentful'
import Cards from '../../components/Cards'

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
    }
  }
}

const Recettes = ({recipes}) => {
  
  console.log(recipes)
  return (
    <section className='w-screen flex justify-center'>
        <div className='md:w-4/5 md:h-96 justify-self-center flex xsm:flex-col md:flex-row md:flex-wrap justify-evenly'>
            {
              recipes.map(recipe => (
                <Cards 
                img={recipe.fields.thumbnail.fields.file.url}
                title={recipe.fields.title}
                slug={recipe.fields.slug}
                short_desc={recipe.fields.shortDesc}
                date={recipe.fields.date}
                author_name={recipe.fields.author.fields.name}
                author_surname={recipe.fields.author.fields.surname}
                />
              ))
            }
        </div>
    </section>
  )
}

export default Recettes