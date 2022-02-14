import React from 'react'
import {createClient} from 'contentful'
import { useRouter } from 'next/router'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY 
})

export async function getStaticPaths() {
  
    const res = await client.getEntries({
      content_type: 'blog',
      order: '-sys.createdAt',
    })

    const paths = res.items.map(item => {
      return {
        params: {slug : item.fields.slug}
      }
    })
    return {
      paths,
      fallback : false
    }
}

export async function getStaticProps({params}){
  const {items} = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug
  })

  return {
    props: {recipe: items[0]}
  }
}
const Recipe = ({recipe}) => {
    console.log(recipe)
  return (
    <div>[slug]</div>
  )
}

export default Recipe