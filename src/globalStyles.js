import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
  }
  button {
    background: none;
    cursor: pointer;
  }
`;
