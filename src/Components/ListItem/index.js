function ListItem({ id, text, handleDelete }) {
  return (
    <li>
      {text}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

export default ListItem;
