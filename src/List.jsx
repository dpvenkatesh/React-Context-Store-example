import React from "react";
import { useStore, ACTIONS } from "./Store";

const List = () => {
  const [state, setState] = useStore();
  return (
    <div>
      <ol>
        {state.taskList.map((task, index) => (
          <li
            key={index}
            style={{ background: task.selected ? "gray" : "" }}
            onClick={() => {
              setState({
                type: ACTIONS.SELECT,
                task
              });
            }}
          >
            {task.taskId} - {task.name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setState({
                  type: ACTIONS.REMOVE,
                  task
                });
              }}
            >
              Remove
            </button>
            <button
              onClick={() =>
                setState({
                  type: ACTIONS.UPDATE,
                  task: { ...task, name: Date.now() + " name updated" }
                })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
