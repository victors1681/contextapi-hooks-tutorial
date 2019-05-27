import React, { useContext, useEffect } from "react";
import MainConext from "../../MainContext";

const Child = () => {
  const mainContext = useContext(MainConext);

  // useEffect(() => {
  //   mainContext.getPosts();
  // }, []);

  const handleClcik = () => {};

  const handleInput = e => {
    mainContext.child.onChangeName(e.target.value);
  };

  const posts = mainContext.child.posts;

  return (
    <div>
      <p>My Context name value is : {mainContext.name}</p>
      <span>Enter some text</span>
      <input name="todoimput" onChange={handleInput} />
      <button onClick={() => handleClcik()}>add </button>
      <p>
        <button onClick={() => mainContext.child.getPosts()}>Get Posts</button>
      </p>
      <div style={{ margin: "10px" }}>
        <h4>List Of posts</h4>
        {posts.map(post => (
          <div key={post.userId}>
            <div>{post.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Child;
