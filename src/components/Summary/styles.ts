import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -6.5rem;
`;

export const Card = styled.div`
  width: 334px;
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 5px;

  header {
    color: var(--text-title);
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--text-title);
    }
  }

  div {
    margin-top: 1rem;

    strong {
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 3rem;
      color: var(--text-title);
    }
  }
`;

export const BalanceCard = styled.div`
  width: 334px;
  background: var(--green);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: #fff;
    }
  }

  div {
    margin-top: 1rem;

    strong {
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 3rem;
      color: #fff;
    }
  }
`;
