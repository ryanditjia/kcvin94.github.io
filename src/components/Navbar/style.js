import { css } from '@emotion/core';
import { colors, shadows } from 'styles/common';

export const NavbarWrapperStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 80px;
  background-color: ${colors.WHITE};
  ${shadows.HEADER};
`;
