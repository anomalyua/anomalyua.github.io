import classnames from 'classnames'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import * as React from 'react'

import { Layout } from '../components/Layout'

const PageTitle = styled.div`
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #121330;
    opacity: 0.8;
    z-index: -1;
  }

  display: flex;
  object-fit: cover;
  justify-content: center;
  background-color: #a67c00;
  position: relative;
  z-index: 1;
  background-position: center center !important;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 121px;
`

const Tabs = () => {
  const locationHash = useLocation().hash

  const firstActive = (locationHash === '#sppb-tab1-1') || (locationHash === '')
  const secondActive = (locationHash === '#sppb-tab1-2')
  const thirdActive = (locationHash === '#sppb-tab1-3')
  const fourthActive = (locationHash === '#sppb-tab1-4')
  const fifthActive = (locationHash === '#sppb-tab1-5')

  return (
    <>
      <ul className="sppb-nav sppb-nav-tabs" role="tablist">
        <li className={classnames(firstActive && 'active')}>
          <a data-toggle="sppb-tab" id="#sppb-content1-1" className=" " href="#sppb-tab1-1" role="tab" aria-controls="#sppb-tab1-1" aria-selected="true">Children of ATO Veterans</a>
        </li>
        <li className={secondActive && 'active'}>
          <a data-toggle="sppb-tab" id="#sppb-content1-2" className=" " href="#sppb-tab1-2" role="tab" aria-controls="#sppb-tab1-2" aria-selected="false">Children of Crimea and Tatars</a>
        </li>
        <li className={thirdActive && 'active'}>
          <a data-toggle="sppb-tab" id="#sppb-content1-3" className=" " href="#sppb-tab1-3" role="tab" aria-controls="#sppb-tab1-3" aria-selected="false">Children of Donbas</a>
        </li>
        <li className={fourthActive && 'active'}>
          <a data-toggle="sppb-tab" className=" " role="tab" aria-selected="false" id="#sppb-content1-4" aria-controls="#sppb-tab1-4" href="#sppb-tab1-4">Orphans</a>
        </li>
        <li className={fifthActive && 'active'}>
          <a data-toggle="sppb-tab" className=" " role="tab" aria-selected="false" id="#sppb-content1-5" href="#sppb-tab1-5" aria-controls="#sppb-tab1-5">Playgrounds</a>
        </li>
      </ul>

      <div className="sppb-tab-content sppb-tab-tabs-content">
        <div
          className={
          classnames('sppb-tab-pane', 'sppb-fade', firstActive && ['active', 'in'])
        }
          role="tabpanel"
          aria-labelledby="sppb-content1-1"
        >
          <div id="sppb-addon-wrapper-1633859757" className="sppb-addon-wrapper">
            <div id="sppb-addon-1633859757" className="clearfix ">
              <div className="sppb-addon sppb-addon-text-block  ">
                <div className="sppb-row-container">
                  <div className="sppb-row">
                    <div className="sppb-col-md-9" id="column-wrap-id-1626727883298">
                      <div id="column-id-1626727883298" className="sppb-column">
                        <div className="sppb-column-addons">
                          <div id="sppb-addon-wrapper-1626727883303" className="sppb-addon-wrapper">
                            <div id="sppb-addon-1626727883303" className="clearfix ">
                              <div className="sppb-addon sppb-addon-text-block  ">
                                <div className="sppb-addon-content">
                                  <span style={{ fontSize: '16pt' }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Every heard of the saying \&quot;it takes a village to raise a child\&quot;? It's true! Help kids who have family members in the military by joining our mentorship program.&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">
                                    Every
                                    heard of the saying "it takes a village to raise a child"? It's true!
                                    Help kids who have family members in the military by joining our
                                    mentorship program.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sppb-col-md-3" id="column-wrap-id-1626727883299"><div id="column-id-1626727883299" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1626727883306" className="sppb-addon-wrapper"><div id="sppb-addon-1626727883306" className="clearfix "><div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="/images/img_2379.jpg" alt="Image" /></div></div></div></div></div></div></div></div>
                  </div>
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
                <div className="sppb-row-container">
                  <div className="sppb-row">
                    <div className="sppb-col-md-3" id="column-wrap-id-1626727883308"><div id="column-id-1626727883308" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1626727883309" className="sppb-addon-wrapper"><div id="sppb-addon-1626727883309" className="clearfix "><div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="/images/anomaly95.jpeg" alt="Image" /></div></div></div></div></div></div></div></div>
                    <div className="sppb-col-md-9" id="column-wrap-id-1626727883310">
                      <div id="column-id-1626727883310" className="sppb-column">
                        <div className="sppb-column-addons">
                          <div id="sppb-addon-wrapper-1626727883311" className="sppb-addon-wrapper">
                            <div id="sppb-addon-1626727883311" className="clearfix ">
                              <div className="sppb-addon sppb-addon-text-block  ">
                                <div className="sppb-addon-content">
                                  <span style={{ fontSize: '16pt' }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Everyday Crimean Tartar families are being separated by Russian forces. Imagine losing your father at such a young age. It's all very confusing but mentoring can help!&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">
                                    Everyday
                                    Crimean Tartar families are being separated by Russian forces. Imagine
                                    losing your father at such a young age. It's all very confusing but
                                    mentoring can help!
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
                <div className="sppb-row-container">
                  <div className="sppb-row">
                    <div className="sppb-col-md-9" id="column-wrap-id-1626727883319">
                      <div id="column-id-1626727883319" className="sppb-column">
                        <div className="sppb-column-addons">
                          <div id="sppb-addon-wrapper-1626727883320" className="sppb-addon-wrapper">
                            <div id="sppb-addon-1626727883320" className="clearfix ">
                              <div className="sppb-addon sppb-addon-text-block  ">
                                <div className="sppb-addon-content">
                                  <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;With the war in Eastern Ukraine continuing on, children and families are being separated and forced to leave their homes. &quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">
                                    <span style={{ fontSize: '16pt' }}>With the war in Eastern Ukraine continuing on, children and families are being separated and forced to leave their homes.</span>
                                    {' '}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sppb-col-md-3" id="column-wrap-id-1626727883321"><div id="column-id-1626727883321" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1626727883322" className="sppb-addon-wrapper"><div id="sppb-addon-1626727883322" className="clearfix "><div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="/images/anomaly92.jpeg" alt="Image" /></div></div></div></div></div></div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
          classnames('sppb-tab-pane', 'sppb-fade', fourthActive && ['active', 'in'])
        }
          role="tabpanel"
          aria-labelledby="sppb-content1-3"
        >
          <div id="sppb-addon-wrapper-1633859758766" className="sppb-addon-wrapper">
            <div id="sppb-addon-1633859758766" className="clearfix ">
              <div className="sppb-addon sppb-addon-text-block  ">
                <div className="sppb-row-container">
                  <div className="sppb-row">
                    <div className="sppb-col-md-3" id="column-wrap-id-1626727883328"><div id="column-id-1626727883328" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1626727883329" className="sppb-addon-wrapper"><div id="sppb-addon-1626727883329" className="clearfix "><div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="/images/anomaly8.jpeg" alt="Image" /></div></div></div></div></div></div></div></div>
                    <div className="sppb-col-md-9" id="column-wrap-id-1626727883330">
                      <div id="column-id-1626727883330" className="sppb-column">
                        <div className="sppb-column-addons">
                          <div id="sppb-addon-wrapper-1626727883331" className="sppb-addon-wrapper">
                            <div id="sppb-addon-1626727883331" className="clearfix ">
                              <div className="sppb-addon sppb-addon-text-block  ">
                                <div className="sppb-addon-content">
                                  <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Help advocate for better living situtations in orphanges. &quot;}" data-sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:{&quot;1&quot;:0},&quot;12&quot;:0}">
                                    <span style={{ fontSize: '16pt' }}>Help advocate for better living situtations in orphanges.</span>
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
              </div>
            </div>
          </div>
        </div>
        <div
          className={
          classnames('sppb-tab-pane', 'sppb-fade', fifthActive && ['active', 'in'])
        }
          role="tabpanel"
          aria-labelledby="sppb-content1-3"
        >
          <div id="sppb-addon-wrapper-1633859758766" className="sppb-addon-wrapper">
            <div id="sppb-addon-1633859758766" className="clearfix ">
              <div className="sppb-addon sppb-addon-text-block  ">
                <div className="sppb-row-container">
                  <div className="sppb-row">
                    <div className="sppb-col-md-9" id="column-wrap-id-1626727883337"><div id="column-id-1626727883337" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1626727883338" className="sppb-addon-wrapper"><div id="sppb-addon-1626727883338" className="clearfix "><div className="sppb-addon sppb-addon-text-block  "><div className="sppb-addon-content"><span style={{ fontSize: '16pt' }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;We collect funds and build playgrounds at schools in low SES areas. Here is a picture of school 205 in Kyiv.&quot;}" data-sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:{&quot;1&quot;:0},&quot;12&quot;:0}">We collect funds and build playgrounds at schools in low SES areas. Here is a picture of school 205 in Kyiv.</span></div></div></div></div></div></div></div>
                    <div className="sppb-col-md-3" id="column-wrap-id-1626727883339"><div id="column-id-1626727883339" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1626727883340" className="sppb-addon-wrapper"><div id="sppb-addon-1626727883340" className="clearfix "><div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="/images/2021-06-13-17.jpg" alt="Image" /></div></div></div></div></div></div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

const Kids = () => (
  <Layout
    title="Kids"
  >
    <section id="sp-section-3">
      <div className="row">
        <div id="sp-title" className="col-lg-12 ">
          <div className="sp-column " style={{}}>
            <PageTitle>
              <div>
                <img
                  src="/images/shooterscreenshot-1-30-09-21.png"
                  style={{ /*! position: 'absolute', *//*! top: 0, */opacity: '0.6', /*! marginLeft: 'auto', */flex: 'auto', /*! height: '50%', *//*! flexShrink: '0.5', */objectFit: 'cover', width: '434px', height: '290px', objectPosition: '0 -25px' }}
                />
                <div />
              </div>
            </PageTitle>
          </div>
        </div>
      </div>
    </section>
    <section id="sp-main-body">
      <div className="row">
        <main id="sp-component" className="col-lg-12 " role="main">
          <div className="sp-column ">
            <div id="system-message-container" />
            <div id="sp-page-builder" className="sp-page-builder  page-34">
              <div className="page-content">
                <section id="section-id-1626727883291" className="sppb-section">
                  <div className="sppb-row-container">
                    <div className="sppb-row">
                      <div className="sppb-col-md-3" id="column-wrap-id-1626727883289"><div id="column-id-1626727883289" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1626727883294" className="sppb-addon-wrapper"><div id="sppb-addon-1626727883294" className="clearfix "><div className="sppb-addon sppb-addon-single-image sppb-text-center "><div className="sppb-addon-content"><div className="sppb-addon-single-image-container"><img className="sppb-img-responsive" src="/images/anomaly3.jpeg" alt="Image" /></div></div></div></div></div></div></div></div>
                      <div className="sppb-col-md-9" id="column-wrap-id-1626727883290"><div id="column-id-1626727883290" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1626727883297" className="sppb-addon-wrapper"><div id="sppb-addon-1626727883297" className="clearfix "><div className="sppb-addon sppb-addon-text-block  "><div className="sppb-addon-content"><span style={{ fontSize: '16pt' }} data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Anomaly helps adovcate the rights of children and promote better living quality for vulnerable children.&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">Anomaly helps adovcate the rights of children and promote better living quality for vulnerable children.</span></div></div></div></div></div></div></div>
                    </div>
                  </div>
                </section>
                <section id="section-id-1633859758724" className="sppb-section" style={{ backgroundColor: '#E3E6EC', paddingTop: '50px', paddingBottom: '50px' }}>
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
                <section id="section-id-1633809247498" className="sppb-section secondary-color sppb-section-content-center">
                  <div className="sppb-row-overlay" />
                  <div className="sppb-row-container">
                    <div className="sppb-row sppb-align-center">
                      <div className="sppb-col-md-7" id="column-wrap-id-1633809247519"><div id="column-id-1633809247519" className="sppb-column"><div className="sppb-column-addons"><div id="sppb-addon-wrapper-1633809247520" className="sppb-addon-wrapper"><div id="sppb-addon-1633809247520" className="clearfix "><div className="sppb-addon sppb-addon-header sppb-text-center"><h2 className="sppb-addon-title">Have experience working with kids? Come show us!</h2></div></div></div></div></div></div>
                      <div className="sppb-col-md-5" id="column-wrap-id-1633809247521">
                        <div id="column-id-1633809247521" className="sppb-column">
                          <div className="sppb-column-addons">
                            <div id="sppb-addon-wrapper-1633809247522" className="sppb-addon-wrapper">
                              <div id="sppb-addon-1633809247522" className="clearfix sppb-positioned-addon" data-rowid={1633809247498} data-colid={1633809247521}>
                                <div className="sppb-text-center">
                                  <a id="btn-1633809247522" className="sppb-btn  sppb-btn-default sppb-btn-rounded">
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
  </Layout>
)

export default Kids
