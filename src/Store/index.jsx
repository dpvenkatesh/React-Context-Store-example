import React, { createContext, useContext, useState } from "react";

const initialState = {
  taskList: []
};

export const ACTIONS = {
  ADD: "add",
  UPDATE: "update",
  REMOVE: "remove",
  SELECT: "select"
};

const StoreContext = createContext({});

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const handleActions = (action) => {
    switch (action.type) {
      case ACTIONS.ADD:
        setState((_state) => {
          return { taskList: [..._state.taskList, action.task] };
        });
        // setState({
        //   taskList: [...state.taskList, action.task]
        // });
        break;

      case ACTIONS.UPDATE:
        setState((_state) => ({
          taskList: _state.taskList.map((task) => {
            if (task.taskId === action.task.taskId) {
              return action.task;
            }
            return task;
          })
        }));
        break;

      case ACTIONS.REMOVE:
        setState((_state) => ({
          taskList: _state.taskList.filter(
            (task) => task.taskId !== action.task.taskId
          )
        }));
        break;

      case ACTIONS.SELECT:
        setState((_state) => ({
          taskList: _state.taskList.map((task) => {
            return { ...task, selected: task.taskId === action.task.taskId };
          })
        }));
        break;
      default:
        console.log("Unknown action", action);
        return;
    }
  };

  // const addNewTask = (newTask) => {
  //   setState((_state) => ({ taskList: [..._state, newTask] }));
  // };

  // const updateTask = (updatedTask) => {
  //   setState((_state) => ({
  //     taskList: _state.taskList.map((task) => {
  //       if (task.taskId === updatedTask.taskId) {
  //         return updatedTask;
  //       }

  //       return task;
  //     })
  //   }));
  // };

  // const removeTask = (taskToBeRemoved) =>
  //   setState((_state) => ({
  //     taskList: _state.taskList.filter(
  //       (task) => task.taskId !== taskToBeRemoved.taskId
  //     )
  //   }));

  return (
    <StoreContext.Provider value={[state, handleActions]}>
      {children}
    </StoreContext.Provider>
  );
};
