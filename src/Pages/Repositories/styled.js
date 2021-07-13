import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Container = styled.div`
    
`

export const Table = styled.table`
    width: 100%;    
    border-collapse: collapse;
    font-size: 1.5rem;
    font-family: sans-serif;
    color:gray;
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
`

  
export const Tr = styled.tr`
    width:400px;
    display:flex;
    justify-content: space-between;
`

export const Th = styled.th`
    color:rgb(51,51,51);
`

export const Td = styled.td`
    
`

export const Title = styled.h1`
    text-align:center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const Subtitle = styled.h2`
    font-size: 1rem;
`
    
export const List = styled.ul`
    list-style:none;
    padding: 0;|
    margin:0
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem
`
export const LinkHome = styled(Link)`
    display:block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: gray;
    padding: .5rem 0;
    color: #fff;
    text-decoration:none;
    border-radius: .25rem;
    box-shadow: 2px 2px 2px black;

    &:hover{
        background-color: wheat;
        color: #000;
    }
`

