import handleInput from "../../Functions/handleInput";
import onSubmit from "../../Functions/onSubmit";

import styles from "./InputContainer.module.css";
import mainStyles from "../ToDoList/ToDoList.module.css";

const InputContainer = (props) => {

  const { newTask, setNewTask, isEditing } = props

  return (
    <div className={styles.main_inputContainer}>
      <input
        type="text"
        placeholder="Set task"
        value={newTask}
        onChange={(event) => handleInput(event, setNewTask)}
        className={styles.main_inputContainer_input}
      />
      <button
        type="submit"
        className={mainStyles.button}
        onClick={(event) => onSubmit({ ...props, event })}
      >
        {isEditing === false ? "Set Task" : "Edit task"}
      </button>
    </div>
  )
}

export default InputContainer