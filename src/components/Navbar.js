import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" aria-current="page">Profile</a>
        </li>
      </ul>
    </div>
   </div>
</nav>

    </>
  )
}










