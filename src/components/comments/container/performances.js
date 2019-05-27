import actions from "./actions";
import { getCommentsApi } from "./api";

const performances = dispatch => ({
  getComments: async postNumber => {
    try {
      const comments = await getCommentsApi();
      dispatch(actions.onCommentSuccess(comments));
    } catch (e) {
      console.error(e);
    }
  }
});

export default performances;
