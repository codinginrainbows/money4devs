import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import balanceImg from '../../assets/total.svg';

import { Card, Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.depositTotal += transaction.amount;
      acc.balance += transaction.amount;
    } else {
      acc.withdrawTotal += transaction.amount;
      acc.balance -= transaction.amount;
    }

    return acc;
  }, {
    depositTotal: 0,
    withdrawTotal: 0,
    balance: 0,
  });

  return (
    <Container>
      <Card>
        <header>
          <p>Entrada</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <div>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.depositTotal)}
          </strong>
        </div>
      </Card>
      <Card>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="Entrada" />
        </header>
        <div>
          <strong>
            -
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdrawTotal)}
          </strong>
        </div>
      </Card>
      <Card className="balanceCard">
        <header>
          <p>Balanço</p>
          <img src={balanceImg} alt="Entrada" />
        </header>
        <div>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.balance)}
          </strong>
        </div>
      </Card>
    </Container>
  )
}
