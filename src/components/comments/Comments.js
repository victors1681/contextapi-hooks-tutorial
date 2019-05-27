import React, { useContext } from "react";
import MainContext from "../../MainContext";

const Comments = () => {
  const { data, getComments } = useContext(MainContext).comments;

  return (
    <div style={{ margin: "5px", padding: "5px", border: "1px solid gray" }}>
      <button onClick={() => getComments()}>Get Comments</button>
      <h4>Comments</h4>
      <div>
        <ul>
          {data.map(comment => (
            <li>{comment.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
