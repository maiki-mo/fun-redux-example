import { FETCH_POSTS, NEW_POST } from './../Actions/types';

const initialState = {
  items: [],
  item: {}
};

export const postReducer = (state = initialState, action) => {
  console.log(action.type, ' is being called');
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state;  
  }
}