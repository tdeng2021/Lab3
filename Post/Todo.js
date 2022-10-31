import { useState } from "react";

const curTime = new Date().toDateString();
export default function Todo({ title, content, author, dispatch }) {
  const [complete, setComplete] = useState(false);

  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>Written by: {author} </i>
      <div>Created on: {curTime}</div>
      <div>
        <label id={title}></label>

        <input
          type="checkbox"
          value={false}
          onChange={(event) => setComplete(event.target.value)}
          onClick={(event) => {
            event.preventDefault();
            if (!complete) {
              dispatch({ type: "TOGGLE_TODO", complete, title });
              setComplete(true);
            } else {
              dispatch({ type: "TOGGLE_TODO", complete, title });
              setComplete(false);
            }
          }}
        />
        <br />
        <input
          type="submit"
          value="Delete"
          onClick={(event) => {
            event.preventDefault();

            dispatch({ type: "DELETE_TODO", title });
          }}
        />
      </div>
    </div>
  );
}
