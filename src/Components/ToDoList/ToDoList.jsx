import React, { useState } from "react";

import onSubmit from "../../Functions/onSubmit";

import InputContainer from "../InputContainer/InputContainer";
import TaskListItem from "../TaskListItem/TaskListItem";

import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const inputContainerProps = { newTask, setNewTask, setTasks, isEditing, setIsEditing, tasks }
  const taskListItemsProps =
    { setIsEditing, setNewTask, setTasks, tasks }
  const onSubmitProps = { isEditing, tasks, newTask, setNewTask, setTasks, setIsEditing }

  return (
    <div className={styles.main}>
      <h1 className={styles.main_title}>To-Do List</h1>
      <form onSubmit={(event) => onSubmit({ ...onSubmitProps, event })}>
        <InputContainer {...inputContainerProps} />
      </form>
      <ul className={styles.main_list}>
        {tasks.map((_, index) => {
          return <TaskListItem {...taskListItemsProps} index={index} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
