import { css } from '@emotion/core';
import { colors, borderRadiuses, shadows } from 'style';

export const LayoutWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.BLACK};
  overflow: hidden;
`;

export const LayoutContentWrapperStyle = css`
  background-color: ${colors.WHITE};
  ${borderRadiuses.CONTAINER};
  ${shadows.CONTAINER};
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (orientation:portrait) {
    width: calc(100vw - 100px);
    height: calc(100vw - 100px);
  }
  @media screen and (orientation:landscape) {
    width: calc(100vh - 100px);
    height: calc(100vh - 100px);
  }
`;
