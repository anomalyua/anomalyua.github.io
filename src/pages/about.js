import * as React from 'react';

import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { TopTitleText } from '../components/TopTitleText';
import { AchievementsColumn } from '../components/AchievementsColumn';

const AchievementsBlock = styled('section')`
  display: flex;
  justify-content: center;
  padding: 50px 120px;

  @media (min-width: 768px) {
    min-width: 750px;
  }

  @media (min-width: 992px) {
    min-width: 970px;
  }

  @media (min-width: 1200px) {
    min-width: 1170px;
  }
`;

const GraySection = styled('section')`
  background-color: #e3e6ec;
`;

const About = () => (
  <Layout
    title="About"
  >
    <section id="sp-section-3">
      <div className="row">
        <div id="sp-title" className="col-lg-12 ">
          <div className="sp-column ">
            <div className="sp-page-title" style={{ backgroundImage: 'url(../images/IMG_1408.jpg)' }}>
              <div className="container">
                <TopTitleText>About Us</TopTitleText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AchievementsBlock>
      <AchievementsColumn>
        Competency
      </AchievementsColumn>
      <AchievementsColumn>
        Integrity
      </AchievementsColumn>
      <AchievementsColumn>
        Sustainability
      </AchievementsColumn>
      <AchievementsColumn>
        Growth
      </AchievementsColumn>
      <AchievementsColumn>
        Creativity
      </AchievementsColumn>
    </AchievementsBlock>
    <GraySection id="section-id-1542711300771" className="sppb-section sppb-section-content-center">
      <div className="sppb-row-overlay" />
      <div className="sppb-row-container">
        <div className="sppb-row sppb-align-center">
          <div className="sppb-col-md-4" id="column-wrap-id-1542711300769">
            <div id="column-id-1542711300769" className="sppb-column">
              <div className="sppb-column-addons">
                <div id="sppb-addon-wrapper-1542712445474" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1542712445474" className="clearfix ">
                    <div className="sppb-addon sppb-addon-person sppb-text-center  non-box-shadow person-content-position-bottom-left">
                      <div className="sppb-addon-content">
                        <div className="sppb-person-image ">
                          <img className="sppb-img-responsive" src="/images/2018/11/21/person.jpg" alt="David Plaster" />
                          <div className="person-content-show-on-hover"><div className="person-content-hover-content-wrap" /></div>
                        </div>
                        <div className="sppb-person-information">
                          <span className="sppb-person-name">David Plaster</span>
                          <span className="sppb-person-designation">Founder &amp; Chairman</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sppb-col-md-8" id="column-wrap-id-1542711300770">
            <div id="column-id-1542711300770" className="sppb-column">
              <div className="sppb-column-addons">
                <div id="sppb-addon-wrapper-1542712137722" className="sppb-addon-wrapper"><div id="sppb-addon-1542712137722" className="clearfix "><div className="sppb-addon sppb-addon-header  text-color-op6 sppb-text-left"><h2 className="sppb-addon-title">Welcome</h2></div></div></div>
                <div id="sppb-addon-wrapper-1542715936446" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1542715936446" className="clearfix ">
                    <div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-left">
                      <h3 className="sppb-addon-title">
                        Our founder
                      </h3>
                    </div>
                  </div>
                </div>
                <div id="sppb-addon-wrapper-1542711301041" className="sppb-addon-wrapper"><div id="sppb-addon-1542711301041" className="clearfix "><div className="sppb-addon-divider-wrap divider-position"><div className="sppb-divider sppb-divider-border link-color-opt3" /></div></div></div>
                <div id="sppb-addon-wrapper-1542712190422" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1542712190422" className="clearfix ">
                    <div className="sppb-addon sppb-addon-text-block  ">
                      <div className="sppb-addon-content">
                        David's favorite way to describe himself is as a "mere pensioner." After retiring from his career as a US Army medic, David came to Ukraine in 2011 and shortly thereafter decided to build a life here. He served with other volunteers as a combat medic both on the Maidan and at the front in Donbas, and he has been working to make Ukraine a better place in every way he can ever since. He founded Anomaly as an organizational vehicle for that vision on Maidan December 1st, 2013 and officially in 2016 as a Ukrainian NGO.
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sppb-addon-wrapper-1542715936472" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1542715936472" className="clearfix ">
                    <div className="sppb-addon-divider-wrap divider-position">
                      <div className="sppb-divider sppb-divider-border link-color-opt3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GraySection>
    <section id="sp-main-body">
      <div className="row">
        <main id="sp-component" className="col-lg-12 " role="main">
          <div className="sp-column ">
            <div id="system-message-container" />
            <div id="sp-page-builder" className="sp-page-builder  page-46">
              <div className="page-content">
                <section id="section-id-1632999046152" className="sppb-section">
                  <div className="sppb-row-overlay" />
                  <div className="sppb-row-container">
                    <div className="sppb-row">
                      <div className="sppb-col-md-8" id="column-wrap-id-1632999046172">
                        <div id="column-id-1632999046172" className="sppb-column">
                          <div className="sppb-column-addons">
                            <div id="sppb-addon-wrapper-1626723958919" className="sppb-addon-wrapper">
                              <div id="sppb-addon-1626723958919" className="clearfix ">
                                <div className="sppb-addon sppb-addon-text-block  ">
                                  <div className="sppb-addon-content">
                                    <span style={{ fontSize: '18pt' }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Ukraine has a large diaspora population which has made homes all over the world, especially in Canada, the United States, and Poland. Since the Revolution of Dignity in 2014, many diaspora have felt called to make a difference. {Bulleted list of Diaspora helping news stories/projects etc. Possibly with images depending on site layout] &quot;}" data-sheets-userformat="{&quot;2&quot;:963,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:65280},&quot;9&quot;:1,&quot;10&quot;:1,&quot;11&quot;:4,&quot;12&quot;:0}">
                                      Volunteering opportunities in Ukraine
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sppb-col-md-4" id="column-wrap-id-1632999046167">
                        <div id="column-id-1632999046167" className="sppb-column">
                          <div className="sppb-column-addons">
                            <div id="sppb-addon-wrapper-1632999046169" className="sppb-addon-wrapper">
                              <div id="sppb-addon-1632999046169" className="clearfix ">
                                <div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-left">
                                  <a href="https://docs.google.com/forms/d/1_yowD4a9LvNRWtkL5SSOeoqfosjVcoVVHViIgF3MkLM/edit?usp=sharing">
                                    <h3 className="sppb-addon-title">CTA placeholder</h3>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div id="sppb-addon-wrapper-1632999046170" className="sppb-addon-wrapper"><div id="sppb-addon-1632999046170" className="clearfix "><div className="sppb-addon-divider-wrap divider-position"><div className="sppb-divider sppb-divider-border link-color-opt3" /></div></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}

              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  </Layout>
);

export default About;
