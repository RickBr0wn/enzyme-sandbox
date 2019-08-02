import React from 'react'
import Header from './Header'
import Headline from './Headline'

const Blog = () => {
  return (
    <div className='blog-component'>
      <Header />
      <section className='main'>
        <Headline
          header='Blog Posts'
          desc='Click the button to see blog posts..'
        />
      </section>
    </div>
  )
}

export default Blog
