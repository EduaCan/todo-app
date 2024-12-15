import React, { useState } from "react";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((_, index) => index !== id));
  };

  const editTask = (event) => {
    event.preventDefault();
    if (isEditing >= 0 && isEditing < tasks.length) {
      let tasksCopy = Array.from(tasks);
      tasksCopy[isEditing] = newTask;
      setNewTask("");
      setTasks(tasksCopy);
      setIsEditing(false)
    }
  };

  const moveTaskUp = (id) => {
    // Validar que el índice esté dentro de los límites del array
    if (id > 0) {
      // Crear una copia del array y realizar el intercambio
      const newArray = [...tasks];
      const temp = newArray[id - 1];
      newArray[id - 1] = newArray[id];
      newArray[id] = temp;

      // Actualizar el estado con el nuevo array
      setTasks(newArray);
    }
  };

  const moveTaskDown = (id) => {
    // Validar que el índice esté dentro de los límites del array
    if (id < tasks.length - 1) {
      // Crear una copia del array y realizar el intercambio
      const newArray = [...tasks];
      const temp = newArray[id + 1];
      newArray[id + 1] = newArray[id];
      newArray[id] = temp;

      // Actualizar el estado con el nuevo array
      setTasks(newArray);
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.main_title}>To-Do List</h1>
      <form onSubmit={typeof isEditing === "boolean" && isEditing === false ? addTask : editTask}>
        <div className={styles.main_inputContainer}>
          <input
            type="text"
            placeholder="Set task"
            value={newTask}
            onChange={handleInput}
            className={styles.main_inputContainer_input}
          />
          <button
            type="submit"
            className={`${styles.button}`}
            onClick={typeof isEditing === "boolean" && isEditing === false ? addTask : editTask}
          >
            {isEditing === false ? "Set Task" : "Edit task"}
          </button>
        </div>
      </form>
      <ul className={styles.main_list}>
        {tasks.map((task, index) => {
          return (
            <li key={index} className={styles.main_list_item}>
              <span>{task}</span>
              <div className={styles.main_list_item_buttonContainer}>
              <div className={styles.main_list_item_buttonContainer_twoButtonsContainer}>

                <button
                  className={`${styles.button} ${styles.editButton}`}
                  onClick={() => {
                    setIsEditing(index);
                    setNewTask(task);
                  }}
                >
                  edit
                </button>
                <button
                  className={`${styles.button} ${styles.deleteButton}`}
                  onClick={() => deleteTask(index)}
                >
                  delete
                </button>
              </div>
                <div className={styles.main_list_item_buttonContainer_twoButtonsContainer}>

                {index !== 0 && (
                  <button
                    className={`${styles.button} ${styles.upButton}`}
                    onClick={() => moveTaskUp(index)}
                  >
                    UP
                  </button>
                )}
                {index !== tasks.length - 1 && (
                  <button
                    className={`${styles.button} ${styles.downButton}`}
                    onClick={() => moveTaskDown(index)}
                  >
                    DOWN
                  </button>
                )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
