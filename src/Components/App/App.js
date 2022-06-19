import "./App.css";
import { useState } from "react";

function Input({ handleChange, handleAdd, text }) {
  return (
    <div>
      <input onChange={handleChange} value={text}></input>
      <button onClick={handleAdd}>Add to List</button>
    </div>
  );
}

function List({ tasks, handleDelete }) {
  return (
    <ul>
      {tasks.map((item) => (
        <ListItem id={item.id} text={item.todo} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}

function ListItem({ id, text, handleDelete }) {
  return (
    <li>
      {text}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
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
      <Input handleChange={handleChange} handleAdd={handleAdd} text={text} />
      <List handleDelete={handleDelete} tasks={tasks} />
    </main>
  );
}

export default App;

// WORK I DID IN CHRONOLOGICAL ORDER

// we make a component that has an input and a button DONE
// we set the current value of the input as equal to a variable DONE
// every time that value updates, we set the state of text and update it DONE
// the text state is whatever the current text in the input is DONE

// now, we want to take that text state
// on clicking the button in input, the button should call another function (handleAdd)
// handleAdd should update the state of the tasks array with the new text state data added
// i declared a list array for the todo list data
// then, i added a handleAdd function, which resets the state of the task list immutably
// atm, i don't have a component for rendering the list, i just render it via mapping in the app function

// now i'm trying to create the handleDelete function for the delete button on each todo
// add a basic id to the tasks items by setting the id as equal to tasks.length++
// this lets me set the key when the lis render
// when i handleDelete, i hand in this id/key
// handle delete declares a constant of removeItem, which immutably filters the tasks state
// and then hands back all the ones that DONT match the handed in id
// then we update state and setTasks with the new removeItem const

// i want to make a List component now
// this will take in the array of to dos and the delete function as props
// it will render an array of ListItems inside a ul on the screen

// now i want to take out the bit of the List component that creates the actual individual entry
// ListItem should take in text and handleDelete as props
// when the button is clicked, call the delete function at this index to delete this item
// my handleDelete works by id, so i also handed in an id as a prop, which is set in List
// List hands id, text and handleDelete to each ListItem
// each ListItem then creates an li with a button that uses these props to render text, and delete with an id
// ListItem is a child component of List
