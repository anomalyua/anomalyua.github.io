import * as React from 'react';

import classnames from 'classnames';
import { useLocation } from '@reach/router';
import { Layout } from '../components/Layout';
import { TopTitleText } from '../components/TopTitleText';
import { EnglishNowCTA } from '../components/EnglishNowCTA';

const Tabs = () => {
  const locationHash = useLocation().hash;

  const firstActive = (locationHash === '#sppb-tab1-1') || (locationHash === '');
  const secondActive = (locationHash === '#sppb-tab1-2');
  const thirdActive = (locationHash === '#sppb-tab1-3');

  return (
    <>
      <ul className="sppb-nav sppb-nav-tabs" role="tablist">
        <li className={classnames(firstActive && 'active')}>
          <a
            data-toggle="sppb-tab"
            id="#sppb-content1-1"
            className=" "
            href="#sppb-tab1-1"
            role="tab"
            aria-controls="#sppb-tab1-1"
            aria-selected="true"
          >
            <span className="sppb-tab-icon" aria-label="Leadership courses">
              <i
                className="fas fa-dove"
                aria-hidden="true"
              />
            </span>
            {' '}
            Leadership courses
            {' '}
          </a>
        </li>
        <li className={secondActive && 'active'}>
          <a
            data-toggle="sppb-tab"
            id="#sppb-content1-2"
            className=" "
            href="#sppb-tab1-2"
            role="tab"
            aria-controls="#sppb-tab1-2"
            aria-selected="false"
          >
            <span className="sppb-tab-icon" aria-label="Miltary medical training">
              <i
                className="fas fa-file-medical-alt"
                aria-hidden="true"
              />
            </span>
            {' '}
            Miltary medical training
            {' '}
          </a>
        </li>
        <li className={thirdActive && 'active'}>
          <a
            data-toggle="sppb-tab"
            id="#sppb-content1-3"
            className=" "
            href="#sppb-tab1-3"
            role="tab"
            aria-controls="#sppb-tab1-3"
            aria-selected="false"
          >
            <span className="sppb-tab-icon" aria-label="Social Media Marketing training">
              <i
                className="fas fa-share-alt"
                aria-hidden="true"
              />
            </span>
            {' '}
            Social Media Marketing training
            {' '}
          </a>
        </li>
      </ul>
      <div className="sppb-tab-content sppb-tab-tabs-content">
        <div
          className={classnames('sppb-tab-pane', 'sppb-fade', firstActive && ['active', 'in'])}
          role="tabpanel"
          aria-labelledby="sppb-content1-1"
        >
          <div id="sppb-addon-wrapper-1633859757" className="sppb-addon-wrapper">
            <div id="sppb-addon-1633859757" className="clearfix ">
              <div className="sppb-addon sppb-addon-text-block  ">
                <div className="sppb-addon-content">
                  Developed
                  leadership courses for women where they are typically underrepresented;
                  police, military, science (STEM), led by female professionals in the
                  top of their fields to share expertise and train course attendees in
                  state-of-the-science business methods and career progression skills.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
               classnames('sppb-tab-pane', 'sppb-fade', secondActive && ['active', 'in'])

             }
          role="tabpanel"
          aria-labelledby="sppb-content1-2"
        >
          <div id="sppb-addon-wrapper-1633859758765" className="sppb-addon-wrapper">
            <div id="sppb-addon-1633859758765" className="clearfix ">
              <div className="sppb-addon sppb-addon-text-block  ">
                <div className="sppb-addon-content">
                  Trained
                  over 8000 military, volunteers, and national guardsmen in NATO miltary
                  medical standards. In addition to individual training, Anomaly assisted
                  the National Guard of Ukraine in programmatic development of a
                  NATO-standard medic course, implemented on an organization-wide level.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
               classnames('sppb-tab-pane', 'sppb-fade', thirdActive && ['active', 'in'])
             }
          role="tabpanel"
          aria-labelledby="sppb-content1-3"
        >
          <div id="sppb-addon-wrapper-1633859758766" className="sppb-addon-wrapper">
            <div id="sppb-addon-1633859758766" className="clearfix ">
              <div className="sppb-addon sppb-addon-text-block  ">
                <div className="sppb-addon-content">
                  Offered
                  courses in SMM, videography, and PR communications to government
                  departments, young business entrepenuers and veterans to help them get
                  their work into the public conversation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default () => (
  <Layout>
    <div>
      <section id="sp-section-3">
        <div className="row">
          <div id="sp-title" className="col-lg-12 ">
            <div className="sp-column ">
              <div className="sp-page-title" style={{ backgroundImage: 'url(/images/IMG_0835.jpg)' }}>
                <div className="container">
                  <TopTitleText>Education</TopTitleText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sp-main-body">
        <div className="row">
          <main id="sp-component" className="col-lg-12 " role="main">
            <div className="sp-column ">
              <div id="system-message-container" />
              <div id="sp-page-builder" className="sp-page-builder  page-48">
                <div className="page-content">
                  <section id="section-id-1633000411922" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-2" id="column-wrap-id-1633000411918">
                          <div id="column-id-1633000411918" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411925" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411925" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fas fa-spell-check" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">English</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-2" id="column-wrap-id-1633000411919">
                          <div id="column-id-1633000411919" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411930" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411930" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fas fa-child" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">Crimean Tatars and IDP Children</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-2" id="column-wrap-id-1633000411920">
                          <div id="column-id-1633000411920" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411935" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411935" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fas fa-dove" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">Leadership</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-2" id="column-wrap-id-1633000411936">
                          <div id="column-id-1633000411936" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411941" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411941" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fas fa-file-medical-alt" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">Military Medicine</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-2" id="column-wrap-id-1633849194914">
                          <div id="column-id-1633849194914" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633849194918" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633849194918" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fas fa-share-alt" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">Social Media Marketing</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-2" id="column-wrap-id-1633849194915"><div id="column-id-1633849194915" className="sppb-column"><div className="sppb-column-addons" /></div></div>
                      </div>
                    </div>
                  </section>
                  <section id="section-id-1633000411947" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-7" id="column-wrap-id-1633000411933">
                          <div id="column-id-1633000411933" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411934" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411934" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-text-block  ">
                                    <div className="sppb-addon-content">
                                      20,000+
                                      members of underserved communities taught, including Ukrainian veterans
                                      and their children, IDPs, and Crimean Tatars. For children and teens,
                                      Anomaly provides and conversation clubs and civic engagement
                                      opportunities in addition to lessons. Through socially-engaged
                                      volunteering, young people learn that they can have a real impact on
                                      their neighbourhoods, cities, and country. ( add more general info);
                                      Link to English NOW (more detailed info on this page).
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-5" id="column-wrap-id-1633000411935">
                          <div id="column-id-1633000411935" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633849194938" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633849194938" className="clearfix sppb-positioned-addon" data-rowid={1633000411947} data-colid={1633000411935}>
                                  <EnglishNowCTA />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="section-id-1633849194953" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-5" id="column-wrap-id-1633849194939"><div id="column-id-1633849194939" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1633849194940" className="sppb-addon-wrapper"><div id="sppb-addon-1633849194940" className="clearfix "><div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="images/img_3318-1.jpg" alt="Image" title /></div></div></div></div></div></div></div></div>
                        <div className="sppb-col-md-7" id="column-wrap-id-1633849194941">
                          <div id="column-id-1633849194941" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633849194943" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633849194943" className="clearfix sppb-positioned-addon" data-rowid={1633849194953} data-colid={1633849194941}>
                                  <div className="sppb-addon sppb-addon-text-block  ">
                                    <div className="sppb-addon-content">
                                      <p>
                                        We
                                        organized English-language conversation and craft sessions for younger
                                        children of IDPs, ATO veterans, and Crimean Tatars in Kyiv, as well as
                                        English conversation clubs for teenaged children of those groups
                                      </p>
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
                  <section id="section-id-1633859758724" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-12" id="column-wrap-id-1633859758744">
                          <div id="column-id-1633859758744" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633859758731" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633859758731" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-tab ">
                                    <div className="sppb-addon-content sppb-tab sppb-tabs-tab sppb-tab-nav-left">
                                      <Tabs />
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
                  <section id="section-id-1633812940770" className="sppb-section secondary-color sppb-section-content-center">
                    <div className="sppb-row-overlay" />
                    <div className="sppb-row-container">
                      <div className="sppb-row sppb-align-center">
                        <div className="sppb-col-md-7" id="column-wrap-id-1633812940790"><div id="column-id-1633812940790" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1633812940791" className="sppb-addon-wrapper"><div id="sppb-addon-1633812940791" className="clearfix "><div className="sppb-addon sppb-addon-header sppb-text-center"><h2 className="sppb-addon-title">Do you have something that you want to teach to others? Come join us!</h2></div></div></div></div></div></div>
                        <div className="sppb-col-md-5" id="column-wrap-id-1633812940792">
                          <div id="column-id-1633812940792" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633812940793" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633812940793" className="clearfix sppb-positioned-addon" data-rowid={1633812940770} data-colid={1633812940792}>
                                  <div className="sppb-text-center">
                                    <a id="btn-1633812940793" className="sppb-btn  sppb-btn-default sppb-btn-rounded">
                                      Join
                                      <i className="fas fa-arrow-right" aria-hidden="true" />
                                    </a>
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
            </div>
          </main>
        </div>
      </section>
    </div>

  </Layout>
);
