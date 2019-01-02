import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => {
  return (dispatch) => {
    //Action is being called on Posts component
    console.log('Fetching...');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_POSTS,
          payload: data,
        })
      })
  }
}

export const createPost = (postData) => {
  return (dispatch) => {
    //Action is being called when creating Post
    console.log('Post being created...')
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        return res.json();
      })
      .then((post) => {
        dispatch({
          type: NEW_POST,
          payload: post,
        })
      })
  }
}