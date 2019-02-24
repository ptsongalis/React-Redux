import _ from "lodash";

//ACTION CREATORS

import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

//CAN ALSO DO THIS IT IS THE SAME THING
// export const fetchPosts = () => async dispatch =>{
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch({type: 'FETCH_POSTS', payload: response});
// };

//original code without memoize
// export const fetchUser = id => {
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get("/users/" + id);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };

export const fetchUser = function(id) {
  return function(dispatch, getState) {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get("/users/" + id);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
