import styled from "styled-components";

export const Container = styled.form`
  padding: 1rem 0;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;

    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    /* hiding input type number arrows on:
      Firefox */
    -moz-appearance: textfield;

    /* hiding input type number arrows on:
      Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

  }

  button[type="submit"] {
    width: 100%;
    padding: 0 2rem;
    height: 4rem;
    border: 0;
    border-radius: 0.25rem;
    background: var(--green);

    margin-top: 1.5rem;

    color: #fff;
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
