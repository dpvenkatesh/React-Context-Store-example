import React, { useEffect } from "react";
import "./styles.css";

import List from "./List";

import { useStore, ACTIONS } from "./Store";
export const taskItemInfo = [
  {
    taskId: 1,
    mediaType: "telephony",
    status: "conference",
    title: "Mihael Varificantare for test text overflow",
    queue: "IRV_quelle_1167676776767676asdadadas",
    lastmessage: "I can ask one more question",
    quantity: "0",
    timer: "01:08:00"
  },
  {
    taskId: 2,
    mediaType: "outbound telephony",
    status: "hold",
    title: "Mihael Littlefoot",
    queue: "IRV_quelle_11",
    lastmessage: "",
    quantity: "0",
    customAriaLabel:
      "Custom outbound telephony hold Mihael Varificantare IRV_quelle_11",
    timer: "08:00"
  },
  {
    taskId: 3,
    mediaType: "inbound telephony",
    status: "transfered",
    title: "Mihael Varificantare",
    queue: "IRV_quelle_11",
    lastmessage: " ",
    quantity: "123",
    timer: "01:08:00"
  },
  {
    taskId: 4,
    mediaType: "email",
    title: "mlittlefoot@gmail.com",
    queue: "IRV_quelle_12",
    timer: "00:08"
  },
  {
    taskId: 5,
    mediaType: "telephony",
    title: "Mihael Varificantare",
    queue: "IRV_quelle_11",
    timer: "Ringing"
  },
  {
    taskId: 6,
    mediaType: "facebook",
    title: "Mihael Varificantare",
    queue: "IRV_quelle_11",
    timer: "Ringing"
  },
  {
    taskId: 7,
    mediaType: "whatsApp",
    title: "Mihael Varificantare",
    queue: "IRV_quelle_11",
    timer: "01:10:25"
  },
  {
    taskId: 8,
    mediaType: "chat",
    title: "Mihael Varificantare",
    queue: "IRV_quelle_11",
    timer: "01:10:25",
    selected: true
  }
];

export default function App() {
  const [state, setState] = useStore();

  useEffect(() => {
    taskItemInfo.forEach((task) =>
      setState({
        type: ACTIONS.ADD,
        task
      })
    );
  }, []);

  return (
    <div className="App">
      <h1>Total tasks : {state.taskList.length}</h1>

      <button
        onClick={() => {
          setState({
            task: { taskId: Date.now(), name: Date.now() + " name" },
            type: ACTIONS.ADD
          });
        }}
      >
        Add task
      </button>
      <List />
    </div>
  );
}
