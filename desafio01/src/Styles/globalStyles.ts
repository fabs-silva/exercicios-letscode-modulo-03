import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

const { colors, fonts, fontWeight } = variables;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  height: 100vh;
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

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

   @keyframes spin {
    to {
        transform: rotate(360deg);
   }
}
`;
