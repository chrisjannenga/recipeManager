import React from 'react'

import AddRecipeForm from './AddRecipeForm'
import NewRecipeNav from './NewRecipeNav'

class AddPage extends React.Component {
  render () {
    return (
      <div>
        <NewRecipeNav />
        <AddRecipeForm />
      </div>
    )
  }
}

export default AddPage
