import { useContext } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';
import Switch from "react-switch";

import { ThemeContext } from 'styled-components';

import { Container, Content } from './styles';

interface HeaderProps {
  onHandleOpenNewTransactionModal: () => void,
  toggleTheme: () => void
}

export function Header({ onHandleOpenNewTransactionModal, toggleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="dt money" />
          <h2>money4devs</h2>
        </div>

        <div>
          <Switch
            onChange={toggleTheme}
            checked={title === 'light'}

            offColor={'#403f4c'}
            onColor={'#403f4c'}

            onHandleColor={'#dfe7fd'}
            offHandleColor={'#dfe7fd'}

            checkedIcon={<FaSun />}
            uncheckedIcon={<BsMoonStarsFill />}

            height={30}
            width={56}

            borderRadius={16}

            handleDiameter={26}

          />
          <button type="button" onClick={onHandleOpenNewTransactionModal}>
            Nova Transação
          </button>
        </div>
      </Content>
    </Container>
  )
}
