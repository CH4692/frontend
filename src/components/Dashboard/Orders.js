import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const data = [
  {
    id: 0,
    email: "charles@heller.de",
    password: "1234",
    orders: 24,
    amount: "66,50€",
  },
  {
    id: 0,
    email: "tarik@test.de",
    password: "1234",
    orders: 8,
    amount: "123,50€",
  },
  {
    id: 0,
    email: "tim@test.de",
    password: "1234",
    orders: 45,
    amount: "543,50€",
  },
  {
    id: 0,
    email: "jolo@test.de",
    password: "1234",
    orders: 76,
    amount: "5431,50€",
  },
  {
    id: 0,
    email: "achmed@test.de",
    password: "1234",
    orders: 23,
    amount: "8756,50€",
  },
  {
    id: 0,
    email: "fabi@test.de",
    password: "1234",
    orders: 87,
    amount: "412,50€",
  },
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders({ title, tc1, tc2, tc3, tc4 }) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{tc1}</TableCell>
            <TableCell>{tc2}</TableCell>
            <TableCell>{tc3}</TableCell>
            <TableCell align="right">{tc4}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.password}</TableCell>
              <TableCell>{data.orders}</TableCell>
              <TableCell align="right">{`$${data.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
