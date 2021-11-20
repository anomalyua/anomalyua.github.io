import * as React from 'react'
import { createContext, useContext } from 'react'

const LocaleContext = createContext({})

export const useLocaleContext = () => {
  return useContext(LocaleContext)
}

export const LocaleProvider = ({ children, pageContext }) => {
  const { locale } = pageContext

  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  )
}
