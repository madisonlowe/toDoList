import "./App.css";
import { useState } from "react";
import Header from "../Header";
import Input from "../Input";
import List from "../List";

function App() {
  const [tasks, setTasks] = useState([
    { todo: "Walk the cat round the garden." },
    { todo: "Arrange hike with Mum." },
    { todo: "Send Dad that gyoza recipe." },
  ]);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleAdd() {
    const newTasks = tasks.concat({ todo: text, id: tasks.length + 1 });
    setTasks(newTasks);
    setText("");
  }

  function handleDelete(id) {
    const removeItem = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(removeItem);
  }

  return (
    <main className="App">
      <Header />
      <Input handleChange={handleChange} handleAdd={handleAdd} text={text} />
      <List handleDelete={handleDelete} tasks={tasks} />
    </main>
  );
}

export default App;
