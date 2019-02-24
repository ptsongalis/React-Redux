import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

//ACTION CREATORS

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));

  userIds.forEach(id => dispatch(fetchUser(id)));

  //lodash chain syntax for lines 9 and 11
  //   _.chain(getState().posts)
  //     .map("userId")
  //     .uniq()
  //     .forEach(id => dispatch(fetchUser(id)))
  //     .value();
};

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
export const fetchUser = id => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get("/users/" + id);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

//memoized version
// export const fetchUser = function(id) {
//   return function(dispatch, getState) {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get("/users/" + id);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
