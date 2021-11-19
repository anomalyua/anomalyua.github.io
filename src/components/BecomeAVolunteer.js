import classnames from "classnames";
import * as React from "react";
import styled from 'styled-components';
import { useLocales } from 'react-localized'

const BecomeAVolunteerButtonBase = ({className, ...props}) => {
  const {gettext} = useLocales()
  return (
    <a
      href="https://docs.google.com/forms/d/1ej1Xvk976p8y73Ns_IOBsAfH-jS5w_sBvDXjexYIYTA"
      className={
        classnames(
          "sppb-btn", "sppb-btn-default", "sppb-btn-rounded",
          className
        )
      }
      {...props}
    >
      {gettext('Become a Volunteer')}
    </a>
  )
};

export const BecomeAVolunteerButton = styled(BecomeAVolunteerButtonBase)`
  max-height: 38px;
  padding: 10px 14px !important;
`
