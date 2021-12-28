import styled from 'styled-components'
import * as React from 'react'

import englishNow from '../images/English-Now.svg'
import logos from '../images/logos-uc.svg'
import image from '../images/photo_2021-11-16_17-09-34.jpg'

const FlexBox = styled('div')`
  display: flex;
`

const TitleContainer = styled('div')`
  display: flex;
  align-items: center;
  padding: 20px;
`

const GoBack = styled('a').attrs({
  href: 'https://anomaly.org.ua',
  children: 'go back'
})`
  display: flex;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;
  color: blue;
`

const PageContainer = styled('div')`
  padding: 36px
`

const Header = styled(FlexBox)`
  justify-content: space-between;
  img {
    height: 100px;
  }
`

const Panel = styled(FlexBox)`
  justify-content: space-between;
  padding: 0 60px;
  margin: 20px 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

export const EnglishUnderConstruction = () => (
  <PageContainer>
  <Header>
    <img src={englishNow} />
    <img src={logos} />
  </Header>
  <Panel>
    <img src={image} />
    <TitleContainer>
      <div>
        <h1>
          This page is under construction!
        </h1>
        <GoBack />
      </div>
    </TitleContainer>
  </Panel>
    </PageContainer>
)
