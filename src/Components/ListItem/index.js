import "./ListItem.css";

function ListItem({ id, text, handleDelete }) {
  return (
    <li>
      {text}{" "}
      <button className="delete-button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default ListItem;
