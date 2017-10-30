import React from 'react'

class Tacos extends React.Component {
  render() {
    return (
      <div className='col s12 m6'>
        <div className="card z-index-5">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://ediblerhody.ediblecommunities.com/sites/default/files/images/recipe/tallulahs-carne-asada-tacos.jpg" alt='Tacos on a plate' />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text left-align text-darken-4">Tacos<i className="material-icons right">info</i></span>
            <div className='row'>
            <div className='divider'></div>
            </div>
            <div className='row'>
            <div className='btn red waves light col s4 m4 offset-m1 offset-s1 '>Edit</div>
            <div className='btn red waves light col s4 m4 offset-m2 offset-s2'>Delete</div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Tacos<i className="material-icons right">close</i></span>
            <div className="divider"></div>
            <div className='container'>
              <div className='row left-align'>
                <div className='col m8 s8 offset-m2'>
                  <ul>
                    <li>Carne Asada</li>
                    <li>Corn Tortillas</li>
                    <li>Onion</li>
                    <li>Cilantro</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                  </ul>
                </div>

              </div>
              <div className='divider'></div>
                <div className='row left-align'>
                  <div className='col m12 s12'>
                    <ol>
                      <li>Grill Carne Asada</li>
                      <li>Prep Onions</li>
                      <li>Prep Cilantro</li>
                      <li>Lay out Corn Tortillas</li>
                      <li>Layer Carne Asada</li>
                      <li>Then Onions</li>
                      <li>Lastly, Cilantro</li>
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

export default Tacos
