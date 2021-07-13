import React, {useEffect , useState} from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

export default function Repositories(){
    const history = useHistory()
    const [repositoriesName , setName] = useState([])
    const [repositoriesLanguage , setLanguage] = useState([])

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        let repositoriesLanguage = localStorage.getItem('repositoriesLanguage')
        if(repositoriesName !== null && repositoriesLanguage !== null){
            repositoriesName = JSON.parse(repositoriesName)
            repositoriesLanguage = JSON.parse(repositoriesLanguage)
            setName(repositoriesName)
            setLanguage(repositoriesLanguage)
            localStorage.clear()
        }else{
            history.push('/')
        }
    }, [])
    return(
        <S.Container>
            <S.Title>Repositories</S.Title>
            <hr></hr>
            <S.Table>
                <S.Tr>
                    <S.Th>Repository</S.Th>
                    <S.Th>Language</S.Th>
                </S.Tr>
                <S.Tr>
                    <S.Td>  {
                      repositoriesName.map(name => {
                          return (
                              
                              <S.Subtitle>{name}</S.Subtitle>
                          )
                      })
                      } </S.Td>
                    <S.Td>
                        {
                        repositoriesLanguage.map(language => {
                            if(language === null){
                                return  <S.Subtitle>Undefined</S.Subtitle>
                            }else{
                                
                            return (
                                
                                <S.Subtitle>{language}</S.Subtitle>
                            )
                            }
                        })
                        }
                    </S.Td>
                </S.Tr>
            </S.Table>
            <hr></hr>
            <S.LinkHome to="/">Back</S.LinkHome>
        </S.Container>
    
    )
}

