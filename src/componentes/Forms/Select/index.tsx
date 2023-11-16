import styled from "styled-components";

const Select = styled.select`   
    border-color: #0086e4;
    padding: 5px;
`;
interface Props {
    gender?: string[],
}

const Selection = ({ gender }: Props) => {

    return(
        <Select name="produtos">
            <option selected disabled value="">Selecione uma Categoria</option>
                {gender?.map(itens =>
                    <option key={itens} value={itens}>{itens}</option>           
                )}
        </Select>
    );
};
export default Selection;
