import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './style.scss'
import Button from '@weknow/gatsby-theme-drupal-boina/src/components/atoms/button'

const Header = ({ scrolled, isMobile, showSidebar, darkMenu }) => (
  <div className="grid-x align-middle c-header">
    {!scrolled && isMobile ? (
      <div className="c-header__normal cell grid-container align-right grid-x">
        <div className="cell grid-x small-12 medium-9 large-7 xlarge-6 xxlarge-6 align-right grid-x">
          <div
            className={`cell small-3 medium-2 grid-x align-center ${
              darkMenu ? 'c-header__menu--dark' : ''
            }`}
          >
            <Link className="c-header__menu-link" to="/">
              Home
            </Link>
          </div>
          <div
            className={`cell small-3 medium-2 grid-x align-center ${
              darkMenu ? 'c-header__menu--dark' : ''
            }`}
          >
            <Link className="c-header__menu-link" to="/about">
              About me
            </Link>
          </div>
          <div
            className={`cell small-6 medium-4 grid-x align-center ${
              darkMenu ? 'c-header__menu--dark' : ''
            }`}
          >
            <a
              className="c-header__menu-link c-header__menu-link--cta"
              href="mailto:jmolivas@octahedroid.com"
              rel="noopener noreferrer"
            >
              Contact me via email
            </a>
          </div>
        </div>
      </div>
    ) : (
      <div className="c-header__scrolled grid-x align-middle">
        <div className="cell grid-container grid-x align-middle">
          <div className="cell auto grid-x align-middle align-right">
            <Button link onClick={showSidebar}>
              <svg
                className="c-header__menu-handler"
                viewBox="261.53900146484375 145.27000427246094 97.40499877929688 75.30599975585938"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsbx="https://boxy-svg.com"
              >
                <path d="M 271.21 166.04 C 258.537 165.855 257.814 145.297 272.052 145.27 L 349.238 145.27 C 362.366 145.219 361.991 166.536 349.238 166.601 L 271.21 166.04 Z" />
                <path
                  d="M 271.327 193.058 C 258.236 193.153 258.175 172.32 271.962 172.288 L 333.333 172.288 C 346.511 172.231 346.796 193.547 333.368 193.619 L 271.327 193.058 Z"
                  transform="matrix(0.999998, 0.00207, -0.00207, 0.999998, 0.376693, -0.688812)"
                  bxorigin="0.873 0.438"
                />
                <path
                  d="M 270.629 219.998 C 258.692 220.37 258.234 199.264 271.105 199.228 L 317.107 199.228 C 329.316 199.168 328.571 220.486 317.133 220.559 L 270.629 219.998 Z"
                  transform="matrix(0.999998, 0.00207, -0.00207, 0.999998, 0.432427, -0.657421)"
                  bxorigin="0.873 0.438"
                />
              </svg>
              <span>menu</span>
            </Button>
          </div>
        </div>
      </div>
    )}
  </div>
)

Header.propTypes = {
  scrolled: PropTypes.bool,
  showSidebar: PropTypes.func,
  darkMenu: PropTypes.bool,
  isMobile: PropTypes.bool,
}

Header.defaultProps = {
  scrolled: false,
  showSidebar: null,
  darkMenu: false,
  isMobile: false,
}

export default Header
