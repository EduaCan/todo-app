import React, { useState } from "react";
import styles from "./ToDoList.module.css";

import addTask from "./Functions/addTask";
import editTask from "./Functions/editTask";

import InputContainer from "./InputContainer/InputContainer";
import TaskListItem from "./TaskListItem/TaskListItem";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const inputContainerProps = { newTask, setNewTask, setTasks, isEditing, setIsEditing, tasks }
  const taskListItemsProps =
    { setIsEditing, setNewTask, setTasks, tasks }

  const onSubmit = (event) => {
    typeof isEditing === "boolean" && isEditing === false
      ? addTask(event, setTasks, setNewTask, newTask)
      :
      editTask(
        event,
        isEditing,
        tasks,
        newTask,
        setNewTask,
        setTasks,
        setIsEditing
      )
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.main_title}>To-Do List</h1>
      <form onSubmit={onSubmit}      >
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
