import * as React from 'react';
import styled from 'styled-components';

import botsLogo from '../images/iFAV4mg.png'

const Image = styled.img`
  padding: 5px;
  height: 180px;

  -webkit-filter: drop-shadow(5px 5px 5px #666666);
  filter: drop-shadow(5px 5px 5px #666666);
`;

export const LinkShadedImage = styled.a`
  &:hover {
    ${Image} {
      transform: scale(1.02);
      transition: .17s;
      -webkit-filter: drop-shadow(5px 5px 5px #666666);
      filter: drop-shadow(10px 10px 10px #666666);
    }
  }
`;

const EnglishNowCTA = (props) => (
  <div className="sppb-text-center">
    <Image {...props} />
  </div>
);

const ShadedImage = (props) => (
  <div>
    <div className="sppb-column">
      <div className="sppb-column-addons">
        <div id="sppb-addon-wrapper-1633616058164" className="sppb-addon-wrapper">
          <div id="sppb-addon-1633616058164" className="clearfix ">
            <EnglishNowCTA {...props} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const BotsPlatformImageTile = styled(ShadedImage).attrs({
  src: botsLogo,
})`
  height: 240px;
`;

export const EnglishNowImageTile = styled(ShadedImage).attrs({
  src: 'images/English-Now-CTA.svg',
})`
  height: 180px;
`;
