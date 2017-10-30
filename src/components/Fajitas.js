import React from 'react'

class Fajitas extends React.Component {
  render() {
    return (
      <div className='col s12 m6'>
        <div className="card z-index-5">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://www.simplyrecipes.com/wp-content/uploads/2015/04/chicken-fajitas-horiz-b-1200.jpg" alt="Chicken Fajitas" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text left-align text-darken-4">Chicken Fajitas<i className="material-icons right">info</i></span>
            <div className='row'>
            <div className='divider'></div>
            </div>
            <div className='row'>
            <div className='btn red waves-effect light col s4 m4 offset-m1 offset-s1 '>Edit</div>
            <div className='btn red waves-effect light col s4 m4 offset-m2 offset-s2'>Delete</div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Fajitas<i className="material-icons right">close</i></span>
            <div className="divider"></div>
            <div className='container'>
              <div className='row left-align'>
                <div className='col m8 s8 offset-m2'>
                  <ul>
                    <li>Chicken</li>
                    <li>Bell Peppers</li>
                    <li>Tortillas</li>
                    <li>Onion</li>
                    <li>Sour Cream</li>
                    <li>Cheese</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                  </ul>
                </div>

              </div>
              <div className='divider'></div>
                <div className='row left-align'>
                  <div className='col m12 s12'>
                    <ol>
                      <li>Cut Peppers and onions in to strips</li>
                      <li>Clean chicken and cut in to strips</li>
                      <li>Line two baking sheets with foil and coat with non-stick spray</li>
                      <li>Place peppers and onions on one baking sheet</li>
                      <li>Cook chicken on the remaining baking sheet</li>
                      <li>Cook for 15-20 minutes</li>
                      <li>Serve with Steamed tortillas, sour cream, and cheese</li>
                    </ol>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fajitas
