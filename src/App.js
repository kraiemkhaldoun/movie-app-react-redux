import React from 'react';
import './App.css';
import Search from './Comps/Search'
import MovieCard from './Comps/MovieCard'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Form from './Comps/Form';
import Description from './Comps/Description';


function App(props) {

  return (

    <Router>
     <Switch>
      <div className="App">
        <Route exact path='/' render ={(props)=><Search />} />
        <div className="container">
          <Route exact path='/' render ={(props)=><MovieCard />}/>
          <Route exact path='/' component={Form} />
          <Route exact path='/MovieDescription/:id' component ={Description}/>
        </div>
      </div>

      </Switch>

    </Router>

  )
}

export default App



