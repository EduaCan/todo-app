import handleInput from "../Functions/handleInput";
import addTask from "../Functions/addTask";
import editTask from "../Functions/editTask";

import styles from "./InputContainer.module.css";
import mainStyles from "../ToDoList.module.css";

const InputContainer = ({newTask, setNewTask,setTasks, isEditing, setIsEditing, tasks }) => {
    return (
        <div className={styles.main_inputContainer}>
          <input
            type="text"
            placeholder="Set task"
            value={newTask}
            onChange={(event)=>handleInput(event, setNewTask)}
            className={styles.main_inputContainer_input}
          />
          <button
            type="submit"
            className={`${mainStyles.button}`}
            onClick={typeof isEditing === "boolean" && isEditing === false ? (event)=>addTask(event,setTasks, setNewTask, newTask ) : (event)=>editTask(event,isEditing,tasks,newTask, setNewTask, setTasks, setIsEditing)}
          >
            {isEditing === false ? "Set Task" : "Edit task"}
          </button>
        </div>
    )       
}

export default InputContainer