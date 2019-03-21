import * as React from 'react';
import {
  LogoWrapperStyle,
  KWrapperStyle,
  K1Style,
  K2Style,
  K3Style,
  NWrapperStyle,
  N1Style,
  N2Style,
  N3Style
} from './style';

const Logo = ({ scale }) => (
  <div css={LogoWrapperStyle}>
    <div css={KWrapperStyle}>
      <div css={K3Style(scale)} />
      <div css={K1Style(scale)} />
      <div css={K2Style(scale)} />
    </div>
    <div css={NWrapperStyle}>
      <div css={N3Style(scale)} />
      <div css={N1Style(scale)} />
      <div css={N2Style(scale)} />
    </div>
  </div>
);

Logo.defaultProps = {
  scale: 1
};

export default Logo;
