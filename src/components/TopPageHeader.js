import * as React from 'react';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { useMatch } from '@gatsbyjs/reach-router';
import anomalyLogo from '../images/anomaly-logo-01.svg';

const NavigationLink = (props) => {
  const active = useMatch(props.to) !== null;

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
  );
};

const ProjectsLink = styled.a.attrs((props) => ({
  children: 'Projects',
  href: '#',
}))`
  &::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\\f107";
    float: right;
    margin-left: 7px;
  }
`;

const Header = ({ onMenuOpen }) => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      setSticky(window.pageYOffset !== 0);
    };
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <header id="sp-header" className={classnames(isSticky && 'header-sticky')}>
      <div className="container">
        <div className="container-inner">
          <div className="row" style={{ position: 'relative' }}>
            <div id="sp-menu1" className="col-2 col-sm-2 col-md-2 col-lg-5 " style={{ position: 'static' }}>
              <div className="sp-column ">
                <nav className="sp-megamenu-wrapper" role="navigation">
                  <a id="offcanvas-toggler" aria-label="Navigation" className="offcanvas-toggler-left d-block d-lg-none" href="#" onClick={onMenuOpen}>
                    <div className="icon-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                  <ul className="sp-megamenu-parent menu-animation-fade-up d-none d-lg-block">
                    <li className="sp-menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <NavigationLink to="/about">About</NavigationLink>
                    <li className="sp-menu-item sp-has-child">
                      <ProjectsLink />
                      <div className="sp-dropdown sp-dropdown-main sp-menu-right" style={{ width: '240px' }}>
                        <div className="sp-dropdown-inner">
                  <ul className="sp-dropdown-items">
            <NavigationLink to="/veterans">Veterans</NavigationLink>
            <NavigationLink to="/kids">Kids</NavigationLink>
            <NavigationLink to="/animals">Animals</NavigationLink>
            <li className="sp-menu-item"><a href="https://anomalyua.github.io/Eco.html">Eco</a></li>
            <li className="sp-menu-item"><a href="https://anomalyua.github.io/Diaspora.html">Diaspora</a></li>
            <li className="sp-menu-item"><a href="https://anomalyua.github.io/Community.html">Community</a></li>
            <li className="sp-menu-item"><a href="https://anomalyua.github.io/Education.html">Education</a></li>
          </ul>
                </div>
                      </div>
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
            <div id="sp-menu2" className="col-lg-5 d-none d-sm-none d-md-none d-lg-block" style={{ position: 'static' }}><div className="sp-column "><nav className="sp-megamenu-wrapper" role="navigation"><ul className="sp-megamenu-parent menu-animation-fade-up d-none d-lg-block"><li className="sp-menu-item"><a href="https://anomalyua.github.io/Contact.html">Contact</a></li></ul></nav></div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const TopPageHeader = ({ onMenuOpen }) => (
  <div className="header-wrapper">
    <div className="header-wrapper">
      <div className="header-wrapper">
        <section id="sp-top-bar">
          <div className="container">
            <div className="container-inner">
              <div className="row">
                <div id="sp-top1" className="col-sm-6 col-md-6 col-lg-6 ">
<div className="sp-column "><ul className="sp-contact-info">
<li className="sp-contact-phone"><a href="tel:+18886003456">+1 (888)-600-3456</a></li><li className="sp-contact-email"><a href="mailto:info@wane.com">info@wane.com</a></li></ul></div>
</div>
                <div id="sp-top2" className="col-sm-6 col-md-6 col-lg-6 ">
  <div className="sp-column ">
<div className="sp-module "><div className="sp-module-content"><div className="mod-languages">
      <ul className="lang-inline">
        <li dir="ltr">
          <a href="http://anomaly.planet-it.com.ua/index.php/fr/">
            FR						</a>
        </li>
        <li dir="rtl">
          <a href="http://anomaly.planet-it.com.ua/index.php/ar/">
            AR						</a>
        </li>
        <li className="lang-active" dir="ltr">
          <a href="https://anomalyua.github.io/index.html">
            EN						</a>
        </li>
      </ul>
    </div>
    </div></div>
</div>
</div>
              </div>
            </div>
          </div>
        </section>
        <Header
          onMenuOpen={onMenuOpen}
        />
      </div>
    </div>
  </div>
);
