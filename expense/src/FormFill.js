import { Button, Form } from "react-bootstrap";

const FormFill = ({
  objItem,
  item,
  setName,
  setDate,
  setAmount,
  name,
  date,
  amount,
}) => {
  return (
    <Form onSubmit={objItem}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          value={amount}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Add to list
      </Button>
    </Form>
  );
};

export default FormFill;
