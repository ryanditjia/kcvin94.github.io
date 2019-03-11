import { css } from '@emotion/core';
import { colors } from 'styles/common';

export const LayoutWrapperStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.WHITE};
  overflow-x: hidden;
  overflow-y: auto;
  padding: 50px 0 0 0;
`;
