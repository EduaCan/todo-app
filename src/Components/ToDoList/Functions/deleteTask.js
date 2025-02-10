const deleteTask = (id, setTasks) => {
    setTasks((prev) => prev.filter((_, index) => index !== id));
  };

  export default deleteTask