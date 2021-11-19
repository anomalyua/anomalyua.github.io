import * as React from 'react'

import styled from 'styled-components'
import { Layout } from '../components/Layout'
import { TopTitleText } from '../components/TopTitleText'
import { AchievementsColumn } from '../components/AchievementsColumn'

import davidPhoto from '../images/photo_2021-11-04_22-41-53.jpg'
import { BecomeAVolunteerButton } from '../components/BecomeAVolunteer'
import { PhoneNumber } from '../components/PhoneNumber'

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
`

const PageColumn = styled('div')`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`

const PageColumn4 = styled(PageColumn)`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`

const PageColumn8 = styled(PageColumn)`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`

const GraySection = styled('section')`
  background-color: #e3e6ec;
`

const TitleLevel3 = styled('div')`
  text-align: center;
  font-size: 32px;
  font-family: "Work Sans";
`

const DescriptionBlock = styled('div')`
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 300;
  line-height: 26px;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 24px;
  }
`

const OurFounder = () => (
  <GraySection id="section-id-1542711300771" className="sppb-section sppb-section-content-center">
    <div className="sppb-row-overlay" />
    <div className="sppb-row-container">
      <div className="sppb-row sppb-align-center">
        <PageColumn4>
          <div id="column-id-1542711300769" className="sppb-column">
            <div className="sppb-column-addons">
              <div id="sppb-addon-wrapper-1542712445474" className="sppb-addon-wrapper">
                <div id="sppb-addon-1542712445474" className="clearfix ">
                  <div className="sppb-addon sppb-addon-person sppb-text-center  non-box-shadow person-content-position-bottom-left">
                    <div className="sppb-addon-content">
                      <div className="sppb-person-image ">
                        <img className="sppb-img-responsive" src={davidPhoto} alt="David Plaster" />
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
        </PageColumn4>
        <PageColumn8>
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
                <div className="sppb-addon sppb-addon-text-block  ">
                  <div className="sppb-addon-content">
                    <DescriptionBlock>
                      David's favorite way to describe himself is as a "mere pensioner."
                      After retiring from his career as a US Army medic, David came to Ukraine in
                      2011 and shortly thereafter decided to build a life here.
                      He served with other volunteers as a combat medic both on the
                      Maidan and at the front in Donbas, and he has been working to
                      make Ukraine a better place in every way he can ever since.
                      He founded Anomaly as an organizational vehicle for that vision
                      on Maidan December 1st, 2013 and officially in 2016 as a Ukrainian NGO.
                    </DescriptionBlock>
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
        </PageColumn8>
      </div>
    </div>
  </GraySection>
)

const OurTeamDivider = styled('div')`
  display: inline-block;
  width: 100%;

  border-bottom-color: rgb(166 124 0 / 30%);
  
  margin-top: 28px;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 12px;
  }

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`

const OurTeamTopDivider = styled('div')`
  display: inline-block;
  width: 100%;

  border-bottom-color: rgb(166 124 0 / 30%);

  margin-bottom: 28px;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 12px;
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 18px;
  }
`

const OurTeamColumn = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  justify-content: center;
  margin-top: 30px;
`

const ContactsColumn = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  justify-content: center;
`

const DescriptionText = ({ children }) => (
  <div className="sppb-column">
    <div className="sppb-column-addons">
      <OurTeamTopDivider />
      <div id="sppb-addon-wrapper-1632999046169" className="sppb-addon-wrapper">
        <div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-left">
          <DescriptionBlock>
            {children}
          </DescriptionBlock>
        </div>
      </div>
      <div id="sppb-addon-wrapper-1632999046170" className="sppb-addon-wrapper">
        <div id="sppb-addon-1632999046170" className="clearfix ">
          <div className="sppb-addon-divider-wrap divider-position">
            <OurTeamDivider className="sppb-divider-border" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const OurTeam = () => (
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
                    <PageColumn8>
                      <DescriptionText>
                        Today our team includes hundreds of volunteers from more than 12
                        countries and all over Ukraine. Like billions of drops make an
                        ocean, each of our team members makes their contribution in
                        making Ukraine better.
                      </DescriptionText>
                    </PageColumn8>
                    <PageColumn4>
                      <OurTeamColumn>
                        <TitleLevel3>
                          Our team
                        </TitleLevel3>
                      </OurTeamColumn>
                    </PageColumn4>
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
)

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  padding-top: 32px;
`

const VolunteeringOpportunities = () => (
  <GraySection id="section-id-1542711300771" className="sppb-section sppb-section-content-center">
    <div className="sppb-row-container">
      <div className="row">
        <PageColumn4>
          <OurTeamColumn>
            <TitleLevel3>
              Volunteering opportunities
            </TitleLevel3>
          </OurTeamColumn>
        </PageColumn4>
        <PageColumn8>
          <DescriptionText>
            Anomaly provides a wide range of volunteering opportunities in Ukraine. We have
            divisions in Kyiv, Lviv, Odessa and other Ukrainian cities. The main areas for
            volunteering are education, ecology, kids assistance, veterans programs, local
            communities, and animals protection. If you have skills in English teaching, IT,
            content creation, design, professional training, project management, you are the
            person we are looking for. If not, but you want to join us, feel free to apply and
            we will find volunteering opportunities within our team in accordance with your
            skills and desires. Do you have some ideas of how to improve Ukraine? Bring them to
            life together with us! Do you need immigration support for living in Ukraine? We
            provide it for all of our foreign volunteers. Still have questions? Don't hesitate,
            and fill out our appllication form. Let's talk about your future volunteering journey
            as a part of the Anomaly team!
            <ButtonContainer>
              <BecomeAVolunteerButton />
            </ButtonContainer>
          </DescriptionText>
        </PageColumn8>
      </div>
    </div>
  </GraySection>
)

const ContactsContainer = styled('div')`
  padding: 120px 0;
`

const Contacts = () => (
  <ContactsContainer className="sppb-row-container">
    <div className="row">
      <PageColumn8>
        <div id="column-id-1542888546597" className="sppb-column">
          <div className="sppb-column-addons">
            <div id="sppb-addon-wrapper-1542950205330" className="sppb-addon-wrapper">
              <div id="sppb-addon-1542950205330" className="clearfix ">
                <div className="sppb-addon sppb-addon-feature sppb-text-left address-info">
                  <div className="sppb-addon-content sppb-text-left">
                    <div className="sppb-media">
                      <div className="pull-left"><div className="sppb-icon"><span className="sppb-icon-container" aria-label="Phone"><i className="fa fa-phone" aria-hidden="true" /></span></div></div>
                      <div className="sppb-media-body">
                        <div className="sppb-media-content">
                          <h2 className="sppb-addon-title sppb-feature-box-title sppb-media-heading">Phone</h2>
                          <div className="sppb-addon-text">
                            <ul>
                              <li><PhoneNumber /></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sppb-addon-wrapper-1542951075011" className="sppb-addon-wrapper"><div id="sppb-addon-1542951075011" className="clearfix "><div className="sppb-addon-divider-wrap divider-position"><div className="sppb-divider sppb-divider-border link-color-opt3" /></div></div></div>
            <div id="sppb-addon-wrapper-1542888956811" className="sppb-addon-wrapper">
              <div id="sppb-addon-1542888956811" className="clearfix ">
                <div className="sppb-addon sppb-addon-feature sppb-text-left address-info">
                  <div className="sppb-addon-content sppb-text-left">
                    <div className="sppb-media">
                      <div className="pull-left"><div className="sppb-icon"><span className="sppb-icon-container" aria-label="Address"><i className="fa fa-map-o" aria-hidden="true" /></span></div></div>
                      <div className="sppb-media-body">
                        <div className="sppb-media-content">
                          <h2 className="sppb-addon-title sppb-feature-box-title sppb-media-heading">Address</h2>
                          <div className="sppb-addon-text">
                            Velyka Vasylkivska st, 72, office 20,
                            Ukraine, 03150, Kyiv
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sppb-addon-wrapper-1542888978160" className="sppb-addon-wrapper"><div id="sppb-addon-1542888978160" className="clearfix "><div className="sppb-addon-divider-wrap divider-position"><div className="sppb-divider sppb-divider-border link-color-opt3" /></div></div></div>
            <div id="sppb-addon-wrapper-1542951075020" className="sppb-addon-wrapper">
              <div id="sppb-addon-1542951075020" className="clearfix ">
                <div className="sppb-addon sppb-addon-feature sppb-text-left address-info">
                  <div className="sppb-addon-content sppb-text-left">
                    <div className="sppb-media">
                      <div className="pull-left"><div className="sppb-icon"><span className="sppb-icon-container" aria-label="Email"><i className="fa fa-envelope-o" aria-hidden="true" /></span></div></div>
                      <div className="sppb-media-body">
                        <div className="sppb-media-content">
                          <h2 className="sppb-addon-title sppb-feature-box-title sppb-media-heading">Email</h2>
                          <div className="sppb-addon-text">
                            <ul>
                              <li><a href="mailto:info@anomaly.org.ua">info@anomaly.org.ua</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sppb-addon-wrapper-1542951075017" className="sppb-addon-wrapper"><div id="sppb-addon-1542951075017" className="clearfix "><div className="sppb-addon-divider-wrap divider-position"><div className="sppb-divider sppb-divider-border link-color-opt3" /></div></div></div>
            <div id="sppb-addon-wrapper-1542951075014" className="sppb-addon-wrapper">
              <div id="sppb-addon-1542951075014" className="clearfix ">
                <div className="sppb-addon sppb-addon-feature sppb-text-left address-info">
                  <div className="sppb-addon-content sppb-text-left">
                    <div className="sppb-media">
                      <div className="pull-left">
                        <div className="sppb-icon">
                          <span className="sppb-icon-container" aria-label="Social">
                            <i className="fa fa-comment" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                      <div className="sppb-media-body">
                        <div className="sppb-media-content">
                          <h2 className="sppb-addon-title sppb-feature-box-title sppb-media-heading">Social</h2>
                          <div className="sppb-addon-text">
                            <ul>
                              <li>
                                <a
                                  target="_blank"
                                  href="https://www.facebook.com/anomaly.ua"
                                  aria-label="facebook"
                                  rel="noreferrer"
                                >
                                  Facebook
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  href="https://www.instagram.com/anomaly.ua"
                                  aria-label="Instagram"
                                  rel="noreferrer"
                                >
                                  Instagram
                                </a>
                              </li>
                            </ul>
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
      </PageColumn8>
      <PageColumn4>
        <ContactsColumn>
          <TitleLevel3>
            Contacts
          </TitleLevel3>
        </ContactsColumn>
      </PageColumn4>
    </div>
  </ContactsContainer>
)

const About = () => {
  return (
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
      <OurFounder/>
      <OurTeam/>
      <VolunteeringOpportunities/>
      <Contacts/>
    </Layout>
  )
}

export default About
