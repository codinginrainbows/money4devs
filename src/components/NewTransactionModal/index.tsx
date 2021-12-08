import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import closeButton from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import { Container, TransactionsButtonContainer, ButtonBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  async function handleCrateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    // getting input fields clean/empty
    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');

    // closing modal after inserting a transaction in the table
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Transaction Modal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-closeButton"
      >
        <img src={closeButton} alt="Close Modal" />
      </button>

      <Container onSubmit={handleCrateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={event => setAmount(+event.target.value)}
        />

        <TransactionsButtonContainer>
          <ButtonBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="" />
            <span>Income</span>
          </ButtonBox>

          <ButtonBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="" />
            <span>Outcome</span>
          </ButtonBox>
        </TransactionsButtonContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Register
        </button>
      </Container>
    </Modal>
  )
}
