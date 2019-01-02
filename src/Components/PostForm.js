import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createPost } from './../Actions/PostActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    this.props.createPost(post);
  }

  render() {
    return (
      <div className="post-form-area">
        <h1>Add Post</h1>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div>
            <label>Title:</label><br />
            <input name="title" type="text" onChange={(e) => this.onChange(e)} value={this.state.title} />
          </div>
          <div>
            <label>Body:</label><br />
            <textarea name="body" onChange={(e) => this.onChange(e)} value={this.state.body}/>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.proptypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm)