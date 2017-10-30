import React from 'react'
import DashboardNavWelcome from './DashboardNavWelcome'

class WelcomeText extends React.Component {
  render() {
    return (
      <div>
        <DashboardNavWelcome />
        <h1>A Recipe Keeper for Home</h1>
          <div className="container">
      <div className="section">
        <div className='section'></div>
        <div className="row">
          <div className="col s12 m4">
            <div class="icon-block">
              <h2 className="center red-text"><i className="material-icons large">restaurant</i></h2>
              <h5 className="center">Family recipies at your fingertips</h5>

              <p className="light">Having a space for sharing and storing family recipies has never been easier. Simple to use, generations can come together to make memories and delicious meals.</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center red-text"><i className="material-icons large">sync</i></h2>
              <h5 className="center">Access for everyone</h5>

              <p className="light">No matter what platform you are using, phone or computer, the whole family is able to look at the recipes.  Now grandmas everywhere are able to share some special time in the kitchen with their loved ones </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center red-text"><i className="material-icons large">fingerprint</i></h2>
              <h5 className="center">Special for you</h5>

              <p className="light">Every recipe is different, just like every family.  Users have the ability to put in the recipies however Grandma or Aunt June felt was fit </p>
            </div>
          </div>
        </div>

      </div>
      <br />
    </div>
    <div className='row'>
      <div className='btn-large red waves-effect light col s8 m4 offset-m4 offset-s2'><a href="/cards" className="white-text">View Recipes</a></div>
    </div>

      </div>
    )
  }
}

export default WelcomeText
