import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import imageFooter from '../../../../../../static/weknow-logo-white.png'

const Footer = ({ showCta, copyContent }) => (
  <footer className="cell c-footer grid-y">
    {!showCta ? null : (
      <div className="cell c-footer__top auto u-push-top--inside--3x u-push-bottom--inside--3x">
      </div>
    )}
    <div className="cell c-footer__bottom auto u-push-top--inside--3x u-push-bottom--inside--3x">
      <div className="cell grid-x align-center-middle">
        <div className="cell medium-12 align-center-middle grid-x u-push-bottom--2x">
        </div>
        <p className="cell medium-12 align-center-middle grid-x u-small-text c-footer__copy">
          {copyContent}
        </p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  showCta: PropTypes.bool,
  copyContent: PropTypes.string,
}

Footer.defaultProps = {
  showCta: false,
  copyContent: '',
}
export default Footer
