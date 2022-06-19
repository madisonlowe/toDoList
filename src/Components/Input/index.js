function Input({ handleChange, handleAdd, text }) {
  return (
    <div>
      <input
        onChange={handleChange}
        value={text}
        placeholder="Enter task here..."
      ></input>
      <button onClick={handleAdd} disabled={!text}>
        Add to List
      </button>
    </div>
  );
}

export default Input;
