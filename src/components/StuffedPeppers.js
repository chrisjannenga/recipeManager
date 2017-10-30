import React from 'react'

class StuffedPeppers extends React.Component {
  render() {
    return (
      <div className='col s12 m6'>
        <div className="card z-index-5">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://i2.wp.com/paleonewbie1.objects.cdn.dream.io/wp-content/uploads/2016/09/paleo-newbie-stuffed-peppers-3-1266x850.jpg?fit=1030%2C692" alt="Stuffed Bell Peppers" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text left-align text-darken-4">Stuffed Peppers<i className="material-icons right">info</i></span>
            <div className='row'>
            <div className='divider'></div>
            </div>
            <div className='row'>
            <div className='btn red waves light col s4 m4 offset-m1 offset-s1 '>Edit</div>
            <div className='btn red waves light col s4 m4 offset-m2 offset-s2'>Delete</div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Stuffed Peppers<i className="material-icons right">close</i></span>
            <div className="divider"></div>
            <div className='container'>
              <div className='row left-align'>
                <div className='col m8 s8 offset-m2'>
                  <ul>
                    <li>Bell Peppers</li>
                    <li>Ground Beef</li>
                    <li>Onions</li>
                    <li>Rice</li>
                    <li>Cheese</li>
                    <li>Tomato Sauce</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                  </ul>
                </div>

              </div>
              <div className='divider'></div>
                <div className='row left-align'>
                  <div className='col m12 s12'>
                    <ol>
                      <li>Cut off tops of Bell Peppers</li>
                      <li>Clean out Seeds</li>
                      <li>Cook and Brown Ground Beef </li>
                      <li>Add in diced onions and pre-cooked White rice</li>
                      <li>Top with cheese</li>
                      <li>Cover with sauce</li>
                      <li>Bake in oven at 350 for 10-12 minutes</li>
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

export default StuffedPeppers
