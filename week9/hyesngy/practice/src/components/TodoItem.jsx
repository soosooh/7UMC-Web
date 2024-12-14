import React from "react";
import { useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ id, text, isComplete }) {
  const dispatch = useDispatch();
  const trash = <FontAwesomeIcon icon={faTrashCan} />;

  return (
    <li>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => dispatch(complete(id))}
      />
      <div>
        {isComplete ? <del>{text}</del> : text}
      </div>
      <button
        type="button"
        onClick={() => dispatch(remove(id))}
      >
        {trash}
      </button>
    </li>
  );
}