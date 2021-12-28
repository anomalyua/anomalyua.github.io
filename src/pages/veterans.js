import * as React from 'react'

import { Layout } from '../components/Layout'
import { TopTitleText } from '../components/TopTitleText'
import { useLocales } from 'react-localized'
import { AchievementsColumn } from '../components/AchievementsColumn'
import styled from 'styled-components'

const OurValueImage = styled('img')`
  padding-bottom: 4px;
  height: 36px;
`

const VeteransContent = () => {
  const { gettext } = useLocales()

  return (
    <>
      <section id="sp-section-3">
        <div className="row">
          <div id="sp-title" className="col-lg-12 ">
            <div className="sp-column ">
              <div className="sp-page-title" style={{ backgroundImage: 'url(/images/vet_3.jpg)' }}>
                <div className="container">
                  <TopTitleText>
                    {gettext('Veterans')}
                  </TopTitleText>
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
              <div id="system-message-container"/>
              <div id="sp-page-builder" className="sp-page-builder  page-33">
                <div className="page-content">
                  <section id="section-id-1626723958894" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row" style={{ justifyContent: 'space-evenly' }}>
                        <AchievementsColumn>
                          <OurValueImage src={'/images/03.png'} />
                          <div>
                            {gettext('3500+ veterans in our community')}
                          </div>
                        </AchievementsColumn>
                        <AchievementsColumn>
                          <OurValueImage src={'/images/02.png'} />
                          <div>
                            {gettext('1000+ veteran care specialists (psychological, medical, social services)')}
                          </div>
                        </AchievementsColumn>
                        <AchievementsColumn>
                          <OurValueImage src={'/images/06.png'} />
                          <div>
                            {gettext('Supported by multiple nations')}
                          </div>
                        </AchievementsColumn>
                        <div className="sppb-col-md-5" style={{ paddingTop: '20px' }}>
                          <div id="column-id-1626723958892" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1626723958897" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1626723958897" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-single-image sppb-text-center ">
                                    <div className="sppb-addon-content">
                                      <div className="sppb-addon-single-image-container">
                                        <img
                                        className="sppb-img-responsive" src="/images/photo_2021-10-19_00-35-14.jpg"
                                        alt="Image"/>
                                      </div>
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
                  <section id="section-id-1626723958916" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-7" id="column-wrap-id-1626723958914">
                          <div id="column-id-1626723958914" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1626723958919" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1626723958919" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-text-block  ">
                                    <div className="sppb-addon-content">
                                      <span style={{ fontSize: '16pt' }}
                                            data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Drinkin' Bros is an international veterans organization and we run the Ukrainian chapter. Come grab a drink with us! We offer a cool environment to meet with other veterns like yourself. Don't drink? It's okay - have something non-alcoholic! :) The important thing that we don't drink alone!&quot;}"
                                            data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}"
                                            data-sheets-textstyleruns="{&quot;1&quot;:0}[null,270,{&quot;6&quot;:1}]">
                                        <p>
                                        {gettext('Drinkin\' Bros is an international veterans organization and we run the Ukrainian chapter.')}
                                        </p>
                                        <p>
                                        {gettext('Come grab a drink with us! We offer a cool environment to meet with other veterns like yourself.')}
                                        </p>
                                        <p>
                                        {gettext('Don\'t drink? It\'s okay - have something non-alcoholic! :) The important thing that we don\'t drink alone!')}
                                        </p>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-5" id="column-wrap-id-1626723958915">
                          <div id="column-id-1626723958915" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1626723958922" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1626723958922" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-single-image sppb-text-center ">
                                    <div className="sppb-addon-content">
                                      <div className="sppb-addon-single-image-container"><img
                                        className="sppb-img-responsive" src="/images/img_8743.jpg" alt="Image"/></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{ /*! flex: 'auto', *//*! flexGrow: 3, *//*! flex: '14%', *//*! paddingLeft: '100px', *//*! margin: '', *//*! flexBasis: '50%', */
                          flexGrow: 1
                        }}>
                          <div style={{ /*! margin: 'auto', */
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center'
                          }}><a href="https://www.facebook.com/groups/149496945605480/"><img
                            src="/images/Drinkin-bros.png" style={{ width: '300px' /*! margin: 'auto' */ }}/></a></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="section-id-1626726032080" className="sppb-section">
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-5" id="column-wrap-id-1626726032081">
                          <div id="column-id-1626726032081" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1626726032082" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1626726032082" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-single-image sppb-text-center ">
                                    <div className="sppb-addon-content">
                                      <div className="sppb-addon-single-image-container"><img
                                        className="sppb-img-responsive" src="/images/img_8297.jpg" alt="Image"/></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-7" id="column-wrap-id-1626726032083">
                          <div id="column-id-1626726032083" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1626726032085" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1626726032085" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-text-block  ">
                                    <div className="sppb-addon-content">
                                      <span style={{ fontSize: '16pt' }}
                                            data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;We also help to connect vets with caretakers, social workers, and psychological support. We have organized a network of 1000+ veteran care specialists from all over the country to help assist veterans with their transition to civilian life and recovery after returning from war. &quot;}"
                                            data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">
                                        <p>
                                        {gettext('We also help to connect vets with caretakers, social workers, and psychological support.')}
                                        </p>
                                        <p>
                                          {gettext('We have organized a network of 1000+ veteran care specialists from all ' +
                                            'over the country to help assist veterans with their transition to ' +
                                            'civilian life and recovery after returning from war.')}
                                        </p>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div/>
                        </div>
                        <div style={{ /*! flex: 'auto', *//*! flexGrow: 3, *//*! flex: '14%', *//*! paddingLeft: '100px', *//*! margin: '', *//*! flexBasis: '50%', */
                          flexGrow: 1
                        }}>
                          <div style={{ /*! margin: 'auto', */
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center'
                          }}><a href="https://www.facebook.com/caretogetherukraine"><img
                            src="/images/CareTogetherUkraine-01.svg"
                            style={{ /*! width: '241px', *//*! margin: 'auto', */height: '170px' }}/></a></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="section-id-1633808655233"
                           className="sppb-section secondary-color sppb-section-content-center">
                    <div className="sppb-row-overlay"/>
                    <div className="sppb-row-container">
                      <div className="sppb-row sppb-align-center">
                        <div className="sppb-col-md-7" id="column-wrap-id-1633808655254">
                          <div id="column-id-1633808655254" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633808655255" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633808655255" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-header sppb-text-center"><h2
                                    className="sppb-addon-title">
                                    {gettext('Are you or a loved one a veteran who would like to help ' +
                                      'make Ukraine a better place? If so, join our volunteer team today!')}
                                  </h2></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-5" id="column-wrap-id-1633808655256">
                          <div id="column-id-1633808655256" className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1633808655257" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1633808655257" className="clearfix sppb-positioned-addon"
                                     data-rowid={1633808655233} data-colid={1633808655256}>
                                  <div className="sppb-text-center">
                                    <a id="btn-1633808655257" className="sppb-btn  sppb-btn-default sppb-btn-rounded">
                                      Join
                                      <i className="fas fa-arrow-right" aria-hidden="true"/>
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
    </>
  )
}

const Veterans = () => {
  return (
    <Layout
      title="Veterans"
    >
      <VeteransContent />
    </Layout>
  )
}

export default Veterans
