import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import Modal from 'react-modal'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransitionModal: () => void;
}

export function Header({onOpenNewTransitionModal}: HeaderProps){
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button onClick={onOpenNewTransitionModal}>
                    Nova transação
                </button>

                
            </Content>
        </Container>
    )
}