import {createClient} from 'contentful'
import Image from 'next/image'
import { BLOCKS, MARKS, UL_LIST } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
    props: {recipe: items[0].fields},
    revalidate: 1
  }
}
const Recipe = ({recipe}) => {
  console.log(recipe)
  recipe.ingredients.map(elem => console.log(elem))

  const ingredients = recipe.ingredients.map((element,i) => {
      return (<li key={i}>{`${element}`}</li>)
    })

  const Text = ({ children }) => <p className="mt-4 text-justify">{children}</p>;
  const List = ({ children }) => <ul className='list-disc pl-8'>{children}</ul>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
    },
  };

  return (
    <div className='flex flex-row w-full justify-center flex-wrap'>
      <section className='w-full lg:w-3/5 flex flex-row-reverse flex-wrap justify-center lg:justify-start'>
        <div className='text-center lg:text-left w-full'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-extrabold w-full'>{recipe.title}</h1>
          <p className='pr-5 lg:pr-0 mt-5 lg:mt-10 text-lg font-extralight text-gray-500 text-right underline'>Auteur: {recipe.author.fields.name} {recipe.author.fields.surname}</p>
        </div>
        <div className='px-8 lg:p-0 w-full mt-10'>
          <Image className='rounded-xl' src={'https:'+recipe.cover.fields.file.url} width={1024} height={512} layout='responsive' objectFit='cover'/>
        </div>
      </section>
      <section className='w-full lg:w-3/5 h-80 lg:h-36 p-5 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 mt-5'>
        <div className='row-span-1 md:col-span-1'>
          <h2 className='text-xl font-bold'>Ingrédients</h2>
          <ul className='list-disc pl-8'>
            {ingredients}
          </ul>
        </div>
        <div className='row-span-1 md:col-span-1'>
          <div className='h-full flex flex-col justify-center md:block'>
            <h2 className='text-xl font-bold'>Temps de préparation</h2>
            <p>{recipe.cookingTime} minutes</p>
          </div>
        </div>
      </section>
      <section className='w-full lg:w-3/5 p-5'>
        <h2 className='text-xl font-bold'>Réalisation</h2>
        {documentToReactComponents(recipe.content, options)}
      </section>
    </div>
  )
}

export default Recipe