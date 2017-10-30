import React from 'react'

class Spaghetti extends React.Component {
  render() {
    return (
      <div className='col s12 m6'>
        <div className="card z-index-5">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://img.taste.com.au/ZfBKx8SH/taste/2016/11/beef-and-olive-spaghetti-bolognese-109377-1.jpeg" alt="Bowl of Spaghetti" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text left-align text-darken-4">Spaghetti<i className="material-icons right">info</i></span>
            <div className='row'>
            <div className='divider'></div>
            </div>
            <div className='row'>
            <div className='btn red waves light col s4 m4 offset-m1 offset-s1 '>Edit</div>
            <div className='btn red waves light col s4 m4 offset-m2 offset-s2'>Delete</div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Spaghetti<i className="material-icons right">close</i></span>
            <div className="divider"></div>
            <div className='container'>
              <div className='row left-align'>
                <div className='col m8 s8 offset-m2'>
                  <ul>
                    <li>Pasta Sauce</li>
                    <li>Oregeno</li>
                    <li>Basil</li>
                    <li>Olive Oil</li>
                    <li>Garlic</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Noodles</li>
                  </ul>
                </div>

              </div>
              <div className='divider'></div>
                <div className='row left-align'>
                  <div className='col m12 s12'>
                    <ol>
                      <li>Bring 5 QTs of Water to boil</li>
                      <li>Drizzle Olive Oil in to water.</li>
                      <li>Empty Pasta sauce in to a pot and simmer</li>
                      <li>Add Salt, Pepper, Garlic, Basil, and Oregano to taste </li>
                      <li>Add noodles and boil until al-dente</li>
                      <li>Strain noodles</li>
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

export default Spaghetti
