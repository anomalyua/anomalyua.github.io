import * as React from 'react'

import styled from 'styled-components'
import { Layout } from '../components/Layout'
import { TopTitleText } from '../components/TopTitleText'
import { Button } from '../components/Button'
import { useLocales } from 'react-localized'

const HeroSection = styled.section.attrs({
  id: 'section-id-1542709301800'
})`
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 680px;
    background-image: linear-gradient(0deg, rgb(0 0 0 / 60%) 0%, rgb(18 19 48 / 50%) 99%);
  }
`

const IndexContent = () => {
  const { gettext } = useLocales()

  return (
    <>
      <HeroSection className="sppb-section hero-section sppb-section-content-center">
        <div className="sppb-row-overlay"/>
        <div className="sppb-row-container">
          <div className="sppb-row sppb-align-center">
            <div className="sppb-col-md-12" id="column-wrap-id-1542709301799">
              <div id="column-id-1542709301799" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1542709861050" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1542709861050" className="clearfix ">
                      <div className="sppb-addon sppb-addon-header sppb-text-left">
                        <TopTitleText>
                          {gettext('Dare to do the impossible!')}
                        </TopTitleText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      <section id="section-id-1626726032080" className="sppb-section">
        <div className="sppb-row-container">
          <div className="sppb-row">
            <div className="sppb-col-md-12" id="column-wrap-id-1620541326154">
              <div id="column-id-1620541326154" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1620541326156" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620541326156" className="clearfix ">
                      <div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-center">
                        <h3 className="sppb-addon-title">
                          {gettext('Humanitarian assistance')}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div id="sppb-addon-wrapper-1620541326157" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620541326157" className="clearfix ">
                      <div className="sppb-addon-divider-wrap divider-position">
                        <div className="sppb-divider sppb-divider-border link-color-opt3"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sppb-row">
            <div className="sppb-col-md-5" id="column-wrap-id-1626726032081">
              <div id="column-id-1626726032081" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1626726032082" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1626726032082" className="clearfix ">
                      <div className="sppb-addon sppb-addon-single-image sppb-text-center ">
                        <div className="sppb-addon-content">
                          <div className="sppb-addon-single-image-container"><img
                            className="sppb-img-responsive" src="/images/noimage.jpg" alt="Image" title/>
                          </div>
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
                          <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

      <section id="section-id-1626723958916" className="sppb-section">
        <div className="sppb-row-container">
          <div className="sppb-row">
            <div className="sppb-col-md-12" id="column-wrap-id-1620541326154">
              <div id="column-id-1620541326154" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1620541326156" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620541326156" className="clearfix ">
                      <div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-center">
                        <h3 className="sppb-addon-title">
                          {gettext('Military training and support')}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div id="sppb-addon-wrapper-1620541326157" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620541326157" className="clearfix ">
                      <div className="sppb-addon-divider-wrap divider-position">
                        <div className="sppb-divider sppb-divider-border link-color-opt3"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sppb-row">
            <div className="sppb-col-md-7" id="column-wrap-id-1626723958914">
              <div id="column-id-1626723958914" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1626723958919" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1626723958919" className="clearfix ">
                      <div className="sppb-addon sppb-addon-text-block  ">
                        <div className="sppb-addon-content">
                          <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                            className="sppb-img-responsive" src="/images/noimage.jpg" alt="Image" title/>
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

      <section id="section-id-1620586929505" className="sppb-section">
        <div className="sppb-row-overlay"/>
        <div className="sppb-row-container">
          <div className="sppb-row">
            <div className="sppb-col-md-12" id="column-wrap-id-1620586929513">
              <div id="column-id-1620586929513" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1620586929515" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929515" className="clearfix ">
                      <div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-center">
                        <h3 className="sppb-addon-title">
                          {gettext('Gallery')}
                      </h3>
                      </div>
                    </div>
                  </div>
                  <div id="sppb-addon-wrapper-1620586929512" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929512" className="clearfix ">
                      <div className="sppb-addon sppb-addon-text-block  ">
                        <div className="sppb-addon-content">
                          <div style={{ textAlign: 'center' }}><span style={{ fontWeight: 400 }}>
                            {gettext('Check out our accomplishments')}
                          </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sppb-addon-wrapper-1620586929516" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929516" className="clearfix ">
                      <div className="sppb-addon-divider-wrap divider-position">
                        <div className="sppb-divider sppb-divider-border link-color-opt3"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sppb-col-md-8 sppb-col-sm-8" id="column-wrap-id-1620586929517">
              <div id="column-id-1620586929517" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1620586929518" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929518" className="clearfix ">
                      <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                        <div className="sppb-addon-content">
                          {/* <div className="sppb-addon-single-image-container"> - shadow effect on hover */}
                          <div className="">
                            <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image"
                               data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_1464.jpeg">+</a>
                            <img className="sppb-img-responsive" src="/images/img_1464.jpeg" alt="Image"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sppb-col-md-4 sppb-col-sm-4" id="column-wrap-id-1620586929519">
              <div id="column-id-1620586929519" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1620586929520" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929520" className="clearfix ">
                      <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                        <div className="sppb-addon-content">
                          <div className="">
                            <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image"
                               data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_1355.jpg">+</a>
                            <img className="sppb-img-responsive" src="/images/img_1355.jpg" alt="Image"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sppb-addon-wrapper-1620586929521" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929521" className="clearfix ">
                      <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                        <div className="sppb-addon-content">
                          <div className="">
                            <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image"
                               data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_0835.jpeg">+</a>
                            <img className="sppb-img-responsive" src="/images/img_0835.jpeg" alt="Image"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sppb-col-md-4 sppb-col-sm-4" id="column-wrap-id-1620586929522">
              <div id="column-id-1620586929522" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1620586929530" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929530" className="clearfix ">
                      <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                        <div className="sppb-addon-content">
                          <div className="">
                            <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image"
                               data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_3256.jpeg">+</a>
                            <img className="sppb-img-responsive" src="/images/img_3256.jpeg" alt="Image"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sppb-addon-wrapper-1620586929524" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929524" className="clearfix ">
                      <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                        <div className="sppb-addon-content">
                          <div className="">
                            <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image"
                               data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_1604.jpeg">+</a>
                            <img className="sppb-img-responsive" src="/images/img_1604.jpeg" alt="Image"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sppb-col-md-4 sppb-col-sm-4" id="column-wrap-id-1620586929525">
              <div id="column-id-1620586929525" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1620586929527" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929527" className="clearfix ">
                      <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                        <div className="sppb-addon-content">
                          <div className="">
                            <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image"
                               data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_1038.jpeg">+</a>
                            <img className="sppb-img-responsive" src="/images/img_1038.jpeg" alt="Image"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sppb-col-md-4 sppb-col-sm-4" id="column-wrap-id-1620586929527">
              <div id="column-id-1620586929527" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1620586929546" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1620586929546" className="clearfix ">
                      <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                        <div className="sppb-addon-content">
                          <div className="">
                            <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image"
                               data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_0703.jpeg">+</a>
                            <img className="sppb-img-responsive" src="/images/img_0703.jpeg" alt="Image"/>
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
      <section id="section-id-1542973816360" className="sppb-section secondary-color sppb-section-content-center">
        <div className="sppb-row-overlay"/>
        <div className="sppb-row-container">
          <div className="sppb-row sppb-align-center">
            <div className="sppb-col-md-7" id="column-wrap-id-1542973816359">
              <div id="column-id-1542973816359" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1542973816366" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1542973816366" className="clearfix ">
                      <div className="sppb-addon sppb-addon-header sppb-text-right">
                        <h3 className="sppb-addon-title">
                          {gettext('Join Anomaly Today!')}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sppb-col-md-5" id="column-wrap-id-1542973816391">
              <div id="column-id-1542973816391" className="sppb-column">
                <div className="sppb-column-addons">
                  <div id="sppb-addon-wrapper-1633802035300" className="sppb-addon-wrapper">
                    <div id="sppb-addon-1633802035300" className="clearfix sppb-positioned-addon"
                         data-rowid={1542973816360} data-colid={1542973816391}>
                      <div className="sppb-text-center">
                        <Button
                          href={'https://docs.google.com/forms/d/1ej1Xvk976p8y73Ns_IOBsAfH-jS5w_sBvDXjexYIYTA'}
                          text={gettext('Become a Volunteer')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const IndexPage = () => {
  return (
    <Layout
      title="Аномалія"
    >
      <IndexContent />
    </Layout>
  )
}

export default IndexPage
