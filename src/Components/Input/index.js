function Input({ handleChange, handleAdd, text }) {
  return (
    <div>
      <input onChange={handleChange} value={text}></input>
      <button onClick={handleAdd}>Add to List</button>
    </div>
  );
}

export default Input;
