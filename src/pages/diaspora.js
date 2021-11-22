import * as React from 'react'

import { Layout } from '../components/Layout'
import { TopTitleText } from '../components/TopTitleText'
import { useLocales } from 'react-localized'

const DiasporaContent = () => {
  const { gettext } = useLocales()

  return (
    <div>
      <section id="sp-section-3">
        <div className="row">
          <div id="sp-title" className="col-lg-12 ">
            <div className="sp-column ">
              <div className="sp-page-title"
                   style={{ backgroundImage: 'url(/images/elena-mozhvilo-0xAdOCXcHn8-unsplash.jpg)' }}>
                <div className="container">
                  <TopTitleText>
                    {gettext('Diaspora')}
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
              <div id="sp-page-builder" className="sp-page-builder  page-46">
                <div className="page-content">
                  <section id="section-id-1632999046152" className="sppb-section">
                    <div className="sppb-row-overlay"/>
                    <div className="sppb-row-container">
                      <div className="sppb-row">
                        <div className="sppb-col-md-4">
                          <div className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1632999046169" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1632999046169" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-left">
                                    <h3 className="sppb-addon-title">
                                      {gettext('What is the Ukrainian Diaspora?')}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div id="sppb-addon-wrapper-1632999046170" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1632999046170" className="clearfix ">
                                  <div className="sppb-addon-divider-wrap divider-position">
                                    <div className="sppb-divider sppb-divider-border link-color-opt3"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sppb-col-md-8">
                          <div className="sppb-column">
                            <div className="sppb-column-addons">
                              <div id="sppb-addon-wrapper-1626723958919" className="sppb-addon-wrapper">
                                <div id="sppb-addon-1626723958919" className="clearfix ">
                                  <div className="sppb-addon sppb-addon-text-block  ">
                                    <div className="sppb-addon-content">
                                        <span style={{ fontSize: '18pt' }}
                                              data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Ukraine has a large diaspora population which has made homes all over the world, especially in Canada, the United States, and Poland. Since the Revolution of Dignity in 2014, many diaspora have felt called to make a difference. {Bulleted list of Diaspora helping news stories/projects etc. Possibly with images depending on site layout] &quot;}"
                                              data-sheets-userformat="{&quot;2&quot;:963,&quot;3&quot;:{&quot;1&quot;:0},&quot;4&quot;:{&quot;1&quot;:2,&quot;2&quot;:65280},&quot;9&quot;:1,&quot;10&quot;:1,&quot;11&quot;:4,&quot;12&quot;:0}">
                                          {gettext('Ukraine has a large diaspora population which has made homes all over the ' +
                                            'world, especially in Canada, the United States, and Poland. Since the ' +
                                            'Revolution of Dignity in 2014, many diaspora have felt called to make a ' +
                                            'difference.')}
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
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  )
}

const Diaspora = () => (
  <Layout
    title="Diaspora"
  >
    <DiasporaContent />
  </Layout>
)

export default Diaspora
