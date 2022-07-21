import { createGlobalStyle } from 'styled-components';
import { variables } from './Theme';

const { colors, fonts, fontWeight } = variables;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: ${colors.mainWhite};
    color: ${colors.darkGray};
    font-family: ${fonts.text};
    font-weight: ${fontWeight.sm};
    font-size: 18px;
  }
  
  img {
    width: 100%;
    height: auto;
  }

  button {
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
  }
  
  button:hover,
  button:visited,
  button:active {
    opacity: 0.9;
  }
  
  button:disabled {
    background-color: ${colors.mainGray};
    color: ${colors.mainBlack};
    cursor: inherit;
  }
  
  button:disabled:hover,
  button:disabled:visited,
  button:disabled:active {
    opacity: 1;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;