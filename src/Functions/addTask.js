/** 
*  Adds a new task to the task list.
* 
* @param {Object} event - The event object from the form submission.
* @param {Function} setTasks - Function to update the list of tasks.
* @param {Function} setNewTask - Function to update the new task input field.
*/
const addTask = (
  { setTasks,
    setNewTask,
    newTask }
) => {
  // Validate that the task is not empty
  if (newTask.trim() !== "") {
    // Add the new task to the list
    setTasks((prev) => prev.concat(newTask));
    setNewTask("");
  }
};

export default addTask