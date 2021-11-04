import * as React from 'react';
import { Link } from 'gatsby';

import { PhoneNumber } from './PhoneNumber';
import { NavigationHeader } from './NavigationHeader';

export const TopPageHeader = ({ onMenuOpen }) => (
  <div className="header-wrapper">
    <div className="header-wrapper">
      <div className="header-wrapper">
        <section id="sp-top-bar">
          <div className="container">
            <div className="container-inner">
              <div className="row">
                <div id="sp-top1" className="col-sm-6 col-md-6 col-lg-6 ">
                  <div className="sp-column ">
                    <ul className="sp-contact-info">
                      <li className="sp-contact-phone">
                        <PhoneNumber />
                      </li>
                      <li className="sp-contact-email">
                        <a href="mailto:info@anomaly.org.ua">info@anomaly.org.ua</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="sp-top2" className="col-sm-6 col-md-6 col-lg-6 ">
                  <div className="sp-column ">
                    <div className="sp-module ">
                      <div className="sp-module-content">
                        <div className="mod-languages">
                          <ul className="lang-inline">
                            <li dir="ltr">
                              <a href="#">
                                FR
                              </a>
                            </li>
                            <li className="lang-active" dir="ltr">
                              <Link to="/">
                                EN
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NavigationHeader
          onMenuOpen={onMenuOpen}
        />
      </div>
    </div>
  </div>
);
