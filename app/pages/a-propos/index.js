import React from 'react'
import {createClient} from 'contentful'
import Image from 'next/image'
import { BLOCKS, MARKS, UL_LIST } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY 
  })

  const res = await client.getEntries({
    content_type: 'about',
    order: '-sys.createdAt',
    limit: '12',
  })
  return {
    props: {
      about: res.items[0]
    },
    revalidate: 1
  }
}

const About = ({about}) => {

  const Title = ({ children }) => <h2 className="my-4 text-lg font-semibold">{children}</h2>;
  const Paragraphs = ({ children }) => <p className='text-md my-2 text-justify'>{children}</p>;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <Title>{children}</Title>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraphs>{children}</Paragraphs>,
    },
  };

  return (
    <div>
      <section className='flex flex-row flex-wrap w-full justify-evenly'>
        <div className='w-96 rounded-lg'>
          <Image className='rounded-lg' src={'https:'+about.fields.cover.fields.file.url} width={400} height={600} objectFit='cover' layout='responsive'/>
        </div>
        <div className='w-1/2 '>
          <h1 className='w-full row-span-1 text-4xl font-black mb-5'>{about.fields.title}</h1>
          <div className='row-span-1'>
            {documentToReactComponents(about.fields.content, options)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About