import React from 'react'
import Header from './Header'
import Headline from './Headline'

const postedBy = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 45,
    online: true
  }
]

const Blog = () => {
  return (
    <div className='blog-component'>
      <Header />
      <section className='main'>
        <Headline
          header='Blog Posts'
          desc='Click the button to see blog posts..'
          postedBy={postedBy}
        />
      </section>
    </div>
  )
}

export default Blog
