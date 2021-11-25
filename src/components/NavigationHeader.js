import { useEffect, useState } from 'react'
import classnames from 'classnames'
import { LocalizedLink as Link } from './LocalizedLink'
import * as React from 'react'
import styled from 'styled-components'
import anomalyLogo from '../images/anomaly-logo-01.svg'

import { BecomeAVolunteerButton as Button } from './BecomeAVolunteer'
import { useMatch } from '@reach/router'
import { useLocales } from 'react-localized'

const useLocalizedMatch = (url) => (
  useMatch(url) || useMatch(`/:locale${url}`)
)

const NavigationLink = (props) => {
  const active = useLocalizedMatch(props.to) !== null

  return (
    <li
      className={
        classnames('sp-menu-item', active && ['active', 'current-item'])
      }
    >
      <Link
        {...props}
      />
    </li>
  )
}

const ProjectsLinkTitle = () => {
  const { gettext } = useLocales()

  return gettext('Projects')
}

const ProjectsLink = styled.a.attrs(() => ({
  children: <ProjectsLinkTitle />,
  href: '#'
}))`
  &::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\\f107";
    float: right;
    margin-left: 7px;
  }
`

const ProjectsNavigationDropdown = () => {
  const { gettext } = useLocales()
  const active = useLocalizedMatch('/veterans') ||
    useLocalizedMatch('/kids') ||
    useLocalizedMatch('/animals') ||
    useLocalizedMatch('/eco') ||
    useLocalizedMatch('/diaspora') ||
    useLocalizedMatch('/community') ||
    useLocalizedMatch('/education')

  return (
    <li className={classnames('sp-menu-item', 'sp-has-child', active && 'active')}>
      <ProjectsLink />
      <div className="sp-dropdown sp-dropdown-main sp-menu-right" style={{ width: '240px' }}>
        <div className="sp-dropdown-inner">
          <ul className="sp-dropdown-items">
            <NavigationLink to="/veterans">{gettext('Veterans')}</NavigationLink>
            <NavigationLink to="/eco">{gettext('Ecology')}</NavigationLink>
            <NavigationLink to="/education">{gettext('Education')}</NavigationLink>
            <NavigationLink to="/community">{gettext('Community')}</NavigationLink>
            <NavigationLink to="/kids">{gettext('Kids')}</NavigationLink>
            <NavigationLink to="/animals">{gettext('Animals')}</NavigationLink>
            <NavigationLink to="/diaspora">{gettext('Diaspora')}</NavigationLink>
          </ul>
        </div>
      </div>
    </li>
  )
}

const ButtonContainer = styled('div')`
  display: flex;
  align-items: center;
`

export const NavigationHeader = ({ onMenuOpen }) => {
  const { gettext } = useLocales()
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handler = () => {
      setSticky(window.pageYOffset !== 0)
    }
    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return (
    <header id="sp-header" className={classnames(isSticky && 'header-sticky')}>
      <div className="container">
        <div className="container-inner">
          <div className="row" style={{ position: 'relative' }}>
            <div id="sp-menu1" className="col-2 col-sm-2 col-md-2 col-lg-5 " style={{ position: 'static' }}>
              <div className="sp-column ">
                <nav role="navigation">
                  <a id="offcanvas-toggler" aria-label="Navigation" className="offcanvas-toggler-left d-block d-lg-none" href="#" onClick={onMenuOpen}>
                    <div className="icon-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                  <ul className="sp-megamenu-parent menu-animation-fade-up d-none d-lg-block">
                    <li className="sp-menu-item">
                      <Link to="/">{gettext('Home')}</Link>
                    </li>
                    <NavigationLink to="/about">{gettext('About')}</NavigationLink>
                    <ProjectsNavigationDropdown />
                  </ul>
                </nav>
              </div>
            </div>
            <div id="sp-logo" className="col-10 col-sm-10 col-md-10 col-lg-2 ">
              <div className="sp-column ">
                <div className="logo">
                  <Link to="/">
                    <img className="logo-image" src={anomalyLogo} alt="anomaly" />
                  </Link>
                </div>
              </div>
            </div>
            <ButtonContainer>
              <Button />
            </ButtonContainer>
          </div>
        </div>
      </div>
    </header>
  )
}
