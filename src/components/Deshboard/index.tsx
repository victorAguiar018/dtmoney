import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styled";


export function Deshboard() {

    
    return(
        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>
    )
}