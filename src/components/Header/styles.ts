import styled from 'styled-components';

export const Container = styled.header`
  //background: var(--blue);
  background: ${props => props.theme.colors.blue};

`;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    cursor: pointer;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
    }

    h2 {
      color: #fff;
      margin-left: 16px;
      text-shadow: 2px 2px var(--text-title);
    }
  }

  svg {
    color: #ffb703;
    margin: 0 auto;
    font-size: 18px;
  }

  button {
    background: var(--greenLight);
    font-weight: 600;
    font-size: 1rem;
    color: var(--textTitle);
    padding: 0 2rem;
    height: 3rem;
    border: 0;
    border-radius: 0.25rem;
    margin-left: 1.5rem;

    transition: transform 0.2s, filter 0.1s;

    &:hover {
      filter: brightness(0.95);
      transform: scale(1.04);
    }

    &:active {
      transform: scale(0.96);
    }
  }
`;
