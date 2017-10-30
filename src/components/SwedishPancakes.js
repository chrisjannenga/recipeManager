import React from 'react'

class SwedishPancakes extends React.Component {
  render() {
    return (
      <div className='col s12 m6'>
        <div className="card z-index-5">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://1.bp.blogspot.com/_Lhw9tVnn1As/TPUGBNRSJII/AAAAAAAACPs/fiuKzfG73mA/s1600/sp7W.jpg" alt="Swedish Pancakes" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text left-align text-darken-4">Swedish Pancakes<i className="material-icons right">info</i></span>
            <div className='row'>
            <div className='divider'></div>
            </div>
            <div className='row'>
            <div className='btn red waves light col s4 m4 offset-m1 offset-s1 '>Edit</div>
            <div className='btn red waves light col s4 m4 offset-m2 offset-s2'>Delete</div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Swedish Pancakes<i className="material-icons right">close</i></span>
            <div className="divider"></div>
            <div className='container'>
              <div className='row left-align'>
                <div className='col m8 s8 offset-m2'>
                  <ul>
                    <li>Flour</li>
                    <li>Eggs</li>
                    <li>Milk</li>
                    <li>Sugar</li>
                    <li>Cinnamon</li>
                    <li>Lingon Berries</li>
                    <li>Heavy Cream</li>
                  </ul>
                </div>

              </div>
              <div className='divider'></div>
                <div className='row left-align'>
                  <div className='col m12 s12'>
                    <ol>
                      <li>Combine milk eggs and flour</li>
                      <li>Add batter to hot pan</li>
                      <li>Cook until you see bubbles then flip </li>
                      <li>Add berries and sugar to pot</li>
                      <li>Blend berries for Jam</li>
                      <li>Add Jam to Pancakes </li>
                      <li>Roll pancakes up</li>
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

export default SwedishPancakes
