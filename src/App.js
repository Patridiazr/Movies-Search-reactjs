import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render () {

    // const url = new URL(document.location)
    // const Page = url.searchParams.has('id')
    //   ? <Detail id={url.searchParams.get( 'id' )} />
    //   : <Home/>
    
    
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:id' component={Detail}/>
          <Route  component={NotFound}/> 
        </Switch>
      </div>
    );
  }
}


export default App;
