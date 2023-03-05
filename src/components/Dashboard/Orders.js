import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

export default function Orders({ title, tc1, tc2, tc3, tc4, customer, data }) {
  if (data === undefined) {
    return <div>Loading...</div>;
  }

  const CustomerTable = ({ username, email, password, role }) => {
    return (
      <TableRow>
        <TableCell>{username}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{password}</TableCell>
        <TableCell align="right">{role}</TableCell>
      </TableRow>
    );
  };

  const OrderTable = ({ email, password, amount, expanse }) => {
    return (
      <TableRow>
        <TableCell>{email}</TableCell>
        <TableCell>{password}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell align="right">{`${expanse}€`}</TableCell>
      </TableRow>
    );
  };

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
          {customer
            ? data.map((item) => (
                <CustomerTable
                  key={Math.random()}
                  username={item.username}
                  email={item.email}
                  password={item.password}
                  role={item.role}
                />
              ))
            : data.map((item) => (
                <OrderTable
                  key={Math.random()}
                  email={item.email}
                  password={item.password}
                  amount={item.orders.length}
                  expanse={item.orders.reduce(
                    (total, currentValue) =>
                      total + parseInt(currentValue.totalAmount),
                    0
                  )}
                />
              ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
