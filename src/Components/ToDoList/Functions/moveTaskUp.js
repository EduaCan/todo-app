const moveTaskUp = (id, tasks, setTasks) => {
    // Validar que el índice esté dentro de los límites del array
    if (id > 0) {
      // Crear una copia del array y realizar el intercambio
      const newArray = [...tasks];
      const temp = newArray[id - 1];
      newArray[id - 1] = newArray[id];
      newArray[id] = temp;

      // Actualizar el estado con el nuevo array
      setTasks(newArray);
    }
  };

  export default moveTaskUp