//for react function based components -->rfc then enter
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  //in functions props should be readonly-->cant modify it from here.
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>

        </ul>

      </div>
    </nav>
  )
}
//proptypes is used for specifying the propTypes of the props so that there is no mistake 
Navbar.propTypes = {
  //ieRequired means the title has to be given :may it be passsed from the components or default props-->cant be left undefined as will give error
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
// Specifies the default values for props:
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};
