import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFill from "./FormFill.js";
import Header from "./Header";
import TableItem from "./TableItem";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Alert } from "bootstrap";

const ALLITEM = [];

function App() {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [item, setItem] = useState();

  useEffect(() => {
    console.log(item);
    console.log(ALLITEM);
  }, [item]);

  const objItem = (e) => {
    e.preventDefault();
    const data = {
      name,
      date,
      amount,
    };

    new Promise((resolve, reject) => resolve(ALLITEM.push(data)))
      .then(() => {
        Swal.fire(
          `${name} have been added to your list!!`,
          "success",
          "success"
        );
      })
      .finally(() => {
        setItem(data);
        setName("");
        setDate("");
        setAmount("");
      });
  };

  return (
    <div className="container mt-5">
      <Header />
      <FormFill
        objItem={objItem}
        item={item}
        setName={setName}
        setDate={setDate}
        setAmount={setAmount}
        name={name}
        date={date}
        amount={amount}
      />
      <TableItem ALLITEM={ALLITEM} />
    </div>
  );
}

export default App;
