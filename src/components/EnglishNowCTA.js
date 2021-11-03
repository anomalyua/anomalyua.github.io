import * as React from 'react';
import styled from 'styled-components';

const Image = styled.img.attrs({
  src: 'images/English-Now-CTA.svg',
})`
  padding: 5px;
  height: 180px;

  -webkit-filter: drop-shadow(5px 5px 5px #666666);
  filter: drop-shadow(5px 5px 5px #666666);
`;

export const LinkEnglishNow = styled.a`
  &:hover {
    ${Image} {
      height: 185px;
      transition: .17s;
      -webkit-filter: drop-shadow(5px 5px 5px #666666);
      filter: drop-shadow(10px 10px 10px #666666);
    }
  }
`;

const EnglishNowCTA = () => (
  <div className="sppb-text-center">
    <Image />
  </div>
);

export const EnglishNowImageTile = () => (
  <div>
    <div id="column-id-1633010662535" className="sppb-column">
      <div className="sppb-column-addons">
        <div id="sppb-addon-wrapper-1633616058164" className="sppb-addon-wrapper">
          <div id="sppb-addon-1633616058164" className="clearfix ">
            <EnglishNowCTA />
          </div>
        </div>
      </div>
    </div>
  </div>

);
