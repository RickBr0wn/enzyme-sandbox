import React from 'react'
import Header from './Header'
import Headline from './Headline'
import Button from './Button'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { fetchPosts } from '../Actions'
import uuid from 'react-uuid'

const postedBy = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 45,
    online: true
  }
]

const Blog = ({ posts, onFetchPosts }) => {
  const buttonConfig = {
    buttonText: 'Get Posts',
    emitEvent: onFetchPosts
  }

  return (
    <div data-test='blog-component'>
      <Header />
      <section className='main'>
        <Headline
          header='Blog Posts'
          desc='Click the button to see blog posts..'
          postedBy={postedBy}
        />
        <Button {...buttonConfig} />
        {posts.length > 0 && (
          <div>
            {posts.map(post => (
              <ListItem key={uuid()} {...post} />
            ))}
          </div>
        )}

        {console.log('posts', posts)}
      </section>
    </div>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = {
  onFetchPosts: fetchPosts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
