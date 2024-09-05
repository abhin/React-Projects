import { useState } from "react";
import style from "./ToDoList.module.css"; 

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState("");

    const handleInputChange = (e) => {
        setNewtask(() => e.target.value)
    }

    const addTask = () => {

    }

    const deleteTask = (index) => {

    }

    const moveTaskUp = (index) => {

    }

    const moveTaskDown = (index) => {

    }

    return(
        <>
            <div className={style.toDoList}>
                <h1>To-Do-List</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter a task..."
                        value={newTask}
                        onchange={handleInputChange}
                        />
                </div>
                <button className={style.addButton} onClick={addTask}>
                    Add Task
                </button>

                <ol>
                    {tasks.map((task, index) => 
                                                <li key={index}>
                                                    <span className="style.text">{task}</span>
                                                    <button onClick={e => deleteTask(index)} className={style.deleteButton}>Delete</button>
                                                    <button onClick={e => moveTaskUp(index)} className={style.moveButton}>Up</button>
                                                    <button onClick={e => moveTaskDown(index)} className={style.moveButton}>Down</button>
                                                </li>
                    )}
                </ol>
            </div>
        </>
    );
}

export default ToDoList;