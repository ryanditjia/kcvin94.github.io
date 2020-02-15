import { css } from '@emotion/core';
import { colors, borderRadiuses, shadows } from 'styles/common';

export const BudgetWrapperStyle = css`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.PINK};
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 0;
`;

export const BudgetContentStyle = css`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 10px;
  min-width: 240px;
  width: 50%;
  max-width: 600px;
  background-color: ${colors.WHITE};
  ${borderRadiuses.CONTAINER};
  ${shadows.CONTAINER};
  padding: 20px;
`;
