import styled from 'styled-components'

export const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
    background-color: rgb(1,1,1);
`

export const Title = styled.h1`
    text-align:center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const Contente = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`

export const Input = styled.input`
    border: solid rgb(22,27,34);
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: 10px 0px 0px 10px;
    
`

export const Button = styled.button`
    height: 1.875rem;
    border: solid rgb(22,27,34);
    background: rgb(22,27,34);
    color: #fff;
    border-radius: 0px 10px 10px 0px;

    &:hover{
        background: rgb(13,17,23);
        border: 3px  solid rgb(13,17,23);
    }
`

export const ErrorMsg = styled.span`
    display:block;
    color:red;
    font-size:1rem;
    font-weight: 600px;
    margin-top: 1rem;

`