import styles from "./TaskListItem.module.css"
import mainStyles from "../ToDoList.module.css"

import deleteTask from "../Functions/deleteTask";
import moveTaskDown from "../Functions/moveTaskDown";
import moveTaskUp from "../Functions/moveTaskDown";

const TaskListItem =({setIsEditing, setNewTask,setTasks, tasks,   index})=>{

    
    return(
        <li key={index} className={styles.main_list_item}>
        <span>{tasks[index]}</span>
        <div className={styles.main_list_item_buttonContainer}>
        <div className={styles.main_list_item_buttonContainer_twoButtonsContainer}>

          <button
            className={`${mainStyles.button} ${mainStyles.editButton}`}
            onClick={() => {
              setIsEditing(index);
              setNewTask(tasks[index]);
            }}
          >
            edit
          </button>
          <button
            className={`${mainStyles.button} ${mainStyles.deleteButton}`}
            onClick={() => deleteTask(index, setTasks)}
          >
            delete
          </button>
        </div>
          <div className={styles.main_list_item_buttonContainer_twoButtonsContainer}>

          {index !== 0 && (
            <button
              className={`${mainStyles.button} ${mainStyles.upButton}`}
              onClick={() => moveTaskUp(index, tasks, setTasks)}
            >
              UP
            </button>
          )}
          {index !== tasks.length - 1 && (
            <button
              className={`${mainStyles.button} ${mainStyles.downButton}`}
              onClick={() => moveTaskDown(index, tasks, setTasks)}
            >
              DOWN
            </button>
          )}
          </div>
        </div>
      </li>
    )
}

export default TaskListItem