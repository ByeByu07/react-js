import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const post = (e) => {
    axios.post("signin", { email, password });
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <div className="sign_in_container d-flex justify-content-center align-items-center">
        <div className="card sign_in_card">
          <Form onSubmit={post}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email here...."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <span className="btn btn-primary" onClick={()=>{navigate(-1)}}>Back</span>
              <div>
              <Button variant="" type="submit" onClick={()=>{navigate("/signup")}} >
                Register?
              </Button>
              <Button variant="primary" type="submit">
                Login
              </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

// export { LOGIN };
