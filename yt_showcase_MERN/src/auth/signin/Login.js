import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const post = (e) => {
    axios.post("http://localhost:5000/signin", { name, password });
    e.preventDefault();
    console.log({ name, password });
  };

  return (
    <>
      <div className="sign_in_container d-flex justify-content-center align-items-center">
        <div className="card sign_in_card">
          <Form onSubmit={post}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name here...."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between mt-5">
              <Button variant="outline-primary" type="submit">
                <Link to={"/signup"}>Register?</Link>
              </Button>
              <Button variant="primary" type="submit" size="lg">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

// export { LOGIN };
