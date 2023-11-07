import React from "react";
import { Hello } from "./Hello";
import { Info } from "./Info";
import "@mantine/core/esm/index.css";
import "@mantine/dates/esm/index.css";
import { Button, MantineProvider, NumberInput } from "@mantine/core";
import { Calendar } from "@mantine/dates";

export const App = () => (
  <MantineProvider>
    <Button>Teste botao</Button>{" "}
    <NumberInput
      label="Input label"
      description="Input description"
      placeholder="Input placeholder"
    />
    <Calendar />
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </MantineProvider>
);
