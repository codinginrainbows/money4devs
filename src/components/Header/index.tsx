import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onHandleOpenNewTransactionModal: () => void;
}

export function Header({ onHandleOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="dt money" />
          <h2>money4devs</h2>
        </div>
        <button type="button" onClick={onHandleOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
