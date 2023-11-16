import { useState } from "react";
import styled from "styled-components";
import Button from "../Forms/Button";
import DialogBox from "../Forms/DialogBox";
import Table from './Table';;


const H1 = styled.h1`
    margin: 10px;
    color: rgba(133, 125, 252, 0.9);
`;
const Section = styled.section`
    width: 100%;
`;
const Produtos = () => {
    let [open, setOpen] = useState(false);
    
    const closehooks = () => {
       open = !open
       setOpen(open)
      };
    return (
        <>  
            <Button _height="30px" _margin="3px" _padding="5px" onClick={() => setOpen(true)}>Cadastrar</Button>
            <H1>Lista de Produtos Cadastrados</H1>
            <Section>
                <Table/>
                {open ? <DialogBox hooksChildren={closehooks}/> : <></>} 
            </Section>
        </>
    );
}

export default Produtos;