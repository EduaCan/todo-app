import addTask from "./addTask";
import editTask from "./editTask";

/**
 * Handles the form submission for adding or editing a task.
 * 
 * @param {Object} params - The parameters for the function.
 * @param {Event} params.event - The form submission event.
 * @param {boolean} params.isEditing - Flag indicating if a task is being edited.
 * @param {Array} params.tasks - The current list of tasks.
 * @param {Object} params.newTask - The new task to be added or edited.
 * @param {Function} params.setNewTask - Function to update the new task state.
 * @param {Function} params.setTasks - Function to update the tasks state.
 * @param {Function} params.setIsEditing - Function to update the editing state.
 */
const onSubmit = ({ event, isEditing, tasks, newTask, setNewTask, setTasks, setIsEditing }) => {
  event.preventDefault();
  // If isEditing is false, add a new task, otherwise edit the task
  if (typeof isEditing === "boolean" && isEditing === false) {
    addTask({ setTasks, setNewTask, newTask });
  } else {
    editTask({
      isEditing,
      tasks,
      newTask,
      setNewTask,
      setTasks,
      setIsEditing
    });
  }
}

export default onSubmit;