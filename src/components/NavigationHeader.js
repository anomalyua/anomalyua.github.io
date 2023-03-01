import { useEffect, useState } from 'react'
import classnames from 'classnames'
import { LocalizedLink as Link } from './LocalizedLink'
import * as React from 'react'
import styled from 'styled-components'
import anomalyLogo from '../images/anomaly-logo-01.svg'

import { Button } from './Button'
import { useLocation, useMatch } from '@reach/router'
import { useLocales } from 'react-localized'
import SubscribeWidget from './SubscribeWidget';

const useLocalizedMatch = (url) => (
  useMatch(url) || useMatch(`/:locale${url}`)
)

const NavigationLink = (props) => {
  const url = props.to
  const match = useLocalizedMatch(url) !== null
  const { pathname } = useLocation()
  const active = url === '/' && pathname !== '/' ? false : match

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

const ProjectsNavigationDropdown = () => {
  const { gettext } = useLocales()
  const active = useLocalizedMatch('/projects') ||
    useLocalizedMatch('/projects/veterans') ||
    useLocalizedMatch('/projects/kids') ||
    useLocalizedMatch('/projects/animals') ||
    useLocalizedMatch('/projects/eco') ||
    useLocalizedMatch('/projects/diaspora') ||
    useLocalizedMatch('/projects/community') ||
    useLocalizedMatch('/projects/education')

  return (
    <li className={classnames('sp-menu-item', 'sp-has-child', active && 'active')}>
      <Link to="/projects" >{gettext('Projects')}</Link>
      <div className="sp-dropdown sp-dropdown-main sp-menu-right" style={{ width: '240px' }}>
        <div className="sp-dropdown-inner">
          <ul className="sp-dropdown-items">
            <NavigationLink to="/projects/veterans">{gettext('Veterans')}</NavigationLink>
            <NavigationLink to="/projects/eco">{gettext('Ecology')}</NavigationLink>
            <NavigationLink to="/projects/education">{gettext('Education')}</NavigationLink>
            <NavigationLink to="/projects/community">{gettext('Community')}</NavigationLink>
            <NavigationLink to="/projects/kids">{gettext('Kids')}</NavigationLink>
            <NavigationLink to="/projects/animals">{gettext('Animals')}</NavigationLink>
            <NavigationLink to="/projects/diaspora">{gettext('Diaspora')}</NavigationLink>
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
  // subscribe widget block
  const [showSubscribeWidget, toggleSubscribeWidget] = useState(false);
  const openSubscribeModal = () => {
    toggleSubscribeWidget(true);
  }
  const closeSubscribeModal = () => {
    toggleSubscribeWidget(false);
  }
  // end subscribe widget block

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
                    <NavigationLink to="/">{gettext('Home')}</NavigationLink>
                    <ProjectsNavigationDropdown />
                    <NavigationLink to="/about">{gettext('About')}</NavigationLink>
                    <li className="sp-menu-item">
                      <a href="https://periwinkle-guavaberry-93b.notion.site/Chronicles-of-the-war-in-Ukraine-08e23f6ebab24d829aa625443b587452" target="_blank" rel="noopener norefferer">{gettext('Archive')}</a>
                    </li>
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
              <Button
                onClick={openSubscribeModal}
                href={'javascript:void(0)'}
                text={gettext('Subscribe')}
              />
              <Button
                href={'https://docs.google.com/forms/d/1ej1Xvk976p8y73Ns_IOBsAfH-jS5w_sBvDXjexYIYTA'}
                text={gettext('Become a Volunteer')}
              />
              <Button
                href={'#'}
                text={gettext('Donate')}
              />
            </ButtonContainer>
          </div>
          <SubscribeWidget
            show={showSubscribeWidget}
            closeCallback={closeSubscribeModal}
          />
        </div>
      </div>
    </header>
  )
}
