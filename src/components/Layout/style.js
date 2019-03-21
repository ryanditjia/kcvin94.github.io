import { css } from '@emotion/core';
import { colors } from 'styles/common';

export const LayoutWrapperStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(${colors.WHITE}, ${colors.OFF_WHITE});
  overflow-x: hidden;
  overflow-y: auto;
`;
