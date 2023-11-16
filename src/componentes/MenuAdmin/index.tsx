import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "componentes/ContextApi";


const MenuAdminStyled = styled.header`
    width: 100%;
    max-width: 100%;
    background: rgba(133, 125, 252, 0.9);
    display: flex;
    justify-content: space-between;
`;
const LinkStyles = styled(Link)`
    padding:25px 0 25px 25px;
    font-size: 20px;
    display: inline-block;
    text-decoration: none;
    color:  #ffffff;
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #ffffff;
        background-image: linear-gradient(to left, rgba(255,0,0,0), #ffffff);
        transition: width .4s ease-in;
        position: relative;
        top: 5px;
        transform: scale(1.1);
        transition: all 0.9s;
    }

    &:hover::after {
        width: 100%;
    } 
`;
const UserArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 70px;
    color: #fff;
    font-weight: 600;
    text-align: center;
`;
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 90px;
    opacity: 0.8;
    &:hover{
        opacity: 1;
    }
`;

const MenuAdmin = () => {
    const  { user }: any = useContext(UserContext); //TIPAGEM TYPE ANY
    return(
        <>
        <MenuAdminStyled>
            <nav>
                <LinkStyles to={'/admincoisle/admin'} >Início</LinkStyles>
                <LinkStyles to={'/admincoisle/produtos'} >Produtos</LinkStyles>
            </nav>
            <UserArea>
                <a href="/"><Avatar alt="avatar" src="https://cdn-icons-png.flaticon.com/512/147/147142.png"/></a>
                <p>{`${user}`}</p>
            </UserArea>
        </MenuAdminStyled>
        </>
    );
}
export default MenuAdmin;