import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ title, text, info, info2, info3 }) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography mb={2} component="p" variant="h5">
        {text}
      </Typography>
      <Typography color="text.secondary" variant="h6">
        {info}
      </Typography>
      <Typography color="text.secondary" variant="h6">
        {info2}
      </Typography>
      <Typography color="text.secondary" variant="h6">
        {info3}
      </Typography>
    </React.Fragment>
  );
}
