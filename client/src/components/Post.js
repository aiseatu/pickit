import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      posts: []
    }
  }

  componentDidMount() {
    this.getAllPost()
    .then((res) => {
      console.log(res);
      this.setState({ posts: res.posts })
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
      console.log(body);
      return body;
    }
  }

  addPost = async e => {
    e.preventDefault();
    const response = await fetch('/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: this.state.title, body: this.state.body })
    });
    console.log(response);
    const body = await response.text();
    console.log(body);
    this.getAllPost()
    .then((res) => {
      this.setState({ posts: res.posts })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render(){
    return(
      <div>
        <div>
          {
            this.state.posts.map((post) =>
            <Link to={ `/posts/${post.id}`}>{post.title}</Link>)
          }
        </div>
        <div>
          <form onSubmit={this.addPost}>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value})}
              placeholder="title"
            />
            <input
              name="body"
              type="text"
              value={this.state.body}
              onChange={e => this.setState({ body: e.target.value})}
              placeholder="body"
            />
            <button type="submit" className="btn btn-primary">Create Post</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Post;
