import styled from "styled-components";
import Cadastrar from "../Cadastrar";
import Update from "../Update";

const Dialog = styled.dialog`
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
const Cancel = styled.span`
    cursor: pointer;
    position: absolute;
    right: 10px;
    text-align: left;
    font-size: 35px;
    color: #FFF;
`;
interface IhooksChildren{
    hooksChildren: any
}
interface Props {
    _id?: string
}

const DialogBox = ({ hooksChildren, _id}: IhooksChildren & Props) =>  {
  
    return (
        <>   
        <Dialog>
            {!_id ? <Cadastrar/> : <Update _id={_id}/>}
            <Cancel className="material-symbols-outlined" onClick={hooksChildren}>cancel</Cancel>
        </Dialog>   
        </>
    );
}

export default DialogBox;