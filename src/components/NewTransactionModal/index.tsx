import Modal from 'react-modal';
import { Container } from './styles';

import closeButton from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

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

      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Title"
        />
        <input
          type="number"
          placeholder="Value"
        />
        <input
          placeholder="Category"
        />

        <button type="submit">
          Register
        </button>
      </Container>
    </Modal>
  )
}
