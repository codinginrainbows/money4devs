import styled from "styled-components";
import { darken, transparentize } from 'polished';

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
    background: #f8f9fa;
    color: var(--text-title);

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
    background: var(--green-light);

    margin-top: 1.5rem;

    color: var(--text-title);
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionsButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

    img {
      margin-right: 1rem;
      width: 26px;
      height: 26px;
    }

    span {
      font-size: 1rem;
      color: var(--text-title);
    }
`;

interface ButtonBoxProps {
  isActive: boolean,
  activeColor: "green" | "red"
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const ButtonBox = styled.button<ButtonBoxProps>`
  background: ${(props) => props.isActive
    ? transparentize(0.8, colors[props.activeColor])
    : 'transparent'
  };

  width: 49%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;


  transition: border-color 0.1s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`;
