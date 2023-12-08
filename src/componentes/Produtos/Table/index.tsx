import styled from "styled-components";
import { useEffect, useState } from "react";
import DialogBox from "componentes/Forms/DialogBox";
import ConnectApi from "componentes/ClassFetch/ClassConnecectApi";

const A = styled.a`
    display: flex;
    box-shadow: 1px 1px 6px #aeafaf;
    border-radius: 10px;
    margin: 10px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: #863ccc;
    &:hover{
        background-color: rgba(133, 125, 252, 0.4);
    }

`;
const ProdutoTable = styled.table`
    width: 100%;
    max-width: 100%;
    position: relative;
    right: 40px;
    bottom: 10px;
    font-weight: bold;
`;
const Img = styled.img`
    width: 50px;
    height: 70px;
    border-radius: 5px;
`;
const Th = styled.th`
    position: relative;
    top: 20px;
`;
const Td = styled.td`
    width: 0;
`;

interface IProdutos{
    _id: string,
    src?: string,
    name?: string,
    size?: string,
    color?: string
    value?: string,
    stock?: string,
    gender?: string
}
const Table = () => {
    const [produtos, setprodutos] = useState([] as IProdutos[]);
    //GET *TODOS OS ITENS DO BD*
    const apiData = async () => {
        let ApiDataReturn = new ConnectApi()
        let data = await ApiDataReturn.methodGet()
        setprodutos(data)
    }  
    useEffect(() => { 
        apiData();
    }, []);
    
    let [_id, set_Id] = useState('' as string)

    //ABERTURA DO DIALOG
    let [open, setOpen] = useState(false);
    const closehooks = () => {
       open = !open
       setOpen(open)
      };
      
    const thItens = ['', 'PRODUTO', 'TAMANHO', 'CORES', 'PREÇO', 'DISPONÍVEIS', 'GÊNERO'];
    return(
        <>  
            {produtos.map(produtos =>
            <A onClick={() => setOpen(true)}>
                <ProdutoTable onClick={() => set_Id(produtos._id)}>
                    <tr>
                        {thItens.map(itens => <Th>{itens}</Th>)}
                    </tr>
                    <tr>
                        <Td><Img src={produtos.src}/></Td>
                        <Td>{produtos.name}</Td>
                        <Td>{produtos.size}</Td>
                        <Td>{produtos.color}</Td>
                        <Td>R${produtos.value}</Td>
                        <Td>{produtos.stock}</Td>
                        <Td>{produtos.gender}</Td>
                    </tr>
                </ProdutoTable>
            </A>
            )}
            {open ? <DialogBox hooksChildren={closehooks} _id={_id}/> : <></>}
        </>
    );
}

export default Table;
