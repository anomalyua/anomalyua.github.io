import classnames from "classnames";
import * as React from "react";
import styled from 'styled-components';

const ButtonBase = ({className, ...props}) => {
  return (
    <a
      href={props.href}
      className={
        classnames(
          "sppb-btn", "sppb-btn-default", "sppb-btn-rounded",
          className
        )
      }
      {...props}
    >
      {props.text}
    </a>
  )
};

export const Button = styled(ButtonBase)`
//   max-height: 38px;
//   padding: 10px 14px !important;
`
