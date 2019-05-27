export const types = {
  commentRequest: "FETCH_COMMENT_REQUESTING",
  commentSuccess: "FETCH_COMMENT_SUCCESS",
  commentFailed: "FETCH_COMMENT_FAILED"
};

const actions = {
  onCommentSuccess: payload => ({
    type: types.commentSuccess,
    payload
  })
};

export default actions;
