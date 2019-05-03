import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.getAllPost()
    .then((res) => {
      this.setState({ posts: res})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getAllPost = async () => {
    const response = await fetch('/posts');
    const body = await response.json();
    if(response.status !== 200){
      console.log(body.message);
    } else {
      return body;
    }
  }

  render(){
    return(
      <div>
        {
          this.state.posts.map((post) =>
          <Link to={ `/posts/${post.id}`}>{post.title}</Link>)
        }
      </div>
    )
  }
}

export default Post;
