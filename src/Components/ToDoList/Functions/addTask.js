 const addTask = (event, setTasks, setNewTask, newTask) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, newTask]);
      setNewTask("");
    }
  };

  export default addTask