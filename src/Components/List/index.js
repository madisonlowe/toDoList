import ListItem from "../ListItem";
import "./List.css";

function List({ tasks, handleDelete }) {
  return (
    <ul>
      {tasks.map((item) => (
        <ListItem id={item.id} text={item.todo} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default List;
