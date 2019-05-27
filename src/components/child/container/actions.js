export const types = {
  setNewName: "SET_NEW_NAME",
  clearName: "CLEAR_NAME",
  addName: "ADD_NAME",
  postsSuccess: "POSTS_SUCCESS"
};

const actions = {
  changeNameAction: payload => ({
    type: types.setNewName,
    payload
  }),
  getPostsaSuccess: payload => ({
    type: types.postsSuccess,
    payload
  })
};

export default actions;
