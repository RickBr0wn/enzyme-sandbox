import React from 'react'
import Header from './Header'
import Headline from './Headline'
import Button from './Button'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { fetchPosts } from '../Actions'

const postedBy = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 45,
    online: true
  }
]

const Blog = ({ onFetchPosts }) => {
  const buttonConfig = {
    buttonText: 'Get Posts',
    emitFunction: onFetchPosts
  }

  return (
    <div className='blog-component'>
      <Header />
      <section className='main'>
        <Headline
          header='Blog Posts'
          desc='Click the button to see blog posts..'
          postedBy={postedBy}
        />
        <Button {...buttonConfig} />
        <ListItem />
      </section>
    </div>
  )
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = () => ({ onFetchPosts: fetchPosts })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
