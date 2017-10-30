import React from 'react'

class AddRecipeForm extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col s12 m12">
            <div className="card">
              <div className="card-content container">
                <span className="card-title"></span>
                  <div className="row">
                  <form className="col s12 m12">
                    <div className="row">
                      <div className="input-field col s12 m12">
                        <input id="recipe_name" type="text" className="validate" />
                        <label for="recipe_name">Recipe Name</label>
                      </div>
                      <div className="input-field col s12 m12">
                        <input id="recipe_image" type="text" className="validate" />
                        <label for="recipe_image">Image URL</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s8 m8">
                        <input id="ingredients" type="text" className="validate" />
                        <label for="ingredients">Ingredients</label>
                      </div>
                      <div className="col s4 m4">
                        <a className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col s12 m12'>
                        <ul className="collection with-header">
                          <li className="collection-header light"><h4 className='light'>Ingredients</h4></li>
                          <li className="collection-item">Add Ingredients...</li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s8 m8">
                        <input id="steps" type="text" className="validate" />
                        <label for="steps">Steps</label>
                      </div>
                      <div className="col s4 m4">
                        <a className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                      </div>
                      <div className='col s12 m12'>
                        <ul className="collection with-header">
                          <li className="collection-header"><h4 className='light'>Steps</h4></li>
                          <li className="collection-item">Add Steps...</li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card-action">
                <div className="btn-large waves light red">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddRecipeForm
