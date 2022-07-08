import styled from 'styled-components';

export const Title = styled.div`
color: ${props => props.isRed ? 'red' : 'blue'}; // Ao invés de passarmos um cor direto para o titulo agora podemos mudar ela direto no index.js
font-size: 2.5em;
 `;
export const Principal = styled.p`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: red;



`