import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    *:focus { outline:none; }
  }
  p{
    margin: 0px;
  }
`;

export default GlobalStyle;
