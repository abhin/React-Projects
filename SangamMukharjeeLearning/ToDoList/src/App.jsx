import { useEffect, useState } from "react";
import styles from "./components/ToDo.module.css";
import ToDoItem from "./components/ToDoItem";
import Loader from "./components/Loader";

function TodoList() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);

  async function fetchTodoList() {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const resJson = await response?.json();
      const todoList = resJson?.todos;
      todoList && todoList.length > 0 && setTodoList(todoList);
      setLoading(false);
    } catch (e) {
      alert("Error :: " + e);
      console.log("Error :: ", e);
    }
  }

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <>
      <div className={styles.mainWrapper}>
        <h1 className={styles.headerTitle}>
          Simple To Do app Using Material UI
        </h1>
        <div className={styles.todoListWrapper}>
          {loading && <Loader />}
          {(todoList &&
            todoList.length > 0 &&
            todoList.map((item) => <ToDoItem key={item.id} item={item} />)) ||
            null}
        </div>
      </div>
    </>
  );
}

export default TodoList;
