import classnames from 'classnames';
import * as React from 'react';
import { useState } from 'react';

import '../styles/animate.css';
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
import { Link } from 'gatsby';
import { TopPageHeader } from './TopPageHeader';
import { PhoneNumber } from './PhoneNumber';

const OffCanvasMenu = ({ onClose }) => (
  <>
    <div className="offcanvas-overlay" />
    <div className="offcanvas-menu">
      <a
        href="#"
        className="close-offcanvas"
        onClick={onClose}
      >
        <span className="fa fa-remove" />
      </a>
      <div className="offcanvas-inner">
        <div className="sp-module ">
          <div className="sp-module-content">
            <ul className="menu">
              <li className="item-294"><Link to="/">Home</Link></li>
              <li className="item-297">
                <Link to="/about">
                  About
                </Link>
              </li>
              <li className="item-298 menu-divider menu-deeper menu-parent">
                <Link to="/veterans">Veterans</Link>
              </li>
              <li>
                <Link to="/kids">Kids</Link>
              </li>
              <li>
                <Link to="/animals">Animals</Link>
              </li>
              <li>
                <Link to="/eco">Eco</Link>
              </li>
              <li>
                <Link to="/diaspora">Diaspora</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);

// markup
export const Layout = ({ title, children }) => {
  const [offCanvasVisible, showOffCanvas] = useState(false);

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
            <section id="sp-bottom-top">
              <div className="container">
                <div className="container-inner">
                  <div className="row">
                    <div id="sp-bottom-top1" className="col-lg-2 ">
                      <div className="sp-column ">
                        <div className="sp-module ">
                          <div className="sp-module-content">
                            <div className="mod-sppagebuilder  sp-page-builder" data-module_id={102}>
                              <div className="page-content">
                                <div id="section-id-1542891648216" className="sppb-section">
                                  <div className="sppb-row-overlay" />
                                  <div className="sppb-container-inner">
                                    <div className="sppb-row">
                                      <div className="sppb-col-md-12" id="column-wrap-id-1542891648215">
                                        <div id="column-id-1542891648215" className="sppb-column">
                                          <div className="sppb-column-addons">
                                            <div id="sppb-addon-wrapper-1542891648219" className="sppb-addon-wrapper">
                                              <div id="sppb-addon-1542891648219" className="clearfix ">
                                                <div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="images/logo.png" alt="Image" /></div></div></div>
                                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '#sppb-addon-wrapper-1542891648219 {\nmargin:0 0 30px 0;}\n#sppb-addon-1542891648219 {\n\tbox-shadow: 0 0 0 0 #ffffff;\n}\n@media (min-width: 768px) and (max-width: 991px) {#sppb-addon-1542891648219 {}#sppb-addon-wrapper-1542891648219 {margin-top: 0;margin-right: 0;margin-bottom: 20px;margin-left: 0;}}@media (max-width: 767px) {#sppb-addon-1542891648219 {}#sppb-addon-wrapper-1542891648219 {margin-top: 0;margin-right: 0;margin-bottom: 10px;margin-left: 0;}}' }} />
                                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '#sppb-addon-1542891648219 img{height:40px;}@media (min-width: 768px) and (max-width: 991px) {#sppb-addon-1542891648219 img{}}@media (max-width: 767px) {#sppb-addon-1542891648219 img{}}' }} />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '.sp-page-builder .page-content #section-id-1542957017160{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542957017159{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542891648216{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542891648215{box-shadow:0 0 0 0 #fff;}' }} />
                                {' '}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="sp-bottom-top2" className="col-lg-8 ">
                      <div className="sp-column ">
                        <div className="sp-module ">
                          <div className="sp-module-content">
                            <ul className="menu">
                              <li className="item-169">
                                <Link to="/">Home</Link>
                              </li>
                              <li className="item-171">
                                <Link to="/about">About</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="sp-bottom-top3" className="col-lg-2 ">
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="sp-bottom">
              <div className="container">
                <div className="container-inner">
                  <div className="row">
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
                                                  <h2 className="sppb-addon-title">Address</h2>
                                                  <div className="sppb-addon-content">
                                                    Velyka Vasylkivska st, 72, office 20,
                                                    <br />
                                                    Ukraine, 03150, Kyiv
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
                                                  <h2 className="sppb-addon-title">Talk to us</h2>
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
                    <div id="sp-bottom4" className="col-lg-2 ">
                      <div className="sp-column ">
                        <div className="sp-module ">
                          <div className="sp-module-content">
                            <div className="mod-sppagebuilder  sp-page-builder" data-module_id={108}>
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
                                                  <h2 className="sppb-addon-title">Support</h2>
                                                  <div className="sppb-addon-content">
                                                    <a href="#">Need Any Help</a>
                                                    <br />
                                                    <a href="#">Contact Us</a>
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
                                <style type="text/css" dangerouslySetInnerHTML={{ __html: '.sp-page-builder .page-content #section-id-1542957017160{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542957017159{box-shadow:0 0 0 0 #fff;}.sp-page-builder .page-content #section-id-1542892443681{padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#column-id-1542892443680{box-shadow:0 0 0 0 #fff;}' }} />
                                {' '}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
