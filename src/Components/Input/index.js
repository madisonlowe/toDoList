import "./Input.css";

function Input({ handleChange, handleAdd, text }) {
  return (
    <div className="input-div">
      <input
        onChange={handleChange}
        value={text}
        placeholder="Enter task here..."
      ></input>
      <button className="input-button" onClick={handleAdd} disabled={!text}>
        Add to List
      </button>
    </div>
  );
}

export default Input;
