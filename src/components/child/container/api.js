export const getPostsApi = async postNumber => {
  const post = postNumber ? postNumber : "";
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${post}`
  );
  return response.json();
};
