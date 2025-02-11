import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoList/ToDoList';
import styles from "./app.module.css"

function App() {
  return (
    <div className={styles.main}>
      
      <main>
        <ToDoList/>
      </main>
      
    </div>
  );
}

export default App;
