import * as React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { TopTitleText } from '../components/TopTitleText';
import { BotsPlatformImageTile, EnglishNowImageTile, LinkShadedImage } from '../components/EnglishNowCTA';
import { BecomeAVolunteerButton } from '../components/BecomeAVolunteer';

const HeroSection = styled.section.attrs({
  id: 'section-id-1542709301800',
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
`;

const EducationContainer = styled.div`
  border-right: 1px solid rgb(166 124 0/30%);
`;

const EducationTileContainer = styled('div')`
  border: 0;
`;

const TileTitleContainer = styled('div')`
  display: flex;

  padding-bottom: 16px;

  transition: all 0.3s ease-in-out;
  color: rgb(19 19 19 / 95%);

  &:hover {
    color: #a67c00;

    img {
      transition: all 0.3s ease-in-out;
      filter: drop-shadow(1px 1px 1px #ccc);
    }
  }
`;

const TileTitleText = styled('h3')`
  padding-left: 30px;
`;

const TileTitleWithImage = ({ imgSrc, title }) => (
  <TileTitleContainer>
    <img className="sppb-img-responsive" src={imgSrc} alt="" />
    <TileTitleText className="sppb-addon-title sppb-feature-box-title">
      {title}
    </TileTitleText>
  </TileTitleContainer>
);

const Education = () => (
  <EducationContainer className="sppb-col-md-6">
    <div id="column-id-1620541326164" className="sppb-column">
      <div className="sppb-column-addons">
        <div id="sppb-addon-wrapper-1620541326159" className="sppb-addon-wrapper">
          <div
            id="sppb-addon-1620541326159"
          >
            <EducationTileContainer className="sppb-addon sppb-addon-feature  service-item item1">
              <div className="sppb-addon-content sppb-text-left">
                <div className="sppb-media">
                  <div className="pull-sppb-text-left">
                    <span className="sppb-img-container">
                      <Link to="/education">
                        <TileTitleWithImage
                          imgSrc="images/education.png"
                          title="Education"
                        />
                      </Link>
                    </span>
                  </div>
                  <div className="sppb-media-body">
                    <div className="sppb-media-content">
                      <div className="sppb-addon-text">
                        Anomaly
                        offers free english lessons and workshops on various topics. We offer
                        these lessons to any adult in need to help promote personal
                        sustainability and open their ability to work in future opportunities.
                        If you are not a Veteran or Child, Anomaly can still help you with
                        educational modules and workshops.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </EducationTileContainer>
          </div>
        </div>
      </div>
    </div>
  </EducationContainer>
);

const LinkEnglishNowCTA = styled(LinkShadedImage)`
  flex: 0 0 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const EnglishNowTile = () => (
  <LinkEnglishNowCTA href="https://englishnow.dav.school/">
    <EnglishNowImageTile />
  </LinkEnglishNowCTA>
);

const BotsPlatformContainer = styled('div')`
  margin-top: 30px;
`;

const BotsPlatformTile = () => (
  <div className="sppb-col-md-6" id="column-wrap-id-1633010662536">
    <div id="column-id-1633010662536" className="sppb-column">
      <div className="sppb-column-addons">
        <BotsPlatformContainer>
          <LinkShadedImage href="https://bots.anomaly.org.ua">
            <BotsPlatformImageTile />
          </LinkShadedImage>
        </BotsPlatformContainer>
      </div>
    </div>
  </div>
);

const VeteransTile = () => (
  <div className="sppb-col-md-6" id="column-wrap-id-1620541326160">
    <div id="column-id-1620541326160" className="sppb-column">
      <div className="sppb-column-addons">
        <div id="sppb-addon-wrapper-1620541326161" className="sppb-addon-wrapper">
          <div
            id="sppb-addon-1620541326161"
            className=" sppb-wow clearfix  sppb-animated sppb-animated sppb-animated"
          >
            <div className="sppb-addon sppb-addon-feature  service-item item1">
              <div className="sppb-addon-content sppb-text-left">
                <div className="sppb-media">
                  <div className="pull-sppb-text-left">
                    <span className="sppb-img-container">
                      <Link to="/veterans">
                        <TileTitleWithImage
                          imgSrc="images/veterans.svg"
                          title="Veterans"
                        />
                      </Link>
                    </span>
                  </div>
                  <div className="sppb-media-body">
                    <div className="sppb-media-content">
                      <div className="sppb-addon-text">
                        Support
                        for Ukrainian veterans: Every Sunday we offer free English courses and
                        conversation clubs specifically for veterans, ATO volunteers, and their
                        families in Kyiv.
                        <br />
                        We organize regular volunteer outings (our tolokas)
                        and social events (Drinkin’ Bros Ukraine) to connect members of the
                        veteran community with each other, their fellow citizens, as well as
                        officials and visitors from local government and embassies.
                        <br />
                        {' '}
                        With our
                        ‘Dbayemo Razom’ project, we connected 1,000+ mental health
                        professionals, 10,000+ trained peer counselors and 3 physical
                        rehabilitation centers. The network shares experience, expertise, and
                        resources to better serve people in Ukraine.
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
);

const EcologyTile = () => (
  <div className="sppb-col-md-6" id="column-wrap-id-1620541326162">
    <div id="column-id-1620541326162" className="sppb-column">
      <div className="sppb-column-addons">
        <div id="sppb-addon-wrapper-1633616058151" className="sppb-addon-wrapper">
          <div
            id="sppb-addon-1633616058151"
          >
            <div className="sppb-addon sppb-addon-feature  service-item item2">
              <div className="sppb-addon-content sppb-text-left">
                <div className="sppb-media">
                  <div className="pull-sppb-text-left">
                    <span className="sppb-img-container">
                      <Link to="/eco">
                        <TileTitleWithImage
                          imgSrc="images/ecology.svg"
                          title="Ecology"
                        />
                      </Link>
                    </span>
                  </div>
                  <div className="sppb-media-body">
                    <div className="sppb-media-content">
                      <div className="sppb-addon-text">
                        Anomaly
                        helps the Ukrainian environment with neigborhood clean-ups and
                        environmental advocacy projects. Anomaly hosts up to 3 cleans-ups a
                        month to help minimize public litter. By doing so, Anomaly helps its
                        participants learn about the effects of waste on the environment (both
                        local and worldwide) and learn how to create similar projects at home.
                        To add on, Anomaly helps to lobby environmental issues occuring in
                        multiple cities across Ukraine. We will pinpoint any companies that are
                        at the core of enironvmental issues and combat them through advocacy and
                        lobbying.
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
);

const CommunityTile = () => (
  <div className="sppb-col-md-6" id="column-wrap-id-1633010662537">
    <div id="column-id-1633010662537" className="sppb-column">
      <div className="sppb-column-addons">
        <div id="sppb-addon-wrapper-1633616058146" className="sppb-addon-wrapper">
          <div
            id="sppb-addon-1633616058146"
          >
            <div className="sppb-addon sppb-addon-feature  service-item2">
              <div className="sppb-addon-content sppb-text-left">
                <div className="sppb-media">
                  <div className="pull-sppb-text-left">
                    <span className="sppb-img-container">
                      <Link to="/community">
                        <TileTitleWithImage
                          imgSrc="images/community.png"
                          title="Community"
                        />
                      </Link>
                    </span>
                  </div>
                  <div className="sppb-media-body">
                    <div className="sppb-media-content">
                      <div className="sppb-addon-text">
                        <p>
                          Anomaly
                          works with Kyiv City Administration and local community leaders to help
                          solve everyday problems of Kyiv residents, such as utility outages,
                          road potholes, and piling rubbish.
                        </p>
                        <p>
                          We support faster problem solving with local governance by providing
                          reporting tools for the 100,000 residents of the most underserved areas
                          of Kyiv, directly connecting them with local utility service providers.
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
    </div>
  </div>
);

const KidsTile = () => (
  <div className="sppb-col-md-6" id="column-wrap-id-1633616058147">
    <div id="column-id-1633616058147" className="sppb-column">
      <div className="sppb-column-addons">
        <div id="sppb-addon-wrapper-1620541326165" className="sppb-addon-wrapper">
          <div
            id="sppb-addon-1620541326165"
          >
            <div className="sppb-addon sppb-addon-feature  service-item item3">
              <div className="sppb-addon-content sppb-text-left">
                <div className="sppb-media">
                  <div className="pull-sppb-text-left">
                    <span className="sppb-img-container">
                      <Link to="/kids">
                        <TileTitleWithImage
                          imgSrc="images/kids.svg"
                          title="Kids"
                        />
                      </Link>
                    </span>
                  </div>
                  <div className="sppb-media-body">
                    <div className="sppb-media-content">
                      <div className="sppb-addon-text">
                        We
                        help children of veterans, returned Russian-held political prisoners,
                        Crimean Tatar exiles, and IDPs to attend our free English lessons and
                        speaking clubs.
                        <br />
                        Anomaly connects foreign donors with an orphanage in Mariupol to help children find a new family and home.
                        <br />
                        We work with the local community policing department to protect the rights of children in Kyiv.
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
);

const AnimalsTile = () => (
  <div className="sppb-col-md-6" id="column-wrap-id-1633616058148">
    <div id="column-id-1633616058148" className="sppb-column">
      <div className="sppb-column-addons">
        <div id="sppb-addon-wrapper-1620541326163" className="sppb-addon-wrapper">
          <div
            id="sppb-addon-1620541326163"
          >
            <div className="sppb-addon sppb-addon-feature  service-item item4">
              <div className="sppb-addon-content sppb-text-left">
                <div className="sppb-media">
                  <div className="pull-sppb-text-left">
                    <span className="sppb-img-container">
                      <Link to="/animals">
                        <TileTitleWithImage
                          imgSrc="images/animals.svg"
                          title="Animals"
                        />
                      </Link>
                    </span>
                  </div>
                  <div className="sppb-media-body">
                    <div className="sppb-media-content">
                      <div className="sppb-addon-text">
                        Anomaly
                        supports animal shelters in Kyiv, Lviv, and Dnipro. We help volunteers
                        to solve the problem of stray animal overpopulation.
                        <br />
                        {' '}
                        <br />
                        We are always looking for volunteers to help us solve this problem. If you think that is you, then join us today!.
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
);

const IndexPage = () => (
  <Layout
    title="Home Page"
  >

    <HeroSection className="sppb-section hero-section sppb-section-content-center">
      <div className="sppb-row-overlay" />
      <div className="sppb-row-container">
        <div className="sppb-row sppb-align-center">
          <div className="sppb-col-md-12" id="column-wrap-id-1542709301799">
            <div id="column-id-1542709301799" className="sppb-column">
              <div className="sppb-column-addons">
                <div id="sppb-addon-wrapper-1542709861050" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1542709861050" className="clearfix ">
                    <div className="sppb-addon sppb-addon-header sppb-text-left">
                      <TopTitleText>Dare to do the impossible!</TopTitleText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
    <section id="section-id-1620541326094" className="sppb-section">
      <div className="sppb-row-overlay" />
      <div className="sppb-row-container">
        <div className="sppb-row sppb-no-gutter">
          <div className="sppb-col-md-12" id="column-wrap-id-1620541326154">
            <div id="column-id-1620541326154" className="sppb-column">
              <div className="sppb-column-addons">
                <div id="sppb-addon-wrapper-1620541326156" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1620541326156" className="clearfix ">
                    <div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-center">
                      <h3 className="sppb-addon-title">
                        Our projects
                      </h3>
                    </div>
                  </div>
                </div>
                <div id="sppb-addon-wrapper-1620541326157" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1620541326157" className="clearfix ">
                    <div className="sppb-addon-divider-wrap divider-position">
                      <div className="sppb-divider sppb-divider-border link-color-opt3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <VeteransTile />
          <EcologyTile />
          <Education />
          <EnglishNowTile />
          <BotsPlatformTile />
          <CommunityTile />
          <KidsTile />
          <AnimalsTile />
        </div>
      </div>
    </section>

    <section id="section-id-1620586929505" className="sppb-section">
      <div className="sppb-row-overlay" />
      <div className="sppb-row-container">
        <div className="sppb-row">
          <div className="sppb-col-md-12" id="column-wrap-id-1620586929513">
            <div id="column-id-1620586929513" className="sppb-column">
              <div className="sppb-column-addons">
                <div id="sppb-addon-wrapper-1620586929515" className="sppb-addon-wrapper"><div id="sppb-addon-1620586929515" className="clearfix "><div className="sppb-addon sppb-addon-header text-color-dark6 sppb-text-center"><h3 className="sppb-addon-title">Gallery</h3></div></div></div>
                <div id="sppb-addon-wrapper-1620586929512" className="sppb-addon-wrapper"><div id="sppb-addon-1620586929512" className="clearfix "><div className="sppb-addon sppb-addon-text-block  "><div className="sppb-addon-content"><div style={{ textAlign: 'center' }}><span style={{ fontWeight: 400 }}>Check out our accomplishments</span></div></div></div></div></div>
                <div id="sppb-addon-wrapper-1620586929516" className="sppb-addon-wrapper"><div id="sppb-addon-1620586929516" className="clearfix "><div className="sppb-addon-divider-wrap divider-position"><div className="sppb-divider sppb-divider-border link-color-opt3" /></div></div></div>
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
                        <div className="sppb-addon-single-image-container">
                          <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image" data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_1464.jpeg">+</a>
                          <img className="sppb-img-responsive" src="images/img_1464.jpeg" alt="Image" />
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
                        <div className="sppb-addon-single-image-container">
                          <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image" data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_1355.jpg">+</a>
                          <img className="sppb-img-responsive" src="images/img_1355.jpg" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sppb-addon-wrapper-1620586929521" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1620586929521" className="clearfix ">
                    <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                      <div className="sppb-addon-content">
                        <div className="sppb-addon-single-image-container">
                          <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image" data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_0835.jpeg">+</a>
                          <img className="sppb-img-responsive" src="images/img_0835.jpeg" alt="Image" />
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
                        <div className="sppb-addon-single-image-container">
                          <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image" data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_3256.jpeg">+</a>
                          <img className="sppb-img-responsive" src="images/img_3256.jpeg" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sppb-addon-wrapper-1620586929524" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1620586929524" className="clearfix ">
                    <div className="sppb-addon sppb-addon-wayne-corp-image sppb-addon-single-image sppb-text-center ">
                      <div className="sppb-addon-content">
                        <div className="sppb-addon-single-image-container">
                          <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image" data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_1604.jpeg">+</a>
                          <img className="sppb-img-responsive" src="images/img_1604.jpeg" alt="Image" />
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
                        <div className="sppb-addon-single-image-container">
                          <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image" data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_1038.jpeg">+</a>
                          <img className="sppb-img-responsive" src="images/img_1038.jpeg" alt="Image" />
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
                        <div className="sppb-addon-single-image-container">
                          <a className="sppb-magnific-popup sppb-addon-image-overlay-icon" data-popup_type="image" data-mainclass="mfp-no-margins mfp-with-zoom" href="images/img_0703.jpeg">+</a>
                          <img className="sppb-img-responsive" src="images/img_0703.jpeg" alt="Image" />
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
      <div className="sppb-row-overlay" />
      <div className="sppb-row-container">
        <div className="sppb-row sppb-align-center">
          <div className="sppb-col-md-7" id="column-wrap-id-1542973816359">
            <div id="column-id-1542973816359" className="sppb-column">
              <div className="sppb-column-addons">
                <div id="sppb-addon-wrapper-1542973816366" className="sppb-addon-wrapper">
                  <div id="sppb-addon-1542973816366" className="clearfix ">
                    <div className="sppb-addon sppb-addon-header sppb-text-right">
                      <h3 className="sppb-addon-title">Join Anomaly Today!</h3>
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
                  <div id="sppb-addon-1633802035300" className="clearfix sppb-positioned-addon" data-rowid={1542973816360} data-colid={1542973816391}>
                    <div className="sppb-text-center">
                      <BecomeAVolunteerButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
