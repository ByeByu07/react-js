import { Row, Col, Image } from "react-bootstrap";

export default function Category({ title, description, path, link, bgColor }) {
  return (
    <section>
      <Row >
        <Col md={4}>
          {/* <Image url={link} className="imageSection" ></Image> */}
          <img src={link} className="imageSection"></img>;
          <div  className="absoluteTitle">
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={path}>Explore</a>
          </div>
        </Col>
        <Col md={8}></Col>
      </Row>
    </section>
  );
}
