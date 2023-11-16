import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;
const H1 = styled.h1`
    margin: 10px;
    color: rgba(133, 125, 252, 0.9);
`;
const AreaAdmin = () =>{
    return(
        <Section>
            <H1>HOME</H1>
        </Section>
    );
}
  
export default AreaAdmin;