import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class PostShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    this.getPost()
    .then((res) => {
      this.setState({ post: res.post })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getPost = async () => {
    const response = await fetch(`/posts/${this.props.match.params.id}`);
    const body = await response.json();
    if(response.status !== 200){
      console.log(body.message);
    } else {
      console.log(body);
      return body;
    }
  }

  render() {
    return(
      <div>
        <div>
          <h3>{this.state.post.title}</h3>
          <p>{this.state.post.body}</p>
        </div>
      </div>
    )
  }
}

export default PostShow;
