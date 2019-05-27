import actions from "./actions";
import { getPostsApi } from "./api";

const mainPerdormances = dispatch => {
  const onChangeName = name => {
    dispatch(actions.changeNameAction(name));
  };
  const getPosts = async postNumber => {
    try {
      const posts = await getPostsApi(postNumber);
      const result = postNumber ? [posts] : posts;
      dispatch(actions.getPostsaSuccess(result));
    } catch (e) {
      console.error(e);
    }
  };

  return {
    onChangeName,
    getPosts
  };
};

export default mainPerdormances;
