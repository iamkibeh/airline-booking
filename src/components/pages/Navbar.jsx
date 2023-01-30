import React from 'react'
import Button from '../reusables/Button'
import '../../styles/navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='navbar-main-container'>
        <div className='navbar-mini-container'>
          <section className='nav-logo-section'>
            <h2>MRstudio</h2>
          </section>
          <section className='nav-links-section'>
            <nav>
              <ul className='navbar'>
                <li>
                  <a href='/'>Home</a>
                </li>{' '}
                <li>
                  <a href='/'>About</a>
                </li>{' '}
                <li>
                  <a href='/'>Type of house</a>
                </li>{' '}
                <li>
                  <a href='/'>Contact</a>
                </li>
              </ul>
            </nav>
            <div className='nav-button'>
              <Button content='Login' />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Navbar
