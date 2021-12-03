import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container, TransactionsButtonContainer, ButtonBox } from './styles';

import closeButton from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';



interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function handleNewTransaction(event: FormEvent) {
    event.preventDefault();

    console.log({
      title,
      value,
      type,
      category
    });
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

      <Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={event => setValue(+event.target.value)}
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
