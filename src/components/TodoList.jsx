import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { trash } from "./../helper/icons";

const TodoList = ({ value, id, todo, setTodo }) => {
  const handleDelete = (id) => {
    setTodo(todo.filter((trash) => trash.id !== id));
  };

  return (
    <Row className="mt-1 m-auto">
      <Card className="m-auto  bg-secondary" style={{ width: "100%" }}>
        <Card.Body className="d-flex justify-content-between ">
          <li className="list-unstyled text-warning" key={id}>
            {value}
          </li>
          <button onClick={() => handleDelete(id)} className="trash">
            {trash}
          </button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default TodoList;
