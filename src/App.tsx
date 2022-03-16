import { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

//import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header
          onHandleOpenNewTransactionModal={handleOpenNewTransactionModal}
          toggleTheme={toggleTheme}
        />

        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
