import classnames from "classnames";
import * as React from "react";
import styled from 'styled-components';

const BecomeAVolunteerButtonBase = ({className, ...props}) => (
  <a
    href="https://docs.google.com/forms/d/1ej1Xvk976p8y73Ns_IOBsAfH-jS5w_sBvDXjexYIYTA"
    className={
      classnames(
        "sppb-btn","sppb-btn-default","sppb-btn-rounded",
        className
      )
    }
    {...props}
  >
    Become a Volunteer
  </a>
);

export const BecomeAVolunteerButton = styled(BecomeAVolunteerButtonBase)`
  max-height: 38px;
  padding: 10px 14px !important;
`
