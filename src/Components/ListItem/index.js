import "./ListItem.css";

function ListItem({ id, text, handleDelete }) {
  return (
    <div>
      <li>{text}</li>
      <button className="delete-button" onClick={() => handleDelete(id)}>
        X
      </button>
    </div>
  );
}

export default ListItem;
