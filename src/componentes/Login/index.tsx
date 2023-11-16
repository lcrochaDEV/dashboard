import styled from "styled-components";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #8a2be2;
    color: #0086e4;
`;
const Logo = styled.div`
    background-color: #000;
    height: 80px;
    width: 100%;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
`;
const Article = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 9px;
    width: 40%;
    margin: 20px;
`;
const ArticleH1 = styled.h1`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    opacity: 0.9;
    margin-top: 30px;
`;
const Form = styled.form`
    margin: 0 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
`;
const Nav = styled.nav`
    width: 100%;
`;
const NavH1 = styled.h1`
    font-family: 'Anton',sans-serif;
    font-size: 60px;
    opacity: 0.7;
    text-align: center;
    color: #e9dfdf;
    letter-spacing: 1px;
    position: relative;
    z-index: 0;
`;
const NavP = styled.p`
    font-family: 'Bebas Neue',cursive;
    font-size: 75px;
    color: #e9dfdf;
    opacity: 0.3;
    text-align: justify;
    margin-top: -150px;
    padding: 10px;
    letter-spacing: 1px;
    filter: blur(3px);
    position: fixed;
    z-index: 1;
`;
const Label = styled.label`
    margin-left: 4px;
    margin:0;
    padding: 3px;
    width: 0;
    position: relative;
    z-index: 1;
`;
const Erro = styled.p`
    display: flex;
    flex-direction: row;
	flex-wrap:wrap;
	justify-content:center;
	align-items: stretch;
	align-content: normal;
    color: red;
    font-weight: bold;
    margin: 15px 0;
`;
const stylesStys = {
    _height: "25px",
    _bottom: "23px",
    _focus: true,
    _valid: true
};

interface Props{
    children?: JSX.Element,
}

const Login = ({children}: Props) => {
    return (
            <Section>
                <Article>
                    <Logo />
                    <ArticleH1>Área Administrativa</ArticleH1>
                    <Form method="get" action="/admincoisle/admin">
                        <Label>LOGIN:</Label>
                        <Input type="text" name="login" {...stylesStys} />
                        <Label>SENHA:</Label>
                        <Input type="text" name="senha" {...stylesStys}/>
                        <Button type="submit">Enviar</Button>
                    </Form>
                    <Erro>{children}</Erro>
                </Article>
                <Nav>
                    <NavH1>Ferramentas Administrativas(index)</NavH1>
                    <NavP>É um sistema criado para apoia à equipe de A.T Rio.</NavP>
                </Nav>
            </Section>
    );
}

export default Login;