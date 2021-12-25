import Header from "./Compounent/Header";
import Tasks from "./Compounent/Tasks";
import { useState } from "react";
import AddTask from "./Compounent/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => 
      task.id !== id
      ))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task , reminder:
           !task.reminder} : task
    ))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...tasks];
    newTodos[i].content = e.target.value;
    setTasks(newTodos);
  }
  

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}
       onUpdate={updateTodoAtIndex} /> : 'No Tasks'}

       
    </div>
  );
}

export default App;
