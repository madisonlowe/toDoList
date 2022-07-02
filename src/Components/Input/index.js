import "./Input.css";

function Input({ handleChange, handleAdd, text }) {
  return (
    <div className="input-div">
      <input
        onChange={handleChange}
        value={text}
        placeholder="Type your task to do here..."
      ></input>
      <button className="input-button" onClick={handleAdd} disabled={!text}>
        Add to List
      </button>
    </div>
  );
}

export default Input;
