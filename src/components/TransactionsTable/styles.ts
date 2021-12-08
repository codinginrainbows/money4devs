import styled from "styled-components";


export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    tbody tr {
      transition: transform 0.2s;
      cursor: pointer;

      &:hover {
        transform: translateX(10px);
      }
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1rem;
    }

    td {
      background: var(--shape);
      padding: 1rem 2rem;
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

  }
`;
