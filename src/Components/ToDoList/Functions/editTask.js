const editTask = (event, isEditing, tasks,newTask, setNewTask, setTasks, setIsEditing) => {
    event.preventDefault();
    if (isEditing >= 0 && isEditing < tasks.length) {
      let tasksCopy = Array.from(tasks);
      tasksCopy[isEditing] = newTask;
      setNewTask("");
      setTasks(tasksCopy);
      setIsEditing(false)
    }
  };

  export default editTask