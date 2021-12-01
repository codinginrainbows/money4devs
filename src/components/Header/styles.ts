import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);

`;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }

  button {
    background: var(--blue-light);
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    padding: 0 2rem;
    height: 3rem;
    border: 0;
    border-radius: 0.25rem;

    transition: transform 0.1s, filter 0.1s;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      transform: scale(0.96);
    }
  }
`;
