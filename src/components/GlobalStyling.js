import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./theme";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${defaultTheme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

`;
export default GlobalStyles;
