import { useLocaleContext } from './LocaleContext'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const BaseLanguageLink = styled(Link)`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
  color: rgb(255 255 255 / 60%);
`

const ActiveLink = styled(BaseLanguageLink)`
  color: #fff;
`

const LanguageLink = ({active, ...props}) => (
  active ?
    <ActiveLink {...props} /> :
    <BaseLanguageLink {...props} />
)

export const LanguageSwitcher = () => {
  const { locale } = useLocaleContext()
  const { pathname } = useLocation()
  const barePath = pathname.match(/(?:\/en)?(.*)/)[1]

  return <div className="mod-languages">
    <ul className="lang-inline">
      <li>
        <LanguageLink to={barePath} active={locale === 'ua'}>
          UA
        </LanguageLink>
      </li>
      <li>
        <LanguageLink to={`/en${barePath}`} active={locale === 'en'}>
          EN
        </LanguageLink>
      </li>
    </ul>
  </div>
}