import React, { useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

const time = Date.now();
const today = new Date(time);

export default function Deposits({ data }) {
  const [totalAmount, setTotalAmount] = useState();

  const getTotalAmount = useMemo(() => {
    let total = 0;
    data.map((item) => {
      total += item.orders.reduce(
        (total, currentValue) => total + parseInt(currentValue.totalAmount),
        0
      );
    });
    return total;
  }, [totalAmount, data]);

  return (
    <React.Fragment>
      <Title> Einnahmen Gesamt</Title>
      <Typography component="p" variant="h4">
        {`${getTotalAmount}€`}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}></Typography>
      <div>{today.toDateString()}</div>
    </React.Fragment>
  );
}
