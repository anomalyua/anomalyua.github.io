import {LocalizedProvider, useLocales} from 'react-localized';
import styled from 'styled-components';

import classnames from 'classnames';
import * as React from 'react';
import { useState } from 'react';

import '../styles/sppagebuilder.css';
import '../styles/sppagecontainer.css';
import '../styles/css_003.css';
import '../styles/css_005.css';
import '../styles/magnific-popup.css';
import '../styles/css_004.css';
import '../styles/css_002.css';
import '../styles/css.css';
import '../styles/bootstrap.css';
import '../fa5/css/all.css';
import '../styles/font-awesome.css';
import '../styles/template_002.css';
import '../styles/preset1.css';

import '../styles/template.css';

import '../styles/global.css';
import { useLocation } from '@reach/router';
import { TopPageHeader } from './TopPageHeader';
import { PhoneNumber } from './PhoneNumber';

import logoImage from '../images/logo.png';
import { BotUnderConstruction } from './BotUnderConstruction';
import {useLocaleContext} from "./LocaleContext";
import {LocalizedLink} from "./LocalizedLink";
import {EnglishUnderConstruction} from "./EnglishUnderConstruction";

const OffCanvasMenu = ({ onClose }) => {
  const {gettext} = useLocales()

  return (
    <>
      <div className="offcanvas-overlay"/>
      <div className="offcanvas-menu">
        <a
          href="#"
          className="close-offcanvas"
          onClick={onClose}
        >
          <span className="fa fa-remove"/>
        </a>
        <div className="offcanvas-inner">
          <div className="sp-module ">
            <div className="sp-module-content">
              <ul className="menu">
                <li className="item-294">
                  <LocalizedLink to="/">{gettext('Home')}</LocalizedLink>
                </li>
                <li className="item-297">
                  <LocalizedLink to="/about">
                    {gettext('About')}
                  </LocalizedLink>
                </li>
                <li className="item-298 menu-divider menu-deeper menu-parent">
                  <LocalizedLink to="/projects/veterans">{gettext('Veterans')}</LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/projects/eco">{gettext('Ecology')}</LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/projects/education">{gettext('Education')}</LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/projects/community">{gettext('Community')}</LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/projects/kids">{gettext('Kids')}</LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/projects/animals">{gettext('Animals')}</LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/projects/diaspora">{gettext('Diaspora')}</LocalizedLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SocialIconsContainer = styled('div')`
  float: right;
  font-size: 18px;
`;

const LogoContainer = styled('div')`
  padding: 32px;
  padding-right: 96px;
`;

// markup
const LayoutInternal = ({ title, children }) => {
  const {gettext} = useLocales()
  const [offCanvasVisible, showOffCanvas] = useState(false);

  const { hostname } = useLocation();

  console.log('h', hostname)

  if (hostname === 'bots.anomaly.org.ua') {
    return <BotUnderConstruction />;
  } else if (hostname === 'englishnow.dav.school') {
    return <EnglishUnderConstruction />
  }

  return (
    <main className={classnames(offCanvasVisible && ['offcanvas-active', 'offcanvs-position-left'])}>
      <title>{title}</title>

      <div>
        <div className="body-wrapper">
          <div className="body-innerwrapper">
            <TopPageHeader onMenuOpen={() => { showOffCanvas(true); }} />
            <section id="sp-section-3"><div className="row"><div id="sp-title" className="col-lg-12 "><div className="sp-column " /></div></div></section>
            <section id="sp-main-body">
              <div className="row">
                <main id="sp-component" className="col-lg-12 " role="main">
                  <div className="sp-column ">
                    <div id="system-message-container" />
                    <div id="sp-page-builder" className="sp-page-builder   home-page page-1">
                      <div className="page-content">
                        {children}
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </section>
            <section id="sp-bottom">
              <div className="container">
                <div className="container-inner">
                  <div className="row">
                    <LogoContainer>
                      <img
                        className="sppb-img-responsive"
                        src={logoImage}
                        style={{ height: '40px' }}
                      />
                    </LogoContainer>
                    <div id="sp-bottom1" className="col-sm-col-sm-6 col-lg-4 ">
                      <div className="sp-column ">
                        <div className="sp-module ">
                          <div className="sp-module-content">
                            <div className="mod-sppagebuilder  sp-page-builder" data-module_id={104}>
                              <div className="page-content">
                                <div id="section-id-1542892443681" className="sppb-section">
                                  <div className="sppb-row-overlay" />
                                  <div className="sppb-container-inner">
                                    <div className="sppb-row">
                                      <div className="sppb-col-md-12" id="column-wrap-id-1542892443680">
                                        <div id="column-id-1542892443680" className="sppb-column">
                                          <div className="sppb-column-addons">
                                            <div id="sppb-addon-wrapper-1542892443684" className="sppb-addon-wrapper">
                                              <div id="sppb-addon-1542892443684" className="clearfix ">
                                                <div className="sppb-addon sppb-addon-text-block sppb-text-left ">
                                                  <h2 className="sppb-addon-title">{gettext('Address')}</h2>
                                                  <div className="sppb-addon-content">
                                                    {gettext('Velyka Vasylkivska st, 72, office 20, Ukraine, 03150, Kyiv')}
                                                  </div>
                                                </div>
                                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '#sppb-addon-wrapper-1542892443684 {\nmargin:0 0 30px 0;}\n#sppb-addon-1542892443684 {\n\tcolor: #545561;\n\tbox-shadow: 0 0 0 0 #ffffff;\n}\n#sppb-addon-1542892443684 .sppb-addon-title {\nmargin-bottom:15px;color:rgba(255, 255, 255, 0.6);font-size:16px;line-height:26px;font-weight: 600;}\n@media (min-width: 768px) and (max-width: 991px) {#sppb-addon-1542892443684 {}#sppb-addon-wrapper-1542892443684 {margin-top: 0;margin-right: 0;margin-bottom: 20px;margin-left: 0;}}@media (max-width: 767px) {#sppb-addon-1542892443684 {}#sppb-addon-wrapper-1542892443684 {margin-top: 0;margin-right: 0;margin-bottom: 10px;margin-left: 0;}}#sppb-addon-1542892443684 .sppb-addon-title { font-family: "Poppins"; }\n#sppb-addon-1542892443684 .sppb-addon-content { font-family: "Poppins"; }\n' }} />
                                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '#sppb-addon-1542892443684{ font-size: 14px;font-weight: 300;line-height: 23px; }@media (min-width: 768px) and (max-width: 991px) {}@media (max-width: 767px) {}' }} />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '.sp-page-builder .page-content #section-id-1542957017160{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542957017159{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}' }} />
                                {' '}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="sp-bottom2" className="col-sm-col-sm-6 col-lg-3 ">
                      <div className="sp-column ">
                        <div className="sp-module ">
                          <div className="sp-module-content">
                            <div className="mod-sppagebuilder  sp-page-builder" data-module_id={105}>
                              <div className="page-content">
                                <div id="section-id-1542892443681" className="sppb-section">
                                  <div className="sppb-row-overlay" />
                                  <div className="sppb-container-inner">
                                    <div className="sppb-row">
                                      <div className="sppb-col-md-12" id="column-wrap-id-1542892443680">
                                        <div id="column-id-1542892443680" className="sppb-column">
                                          <div className="sppb-column-addons">
                                            <div id="sppb-addon-wrapper-1542892443684" className="sppb-addon-wrapper">
                                              <div id="sppb-addon-1542892443684" className="clearfix ">
                                                <div className="sppb-addon sppb-addon-text-block sppb-text-left ">
                                                  <h2 className="sppb-addon-title">
                                                    {gettext('Contact us')}
                                                  </h2>
                                                  <div className="sppb-addon-content">
                                                    <PhoneNumber />
                                                  </div>
                                                </div>
                                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '#sppb-addon-wrapper-1542892443684 {\nmargin:0 0 30px 0;}\n#sppb-addon-1542892443684 {\n\tcolor: #545561;\n\tbox-shadow: 0 0 0 0 #ffffff;\n}\n#sppb-addon-1542892443684 .sppb-addon-title {\nmargin-bottom:15px;color:rgba(255, 255, 255, 0.6);font-size:16px;line-height:26px;font-weight: 600;}\n@media (min-width: 768px) and (max-width: 991px) {#sppb-addon-1542892443684 {}#sppb-addon-wrapper-1542892443684 {margin-top: 0;margin-right: 0;margin-bottom: 20px;margin-left: 0;}}@media (max-width: 767px) {#sppb-addon-1542892443684 {}#sppb-addon-wrapper-1542892443684 {margin-top: 0;margin-right: 0;margin-bottom: 10px;margin-left: 0;}}#sppb-addon-1542892443684 .sppb-addon-title { font-family: "Poppins"; }\n#sppb-addon-1542892443684 .sppb-addon-content { font-family: "Poppins"; }\n' }} />
                                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '#sppb-addon-1542892443684{ font-size: 14px;font-weight: 300;line-height: 23px; }@media (min-width: 768px) and (max-width: 991px) {}@media (max-width: 767px) {}' }} />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '.sp-page-builder .page-content #section-id-1542957017160{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542957017159{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}' }} />
                                {' '}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SocialIconsContainer id="sp-bottom-top3" className="col-lg-2 ">
                      <div className="sp-column ">
                        <ul className="social-icons">
                          <li className="social-icon-facebook">
                            <a target="_blank" href="https://www.facebook.com/anomaly.ua" aria-label="facebook" rel="noreferrer">
                              <span className="fa fa-facebook" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="social-icon-instagram">
                            <a target="_blank" href="https://www.instagram.com/anomaly.ua" aria-label="Instagram" rel="noreferrer">
                              <span className="fa fa-instagram" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </SocialIconsContainer>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <OffCanvasMenu
          onClose={() => {
            showOffCanvas(false);
          }}
        />
        {/* Go to top */}
      </div>
    </main>
  );
};

const en = () => import('../locales/en.js').then(data => data.default)
const ua = () => import('../locales/uk.js').then(data => data.default)
const es = () => import('../locales/es.js').then(data => data.default)
const fr = () => import('../locales/fr.js').then(data => data.default)
const de = () => import('../locales/de.js').then(data => data.default)
const sv = () => import('../locales/sv.js').then(data => data.default)

const locales = { es, en, ua, fr, de, sv }

export const Layout = (props) => {
  const { locale } = useLocaleContext()

  return (
    <LocalizedProvider
      locales={locales}
      selected={locale}
    >
      {
        ({localeReady}) => (
          localeReady ?
            (<LayoutInternal {...props} />)
            : null
        )
      }
    </LocalizedProvider>
  );
};
