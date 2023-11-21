import styled from "styled-components";

const Select = styled.select`   
    border-color: #0086e4;
    padding: 5px;
`;

interface Props {
    name: string,
    selectItens?: string[],
    hooksChildren: any
}
const Selection = ({ name, selectItens, hooksChildren }: Props) => {

    return(
        <Select name={name} onChange={hooksChildren}>
            <option selected disabled value="" >Selecione uma Categoria</option>
                {selectItens?.map(itens =>
                    <option key={itens} value={itens}>{itens}</option>           
                )}
        </Select>
    );
};
export default Selection;
