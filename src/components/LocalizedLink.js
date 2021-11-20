import * as React from "react";
import { Link } from "gatsby";
import {useLocaleContext} from "./LocaleContext";

export const LocalizedLink = ({ to, children, ...rest }) => {
  const { locale } = useLocaleContext()

  const prefix = locale === 'ua' ? '' : `/${locale}`

  return (
    <Link
      {...rest}
      to={`${prefix}${to}`}
    >
      {children}
    </Link>
  );
};
