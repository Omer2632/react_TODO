import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

const Header = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      value: inputValue,
    };
    console.log(newItem.id);

    setTodo([...todo, newItem]);
    setInputValue("");
  };

  console.log(todo);

  return (
    <Container className="mt-5">
      <h1 className="text-center text-danger">ToDo App</h1>
      <Form className="mt-5 mb-5" onSubmit={handleSubmit}>
        <div className="m-auto" style={{ width: "100%" }}>
          <InputGroup className=" input mb-3 m-auto mt-5">
            <Form.Control
              placeholder="Enter the new Todo.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleChange}
              value={inputValue}
              required
            />
            <Button type="submit" variant="success" id="button-addon2">
              Add Todo
            </Button>
          </InputGroup>
        </div>
      </Form>
      <div className="text-center">
        <div class="spinner-grow text-light"></div>
      </div>

      <h2 className="text-center text-light">To Do List</h2>
      {todo.map((item) => (
        <TodoList {...item} todo={todo} setTodo={setTodo} />
      ))}
    </Container>
  );
};

export default Header;
