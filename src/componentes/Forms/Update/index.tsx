import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import Botton from "../Button";
import CadastrosLogo from "./cadastro.png"
import Selection from "../Select";
import ConnectApi from "componentes/ClassFetch/ClassConnecectApi";

const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Article = styled.article`
    display: flex;
    justify-content:flex-start;
    background-color: #fff;
    margin: 20px;
    box-shadow: 1px 1px 6px #aeafaf;
    border-radius: 9px;
`;
const Logo = styled.img`
    width: 300px;
    margin: 15px;
`;
const Form = styled.form`
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const H1 = styled.h1`
    text-align: center;
    color: #0086e4;
`;
const Label = styled.label`
    margin:0;
    padding: 3px;
    width: 140px;
    position: relative;
    z-index: 1;
    color: #0086e4;
    font-size: 16px;
`;
const stylesStys = {
    _height: "20px",
    _width: "500px",
    _valid: true
};
const BtnsForms = styled.div`
  display:flex;  
`;

interface IheadersData {
    src?: string,
    name?: string,
    size?: string,
    model: string,
    color?: string
    value?: string,
    stock?: string,
    gender: string,
    selectItens?: string[]
}
interface Props {
    _id?: string | undefined
}

const Update = ({ _id }: Props) => {

    //GET PEGA ITEN POR ID
    const [_ObjectData, set_ObjectData] = useState({} as IheadersData);
    const apiDataId = async ({ _id }: Props) => {
        let ApiDataReturn = new ConnectApi(_id)
        let data = await ApiDataReturn.methodGet();
        return set_ObjectData(data)
    }
    useEffect(() => {
       apiDataId({_id});
    }, [_id]);

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case 'name':
                return { ...state, name: action.payload };
            case 'size':
                return { ...state, size: action.payload };
            case 'model':
                return { ...state, model: action.payload };
            case 'color':
                return { ...state, color: action.payload };
            case 'value':
                return { ...state, value: action.payload };
            case 'stock':
                return { ...state, stock: action.payload }
            case 'src':
                return { ...state, src: action.payload };
            case 'gender':
                return { ...state, gender: action.payload };
            default:
                return {...state, ...action};
                //throw new Error(`Unknown action type: ${action.type}`);
            };
        } 
        
    const [state, dispatch] = useReducer(reducer, {} as IheadersData);
    useEffect(() => {
        dispatch(_ObjectData);
    },[_ObjectData]);
    
    //CAMPO SELECTION E SUAS OPÇÕES
    const [selectItens, setSelectItens] = useState([] as string[]);

    useEffect(() => {
        setSelectItens(['Masculino', 'Feminina', 'Kids'])
    }, []);

    //CRIA UM NOVO OBJETO PARA REALIZAÇÃO DO UPDATE
    const headersData: IheadersData = {
        src: state.src,
        name: state.name,
        size: state.size,
        model: state.model,
        color: state.color,
        value: state.value,
        gender: state.gender,
        stock: state.stock
    }
    //PATCH ATUALIZA POR ID
    const apiDataPatch = async () => {
        let ApiDataReturn = new ConnectApi(_id, headersData)
        let put_data = await ApiDataReturn.methodPatch();
        return put_data;
    }
    //DELETE ITEN POR ID
    const apiDataDelete = async () => {
        let ApiDataReturn = new ConnectApi(_id)
        let del_data = await ApiDataReturn.methodDelete();
        return del_data;
    }

    return (
        <Section>
            <Article>
                <Logo src={state.src || CadastrosLogo}/>
                <Form>
                    <H1>EDITAR CADASTRO</H1>
                    <Label>PRODUTO:</Label>
                    <Input type="text" name="name" {... stylesStys} value={state.name} required onChange={(event) => dispatch({ type: 'name', payload: event.target.value })}/>
                    <Label>TAMANHO:</Label>
                    <Input type="text" name="size" {... stylesStys} value={state.size} required onChange={(event) => dispatch({ type: 'size', payload: event.target.value })}/>
                    <Label>MODELO:</Label>
                    <Input type="text" name="model" {... stylesStys} value={state.model} required onChange={(event) => dispatch({ type: 'model', payload: event.target.value })}/>
                    <Label>CORES:</Label>
                    <Input type="text" name="color" {... stylesStys} value={state.color} required onChange={(event) => dispatch({ type: 'color', payload: event.target.value })}/>
                    <Label>PREÇO:</Label>
                    <Input type="text" name="value" {... stylesStys} value={state.value} required onChange={(event) => dispatch({ type: 'value', payload: event.target.value })}/>
                    <Label>DISPONÍVEL:</Label>
                    <Input type="text" name="stock" {... stylesStys} value={state.stock} required onChange={(event) => dispatch({ type: 'stock', payload: event.target.value })}/>
                    <Label>GENERO:</Label>
                    <Selection name={'produtos'} selectItens={selectItens} hooksChildren={(event: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'gender', payload: event.target.value })}/>
                    <Label>URL DA IMAGEM:</Label>
                    <Input type="text" name="url" {... stylesStys} value={state.src} required onChange={(event) => dispatch({ type: 'src', payload: event.target.value })}/>
                    <Label>LOGIN:</Label>
                    <Input type="text" name="login" {... stylesStys} />
                    <BtnsForms>
                        <Botton type="submit" _width="100px" _height="40px" _margin="10px" onClick={apiDataPatch}>Editar</Botton>
                        <Botton type="submit" _width="100px" _height="40px" _margin="10px" onClick={apiDataDelete}>DELETE</Botton>
                    </BtnsForms>
                </Form>
            </Article>
        </Section>
    );
}

export default Update;
