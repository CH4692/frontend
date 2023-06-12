import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

/**
 * This contains the lists of the Products which can be ordered
 * @param {*} param0
 * @returns
 */
export default function Orders({ rows, title }) {
  const [placement, setPlacement] = useState(0);
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.launch}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.size}</TableCell>
              <TableCell>{row.ingredients}</TableCell>
              <TableCell align="right">{`${row.price}€`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
