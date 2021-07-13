import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Repositories from './Pages/Repositories'
import Home from './Pages/Home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}