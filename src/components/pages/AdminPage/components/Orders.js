import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

/**
 * This contains the lists of the Products which can be ordered
 * @param {*} param
 * @returns
 */
export default function Orders({ rows, title, deleteHandler }) {
  const [data, setData] = useState(rows);

  const deleteProduct = (id) => {
    deleteHandler(id);
    console.log(id);
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Launch</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Ingredients</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.launch}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.size}</TableCell>
              <TableCell>{row.ingredients}</TableCell>
              <TableCell align="right">{`${row.price.toFixed(2)}€`}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => deleteProduct(row.id)}
                  style={{ width: 40 }}
                >
                  X
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
