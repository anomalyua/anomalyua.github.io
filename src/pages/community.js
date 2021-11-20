import * as React from 'react';

import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { AchievementsColumn } from '../components/AchievementsColumn';
import {BotsPlatformImageTile, LinkShadedImage} from "../components/EnglishNowCTA";

const GalleryContainer = styled.ul`
  padding: 50px 0;
  
  li {
    margin: 14px;
  }
  
  img {
    width: 200px;
    height: 200px;
  }
`;

const Gallery = () => (
  <GalleryContainer className="sppb-gallery clearfix gallery-item-">
    <li>
      <a href="images/img_0912.jpg" className="sppb-gallery-btn">
        <img className="sppb-img-responsive" src="/images/img_0912.jpg" alt="Gallery Item 1" />
      </a>
    </li>
    <li>
      <a href="images/shooterscreenshot-0-30-09-21.png" className="sppb-gallery-btn">
        <img className="sppb-img-responsive" src="/images/shooterscreenshot-0-30-09-21.png" alt="Gallery Item 1" />
      </a>
    </li>
    <li>
      <a href="images/shooterscreenshot-1-30-09-21.png" className="sppb-gallery-btn">
        <img className="sppb-img-responsive" src="/images/shooterscreenshot-1-30-09-21.png" alt="Gallery Item 1" />
      </a>
    </li>
    <li>
      <a href="images/img_1604.jpg" className="sppb-gallery-btn">
        <img className="sppb-img-responsive" src="/images/img_1604.jpg" alt="Gallery Item 1" />
      </a>
    </li>
    <li>
      <a href="images/img_3249.jpg" className="sppb-gallery-btn">
        <img className="sppb-img-responsive" src="/images/img_3249.jpg" alt="Gallery Item 1" />
      </a>
    </li>
  </GalleryContainer>
);

export default () => (
  <Layout>

    <div>
      <section id="sp-section-3"><div className="row"><div id="sp-title" className="col-lg-12 "><div className="sp-column "><div className="sp-page-title" style={{ backgroundImage: 'url(/images/IMG_0835.jpg)' }}><div className="container" /></div></div></div></div></section>
      <section id="sp-main-body">
        <div className="row">
          <main id="sp-component" className="col-lg-12 " role="main">
            <div className="sp-column ">
              <div id="system-message-container" />
              <div id="sp-page-builder" className="sp-page-builder  page-47">
                <div className="page-content">
                  <section id="section-id-1633000411922" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <AchievementsColumn>
                          <div id="column-id-1633000411918" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411925" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411925" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fas fa-praying-hands" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">E-democracy</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AchievementsColumn>
                        <AchievementsColumn>
                          <div id="column-id-1633000411919" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411930" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411930" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fab fa-facebook-messenger" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">Social Support</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AchievementsColumn>
                        <AchievementsColumn>
                          <div id="column-id-1633000411920" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411935" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411935" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fas fa-house-damage" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">Housing Authority</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AchievementsColumn>
                        <AchievementsColumn>
                          <div id="column-id-1633000411936" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411941" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411941" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <div className="sppb-icon"><span className="sppb-icon-container" aria-label><i className="fab fa-connectdevelop" aria-hidden="true" /></span></div>
                                      <div className="sppb-media-content"><div className="sppb-addon-text">Developing community activism</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AchievementsColumn>
                        <AchievementsColumn>
                          <div id="column-id-1633000411936" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411941" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411941" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-feature  ">
                                    <div className="sppb-addon-content sppb-text-center">
                                      <img src="/images/xXs0zBb.png" style={{ /*! width: '40px', */height: '36px' }} />
                                      <div className="sppb-media-content"><div className="sppb-addon-text">Anti-Narc</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AchievementsColumn>
                      </div>
                    </div>
                  </section>
                  <section id="section-id-1633000411947" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-5" id="column-wrap-id-1633000411933"><div id="column-id-1633000411933" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1633000411936" className="sppb-addon-wrapper"><div id="sppb-addon-1633000411936" className="clearfix "><div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="/images/img_0912.jpg" alt="Image" title /></div></div></div></div></div></div></div></div>
                        <div className="sppb-col-md-7" id="column-wrap-id-1633000411935">
                          <div id="column-id-1633000411935" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411934" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411934" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-text-block  ">
                                    <div className="sppb-addon-content">
                                      <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;It seems everyday that there's a new narcotics telegram channel graffitied around the neighborhood. We totally get it! To combat this, Anomaly organised local teams to clean up their neighborhoods. Want to know how? Click the box below (can be a highlight of this bot's success compared to the MVS) we work together with our eco team while we are cleaning up the neighborhoods we show people how to reduce drug use in their communities; reference the \&quot;broken window theory\&quot; how cleaner neighborhoods can help to reduce drug use (focus is on the drug issues and community activism development then e democracy meaning showing the locations how to more easily communicate with local admin., city workers, police, and politicians &quot;}" data-sheets-userformat="{&quot;2&quot;:833,&quot;3&quot;:{&quot;1&quot;:0},&quot;9&quot;:1,&quot;11&quot;:4,&quot;12&quot;:0}">
                                        It
                                        seems everyday that there's a new narcotics telegram channel graffitied
                                        around the neighborhood. We totally get it! To combat this, Anomaly
                                        organised local teams to clean up their neighborhoods. Want to know how?
                                        Click the box below (can be a highlight of this bot's success compared
                                        to the MVS) we work together with our eco team while we are cleaning up
                                        the neighborhoods we show people how to reduce drug use in their
                                        communities; reference the "broken window theory" how cleaner
                                        neighborhoods can help to reduce drug use (focus is on the drug issues
                                        and community activism development then e democracy meaning showing the
                                        locations how to more easily communicate with local admin., city
                                        workers, police, and politicians
                                        {' '}
                                      </span>
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
                  <section className="sppb-section" id="section-id-1633000411947" style={{ backgroundColor: 'white' }}>
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-7" id="column-wrap-id-1633000411935"><div id="column-id-1633000411935" className="sppb-column"><div className="sppb-column-addons" style={{ /*! display: 'flex', *//*! verticalAlign: 'middle', */marginTop: 'auto', marginBottom: 'auto' }}><div id="sppb-addon-wrapper-1633000411934" className="sppb-addon-wrapper" style={{ display: 'inline' }}><div id="sppb-addon-1633000411934" className="clearfix "><div className="sppb-addon sppb-addon-text-block  "><div className="sppb-addon-content"><span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;It seems everyday that there's a new narcotics telegram channel graffitied around the neighborhood. We totally get it! To combat this, Anomaly organised local teams to clean up their neighborhoods. Want to know how? Click the box below (can be a highlight of this bot's success compared to the MVS) we work together with our eco team while we are cleaning up the neighborhoods we show people how to reduce drug use in their communities; reference the \&quot;broken window theory\&quot; how cleaner neighborhoods can help to reduce drug use (focus is on the drug issues and community activism development then e democracy meaning showing the locations how to more easily communicate with local admin., city workers, police, and politicians &quot;}" data-sheets-userformat="{&quot;2&quot;:833,&quot;3&quot;:{&quot;1&quot;:0},&quot;9&quot;:1,&quot;11&quot;:4,&quot;12&quot;:0}">We make it easy for Kyivans to improve their communities with just their thumbs and an internet connection!</span></div></div></div></div></div></div></div>
                        <div className="sppb-col-md-5" id="column-wrap-id-1633000411933">
                          <div id="column-id-1633000411933" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411936" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411936" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-single-image sppb-text-center ">
                                    <div className="sppb-addon-content">
                                      <div className="sppb-addon-single-image-container">
                                        <LinkShadedImage href="https://bots.anomaly.org.ua">
                                          <BotsPlatformImageTile />
                                        </LinkShadedImage>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-5" id="column-wrap-id-1633000411933" />
                      </div>
                    </div>
                  </section>
                  <section id="section-id-1633000411953" className="sppb-section" style={{ backgroundColor: '#E3E6EC' }}>
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-12" id="column-wrap-id-1633000411952">
                          <div id="column-id-1633000411952" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633000411956" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633000411956" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-gallery ">
                                    <div className="sppb-addon-content">
                                      <Gallery />
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
                        <div className="sppb-col-md-7" id="column-wrap-id-1633812940790"><div id="column-id-1633812940790" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1633812940791" className="sppb-addon-wrapper"><div id="sppb-addon-1633812940791" className="clearfix "><div className="sppb-addon sppb-addon-header sppb-text-center"><h2 className="sppb-addon-title">Do you have an idea that would help to improve civil society in Ukraine? Let us know!</h2></div></div></div></div></div></div>
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
