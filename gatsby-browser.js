import { LocalizationProvider } from 'gatsby-plugin-internationalization'
import * as React from 'react'
import { LocaleProvider } from './src/components/LocaleContext'

const WithLocalization = ({ children, pageContext }) => (
  <LocalizationProvider pageContext={pageContext}>
    {children}
  </LocalizationProvider>
)
export const wrapPageElement = ({ element, props: { pageContext } }) => (
  <WithLocalization pageContext={pageContext}>
    <LocaleProvider pageContext={pageContext}>
      {element}
    </LocaleProvider>
  </WithLocalization>
)
