import { styled } from 'styled-components';
import Erro_404 from './erro_404.webp';

const ErrorStyles = styled.div`
    background-color: #fff;
    background-size: cover;
    opacity: 0.5;
`

const Erro404 = () => {
    return (
        <ErrorStyles>
            <img src={Erro_404} alt="erro404" />
        </ErrorStyles>
    );

}


export default Erro404;