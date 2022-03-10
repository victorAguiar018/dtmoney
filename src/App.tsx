import { useState } from 'react';
import Modal from 'react-modal';
import { Deshboard } from "./components/Deshboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/newTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
      <Deshboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
