import React from 'react'


class DashboardNavWelcome extends React.Component {
  render() {
    return (
        <nav className="z-index-5">
          <div className="nav-wrapper red">
            <ul className="left">
              <li><a href="/cards"><i className="material-icons medium">home</i></a></li>
            </ul>
            <a href="/cards" className="brand-logo light center">Welcome</a>
            <ul className="right">
              <li><a href="/addRecipe"><i className="material-icons medium">add</i></a></li>
            </ul>
          </div>
        </nav>
    )
  }
}

export default DashboardNavWelcome
