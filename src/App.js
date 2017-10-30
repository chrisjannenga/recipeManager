import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import AllCards from './components/AllCards'
import AddPage from './components/AddPage'
import WelcomeText from './components/WelcomeText'



class App extends Component {
  render(props) {
    return (

      <div className='App'>
        <Router>
          <div>


            <Route exact path="/" component={WelcomeText} />
            <Route exact path="/cards" component={AllCards} />
            <Route exact path="/addRecipe" component={AddPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
