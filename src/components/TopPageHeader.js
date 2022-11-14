import * as React from 'react'

import { PhoneNumber } from './PhoneNumber'
import { NavigationHeader } from './NavigationHeader'

import { LanguageSwitcher } from './LanguageSwitcher'

export const TopPageHeader = ({ onMenuOpen }) => (
  <div className="header-wrapper">
    <div className="header-wrapper">
      <div className="header-wrapper">
        <section id="sp-top-bar">
          <div className="container">
            <div className="container-inner">
              <div className="row">
                <div id="sp-top1" className="col-sm-7 col-md-7 col-lg-7">
                  <div className="sp-column ">
                    <ul className="sp-contact-info">
                      <li>
                        <PhoneNumber />
                      </li>
                      <li>
                        <a href="mailto:info@anomaly.org.ua">info@anomaly.org.ua</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="sp-top2" className="col-sm-5 col-md-5 col-lg-5 ">
                  <div className="sp-column ">
                    <div className="sp-module ">
                      <div className="sp-module-content">
                        <LanguageSwitcher />
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
)
