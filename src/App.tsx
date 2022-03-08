import { useState } from 'react';
import Modal from 'react-modal';
import { Deshboard } from "./components/Deshboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/newTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
      <Deshboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
