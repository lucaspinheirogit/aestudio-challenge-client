import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --white: #ffffff;
    --black: #000000;
    --greyish-white: #f2f5f7;
    --light-gray: #e4e7ea;
    --gray: #AFB1B8;
    --dark-gray: #5c6873;
    --orange: #ff9f4d;
    --salmon: #fb6c63;
    --dark-shadow: rgba(50, 50, 93, 0.1);
    --black-shadow: rgba(0, 0, 0, 0.08);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  html{
    font-size: 62.5%;
  }

  html, body, #root {
    overflow-x: hidden;
    height: 100%;
  }

  body{
    font: 1.6em 'Rubik', sans-serif;
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`
