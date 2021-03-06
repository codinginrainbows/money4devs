import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${props => props.theme.colors.background};
    --shape: ${props => props.theme.colors.shape};

    --textTitle: ${props => props.theme.colors.textTitle};
    --textBody: ${props => props.theme.colors.textBody};

    --blue: ${props => props.theme.colors.blue};
    --greenLight: ${props => props.theme.colors.greenLight};
    --green: ${props => props.theme.colors.green};
    --red: ${props => props.theme.colors.red};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;  //15px (standard 16px)
    }

    @media (max-width: 720px) {
      font-size: 87.5%;   //14px (standard 16px)
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, button, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  //styling modals since they gonna be the same throughout the whole application
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;

    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-closeButton {
    position: absolute;
    border: 0;
    background: transparent;

    top: 1.5rem;
    right: 1.5rem;

    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
