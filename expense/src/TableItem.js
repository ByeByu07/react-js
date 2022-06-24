import Table from "react-bootstrap/Table";

const TableItem = ({ ALLITEM }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {ALLITEM.map((item, i) => {
          return (
            <tr>
              <td>{i}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>Rp. {item.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableItem;
