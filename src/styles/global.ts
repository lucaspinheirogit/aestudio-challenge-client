import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --white: #ffffff;
    --black: #000000;
    --greyish-white: #f2f5f7;
    --light-gray: #e4e7ea;
    --gray: #AFB1B8;
    --dark-gray: #5c6873;
    --blue: #214f7c;
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

  .fadeIn-enter {
    opacity: 0.01;
  }

  .fadeIn-enter.fadeIn-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit.fadeIn-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`
