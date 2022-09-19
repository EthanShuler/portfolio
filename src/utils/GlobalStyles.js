import { createGlobalStyle } from 'styled-components';

const primaryColor = '#000000';


const Globals = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    height: 100%;
  }

  body {
    font-family: "Open Sans", sans-serif;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

`

export default Globals;