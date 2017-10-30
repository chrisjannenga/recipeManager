import React from 'react'

class Burgers extends React.Component {
  render() {
    return (
      <div className='col s12 m6'>
        <div className="card z-index-5">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg" alt='Hamburger' />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text left-align text-darken-4">Ground Chuck Burgers<i className="material-icons right">info</i></span>
            <div className='row'>
            <div className='divider'></div>
            </div>
            <div className='row'>
            <div className='btn red waves-effect light col s4 m4 offset-m1 offset-s1 '>Edit</div>
            <div className='btn red waves-effect light col s4 m4 offset-m2 offset-s2'>Delete</div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Ground Chuck Burgers<i className="material-icons right">close</i></span>
            <div className="divider"></div>
            <div className='container'>
              <div className='row left-align'>
                <div className='col m8 s8 offset-m2'>
                  <ul>
                    <li>Brioche Buns</li>
                    <li>Ground Chuck</li>
                    <li>Onions</li>
                    <li>Tomatoes</li>
                    <li>Pickles</li>
                    <li>Cheese</li>
                    <li>Seasoning Salt</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                  </ul>
                </div>

              </div>
              <div className='divider'></div>
                <div className='row left-align'>
                  <div className='col m12 s12'>
                    <ol>
                      <li>Mix Salt and Pepper with Ground Chuck</li>
                      <li>Form into 1/2lb patties</li>
                      <li>let chill to firm up</li>
                      <li>Begin to prep the lettuce, tomatoes, onions, and pickles for the burgers</li>
                      <li>Remove burgers from fridge and place on preheated grill</li>
                      <li>Cook for 5 minutes on each side and season with Season salt</li>
                      <li>Serve and enjoy!</li>
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

export default Burgers
