import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}
const time = Date.now();
const today = new Date(time);

export default function Deposits() {
  return (
    <React.Fragment>
      <Title> Einnahmen Gesamt</Title>
      <Typography component="p" variant="h4">
        3,024.00€
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}></Typography>
      <div>{today.toDateString()}</div>
    </React.Fragment>
  );
}
