import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #222222;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0; 
  }
`;

export default { GlobalStyle };
