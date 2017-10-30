import React from 'react'

class NewYorkStrip extends React.Component {
  render() {
    return (
      <div className='col s12 m6'>
        <div className="card z-index-5">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://www.majesticstarcasino.com/wp-content/uploads/2016/10/May.jpg" alt="New York Strip Steak"/>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text left-align text-darken-4">New York Strip<i className="material-icons right">info</i></span>
            <div className='row'>
            <div className='divider'></div>
            </div>
            <div className='row'>
            <div className='btn red waves light col s4 m4 offset-m1 offset-s1 '>Edit</div>
            <div className='btn red waves light col s4 m4 offset-m2 offset-s2'>Delete</div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">New York Strip<i className="material-icons right">close</i></span>
            <div className="divider"></div>
            <div className='container'>
              <div className='row left-align'>
                <div className='col m8 s8 offset-m2'>
                  <ul>
                    <li>New York Stip Steak</li>
                    <li>Rosemary</li>
                    <li>Butter</li>
                    <li>Olive Oil</li>
                    <li>Garlic</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                  </ul>
                </div>

              </div>
              <div className='divider'></div>
                <div className='row left-align'>
                  <div className='col m12 s12'>
                    <ol>
                      <li>Let Steak get to Room Temperature.</li>
                      <li>Drizzle each side with Olive Oil.</li>
                      <li>Add a heavy layer of Salt and Pepper to each side</li>
                      <li>Sear on High heat for 3 minutes on each side</li>
                      <li>Once both sides are seared then render the fat on the side of steak.</li>
                      <li>Add 2Tbsp of butter to pan</li>
                      <li>Baste the steak with butter for 3-4 minutes</li>
                      <li>Pull from pan and let rest for 5 minutes</li>
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

export default NewYorkStrip
