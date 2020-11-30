import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'S-CoreDream-4Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    font-family: 'S-CoreDream-4Regular';
    *:focus { outline:none; }
  }

  p{
    margin: 0px;
    font-family: 'S-CoreDream-4Regular';
  }

  button{
    font-family: 'S-CoreDream-4Regular';
  }
`;

export default GlobalStyle;
