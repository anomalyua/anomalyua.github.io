import * as React from 'react';
import styled from 'styled-components';

const Image = styled.img.attrs({
  src: 'images/English-Now-CTA.svg',
})`
  padding: 5px;
  height: 180px;

  -webkit-filter: drop-shadow(5px 5px 5px #666666);
  filter: drop-shadow(5px 5px 5px #666666);

  &:hover {
    height: 185px;
    transition: .17s;
    -webkit-filter: drop-shadow(5px 5px 5px #666666);
    filter: drop-shadow(10px 10px 10px #666666);
  }
`;

export const EnglishNowCTA = () => (
  <div className="sppb-text-center">
    <a href="https://englishnow.dav.school/">
      <Image />
    </a>
  </div>
);
