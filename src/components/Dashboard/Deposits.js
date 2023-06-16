import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";


/**
 * This contains the widgets which display any given content through proops
 * @param {*} param0
 * @returns
 */
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
