/**
 * Moves task to a lower index in the array.
 * 
 * @param {Object} params - The parameters for the function.
 * @param {number} params.index - The index of the task to move up.
 * @param {Array} params.tasks - The array of tasks.
 * @param {Function} params.setTasks - The function to update the tasks state.
*/
const moveTaskUp = ({index, tasks, setTasks}) => {
  // Validate that the index is within the array limits
  if (index > 0 && index < tasks.length) {
      // Create a copy of the array and perform the exchange
      const newArray = [...tasks];
      const temp = newArray[index - 1];
      newArray[index - 1] = newArray[index];
      newArray[index] = temp;
      // Update the state with the new array
      setTasks(newArray);
    }
  };

  export default moveTaskUp