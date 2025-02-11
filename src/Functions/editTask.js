/**
 * Edits a task in the tasks array.
 *
 * @param {Object} params - The parameters object.
 * @param {number} params.isEditing - The index of the task being edited.
 * @param {Array} params.tasks - The array of tasks.
 * @param {string} params.newTask - The new task content.
 * @param {Function} params.setNewTask - Function to update the new task state.
 * @param {Function} params.setTasks - Function to update the tasks state.
 * @param {Function} params.setIsEditing - Function to update the editing state.
 */
const editTask = ({ isEditing, tasks, newTask, setNewTask, setTasks, setIsEditing }) => {
  if (isEditing >= 0 && isEditing < tasks.length) {
    let tasksCopy = [...tasks];
    tasksCopy[isEditing] = newTask;
    setNewTask("");
    setTasks(tasksCopy);
    setIsEditing(false)
  }
};

export default editTask