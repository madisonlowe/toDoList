import "./App.css";
import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_A_TASK":
      const newTask = action.task;
      return [...state, newTask];
    case "COMPLETE_A_TASK":
      const index = action.index;
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}

function App() {
  const [text, setText] = useState("");
  const initialState = ["walk the cat", "buy a boat"];
  const [tasks, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <main className="App">
      <div>
        <input onChange={handleChange} value={text}></input>
        <button
          onClick={function () {
            dispatch({ type: "ADD_A_TASK", task: text });
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {tasks.map(function (task, index) {
            return (
              <li>
                {task}{" "}
                <button
                  onClick={function () {
                    dispatch({ type: "COMPLETE_A_TASK", index: index });
                  }}
                >
                  Done
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;

/*
# TO-DO LIST APP

**GOAL:**

- Use React to create a to-do list app.

**MVP:**

- Users should be able to add a to-do to the list.
- Users should be able to delete items off of the list displayed on the view.

**STRETCH:**

- Style with CSS for a clean UI.
- Add additional functionality. The ability to update to-dos, to rank them by date and/or priority, to categorise etc.

## EASY VERSION: NO COMPONENTS

### App

_state_

- list of to dos

_behaviour_

- add item to list
- remove item from list
- render an Input and List

### Input

_state_

- text

_props_

- add function

_behaviour_

- render an input field and a button ✓
- change of input text will update state of this component
- button click will call the add function from props with value of input

### List

_props_

- array of to dos
- delete function

_behaviour_

- render an array of ListItems in a ul

### List item

_props_

- text
- delete function

_behaviour_

- render the text and a button
- when the button is clicked call the delete function to delete item at this index
*/
