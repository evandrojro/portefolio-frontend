import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
     display: flex;
    `


export const Figure = styled.div`
    img{
        width: 100%;
    }
    margin-left: auto;
    margin-right: 8rem;
    margin-top: 20vh;
    width: 30rem;
`

export const TextSection = styled.section`
    flex-direction: column;
    display: flex;
    max-width: 22rem;
    margin-left: 10rem;
    margin-top: 23vh;
    height: 10rem;
    span{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: ${props => props.theme.colors.textSecondary};
        margin-top: 18px;
    }
`


export const ContainerButton = styled.div`
    flex-direction: row;
    display: flex;
    height: 3.5rem;
    width: 20rem;
    margin-top: 44vh;
    position: absolute;
    margin-left: 10rem;

    .firstButton{
        background-color: #00DF5E;
        color: black;
        width: 9rem;
        margin-right: 2rem;
        
        :hover{
            background-color: ${props => props.theme.colors.primary}; // Desabilitar padrão MUI
        }
    }
 
    .secondButton{
        background-color: transparent;
        border: 1px solid #333333;  
        width: 9rem;
        color: ${props => props.theme.colors.textPrimary};
    }
`