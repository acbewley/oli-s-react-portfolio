import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#5b7444" }}>
      <div className="container-fluid" style={{ backgroundColor: "#5b7444" }}>
        <a className="navbar-brand" style={{ color: 'white' }}>Oliver Bewley</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/" style={{ color: 'white' }}>Home</a>
            <a className="nav-link" href="/projects" style={{ color: 'white' }}>Projects</a>
            <a className="nav-link" href="/contact" style={{ color: 'white' }}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;