import React from 'react'
import NewYorkStrip from './NewYorkStrip'
import Spaghetti from './Spaghetti'
import StuffedPeppers from './StuffedPeppers'
import Tacos from './Tacos'
import Fajitas from './Fajitas'
import Burgers from './Burgers'
import SwedishPancakes from './SwedishPancakes'
import RecipeNavbar from './RecipeNavbar'

class AllCards extends React.Component {
  render(){
    return (
      <div>
        <RecipeNavbar />
        <div className='container'>
          <div className='row'>
            <NewYorkStrip />
            <Spaghetti />
          </div>
          <div className='row'>
            <StuffedPeppers />
            <Tacos />
          </div>
          <div className="row">
            <Fajitas />
            <Burgers />
          </div>
          <div className="row">
            <SwedishPancakes />
            
          </div>
        </div>
      </div>
    )
  }
}

export default AllCards
