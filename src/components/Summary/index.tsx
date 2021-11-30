import { BalanceCard, Card, Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import balanceImg from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <Card>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <div>
          <strong>R$ 15.375,00</strong>
        </div>
      </Card>
      <Card>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Entrada" />
        </header>
        <div>
          <strong>R$ 9.210,00</strong>
        </div>
      </Card>
      <BalanceCard>
        <header>
          <p>Balance</p>
          <img src={balanceImg} alt="Entrada" />
        </header>
        <div>
          <strong>R$ 6.165,00</strong>
        </div>
      </BalanceCard>
    </Container>
  )
}
