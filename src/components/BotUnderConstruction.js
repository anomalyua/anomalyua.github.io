import * as React from 'react';
import styled from 'styled-components';

import botsLogo from '../images/iFAV4mg.png';

const PageContainer = styled('div')`
  display: flex;
`;

const TitleContainer = styled('div')`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const GoBack = styled('a').attrs({
  href: 'https://anomaly.org.ua',
  children: 'go back',
})`
  display: flex;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;
  color: blue;
`;

export const BotUnderConstruction = () => (
  <PageContainer>
    <div>
      <img src={botsLogo} />
    </div>
    <TitleContainer>
      <div>
        <h1>
          This page is under construction!
        </h1>
        <GoBack />
      </div>
    </TitleContainer>
  </PageContainer>
);
