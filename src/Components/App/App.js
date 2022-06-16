import "./App.css";
import { useState } from "react";

function Input() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  console.log(text);

  return (
    <div>
      <input onChange={handleChange} value={text}></input>
      <button>Add to List</button>
    </div>
  );
}
// we make a component that has an input and a button DONE
// we set the current value of the input as equal to a variable DONE
// every time that value updates, we set the state of text and update it DONE
// the text state is whatever the current text in the input is DONE
// we will later take this state of the input to copy it to an li on clicking a button

function App() {
  return (
    <main className="App">
      <Input />
    </main>
  );
}

export default App;

/*
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
