import { Form, Button } from "react-bootstrap";
export default function Search() {
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Cari Kreator anda untuk berikan dukungan anda"
      />
      <Button>Cari</Button>
    </>
  );
}
