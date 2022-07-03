import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./navbar/Logo";
import Search from "./navbar/Search";

export default function Header() {
  return (
    <nav className="fixed-top">
      <Container>
        <Row className="my-5 px-2">
          <Col md={1}>
            {/* <Logo src={"logo.png"} alt={"logo"} width={60} /> */}
          </Col>
          <Col md={7}>
            <div className="d-flex">
              <Search />
            </div>
          </Col>
          <Col md={4}>
            <ul className="d-flex justify-content-between align-items-center">
              <li className="btn btn-outline-warning">Top Creator</li>
              <li className="btn btn-outline-warning">About Us</li>
              <li className="btn btn-secondary">
                <Link to={"signin"}>SignIn</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
