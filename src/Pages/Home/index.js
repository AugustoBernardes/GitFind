import React, { useState } from 'react';
import axios from 'axios'
import * as S from './styled'
import {useHistory} from 'react-router-dom'

function App(props) {
  const history = useHistory()
  const [user,setUser] = useState('')
  const [erro, setErro] = useState(false)

  function handleSearch(){
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      const repositories =  response.data;
      const repositoriesLanguage = [];
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })
      repositories.map((repository) => {
        repositoriesLanguage.push(repository.language)
      })
      console.log(repositoriesLanguage)
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      localStorage.setItem('repositoriesLanguage', JSON.stringify(repositoriesLanguage))
      setErro(false)
      history.push('/repositories')
    }).catch(err => {
      setErro(true)
    })
  }

  return (
    <S.HomeContainer>
      <S.Contente>
      <S.Title>GitFind</S.Title>
      <div> 
       <S.Input className="userInput" placeholder="User" value={user} onChange={e => 
          setUser(e.target.value)}/>
        <S.Button type="button" onClick={handleSearch}>Search</S.Button>
      </div>
      </S.Contente>
          {/* Aqui tem operador ternario o '?' Se for true e os ':' se não */}
          { erro ? <S.ErrorMsg>Happened a error, try again!</S.ErrorMsg> : ''}
    </S.HomeContainer>
   

  
  );
}

export default App;
