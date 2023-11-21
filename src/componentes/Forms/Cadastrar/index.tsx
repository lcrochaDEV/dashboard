import styled from "styled-components";
import Input from "../Input";
import Botton from "../Button";
import CadastrosLogo from "./cadastro.png"
import { useEffect, useState } from "react";
import Selection from "../Select";
import ConnectFetch from "componentes/ClassFetch/ClassFetch";

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
    height: 450px;
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
//React.FormEvent<HTMLFormElement>
const Cadastrar = () => {
    
    //FORMULARIO PRODUTO
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [value, setValue] = useState('');
    const [stock, setStock] = useState('');
    //PRINTA FOTO NA TELA DE CADASTRO
    const [src, setSrc] = useState('');
    
    //CAMPO SELECTION E SUAS OPÇÕES
    const [selectItens, setSelectItens] = useState([] as string[]);

    useEffect(() => {
        setSelectItens(['Masculino', 'Feminina', 'Kids'])
      }, []);
    
    const [gender, setGender] = useState('');

    const headersData: IheadersData = {
        src: src,
        name: name,
        size: size,
        model: model,
        color: color,
        value: value,
        gender: gender,
        stock: stock
    }

    //POST
    const URLFETCH = 'http://192.168.1.252:3000/home/';
    async function conectJson() {
        try{
            let data = new ConnectFetch(URLFETCH, headersData);   
            let comandList = await data.metodPost();
            console.log(comandList);
        }catch(error){
            console.log('Url não encontrada!')
        }
    }

    return (
        <Section>
            <Article>
                <Logo src={src || CadastrosLogo}/>
                <Form>
                    <H1>CADASTRO DE PRODUTOS</H1>
                    <Label>PRODUTO:</Label>
                    <Input type="text" name="name" {... stylesStys} value={name} required onChange={name => setName(name.target.value)}/>
                    <Label>TAMANHO:</Label>
                    <Input type="text" name="size" {... stylesStys} value={size} required onChange={size => setSize(size.target.value)}/>
                    <Label>MODELO:</Label>
                    <Input type="text" name="model" {... stylesStys} value={model} required onChange={model => setModel(model.target.value)}/>
                    <Label>CORES:</Label>
                    <Input type="text" name="color" {... stylesStys} value={color} required onChange={color => setColor(color.target.value)}/>
                    <Label>PREÇO:</Label>
                    <Input type="text" name="valuer" {... stylesStys} value={value} required onChange={value => setValue(value.target.value)}/>
                    <Label>DISPONÍVEL:</Label>
                    <Input type="text" name="stock" {... stylesStys} value={stock} required onChange={stock => setStock(stock.target.value)}/>
                    <Label>GENERO:</Label>
                    <Selection name={'produtos'} selectItens={selectItens} hooksChildren={(event: React.ChangeEvent<HTMLInputElement>) => setGender(event.target.value)}/>
                    <Label>URL DA IMAGEM:</Label>
                    <Input type="text" name="url" {... stylesStys} value={src} required onChange={src => setSrc(src.target.value)}/>
                    <Label>LOGIN:</Label>
                    <Input type="text" name="login" {... stylesStys} />
                    <Botton type="submit" _width="100px" _height="40px" _margin="10px" onClick={conectJson}>Enviar</Botton>
                </Form>
            </Article>
        </Section>
    );
}

export default Cadastrar;
