import { useState } from "react";
import styles from "./css/app.module.css";

export default function App() {
  /**
   * GOAL #1: Create a Input component that will
   * return the value of the the input to the app
   *
   * GOAL #2: Create a button, where on click you
   * take the input value and add it to a todo state array
   *
   * GOAL #3: Create a List component that takes in (as a prop)
   * an array of strings (your todos), and *maps* them into <li>'s in a <ul>
   *
   * GOAL #STRETCH: Make it pretty!
   *
   * GOAL #STRETCH: Add a delete button!
   *
   */

  const [myTodos, setMyTodos] = useState([]);
  // NOTE: Because of the ways that object variables work in Javascript,
  // you cannot modify arrays (or objects) in-place and expect them to cause a
  // re-render. You instead need to create a new array and set the state to that
  // to trigger a re-render.

  return (
    <main className={styles.app}>
      <h1>TODO LIST</h1>
    </main>
  );
}
