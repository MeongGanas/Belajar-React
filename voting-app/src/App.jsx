/* eslint-disable no-unused-vars */
import * as React from "react";
import Button from "@mui/material/Button";
import { Send } from "@mui/icons-material";

export default function ButtonUsage() {
  return (
    <Button variant="contained" endIcon={<Send />}>
      Hello world
    </Button>
  );
}
