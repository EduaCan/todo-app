/**
 * Deletes a task from the task list.
 * 
 * @param {Object} params - The parameters for the function.
 * @param {number} params.index - The index of the task to delete.
 * @param {Function} params.setTasks - The function to update the task list.
 */
const deleteTask = ({ index, setTasks }) => {
  //New array excluding the task to delete
  const filterTasks = (prev) => prev.filter((_, indexFilter) => indexFilter !== index);
  // Update the state with the new array
  setTasks(filterTasks);
};

export default deleteTask