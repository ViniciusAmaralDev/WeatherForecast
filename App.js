import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "./src/navigation";
import Context from "./src/context";

export default () => {
  const { theme } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};
