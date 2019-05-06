import { css } from '@emotion/core';
import { colors } from 'styles/common';

export const GameWrapperStyle = css`
  position: relative;
  display: grid;
  grid-template-columns: repeat(10, 10vh);
  grid-template-rows: repeat(10, 10vh);
  width: 100vh;
  height: 100vh;
  background-color: ${colors.BLACK};
  overflow: hidden;
`;

interface UserWrapperProps {
  xLocation: number;
  yLocation: number;
}

export const UserWrapperStyle = ({
  xLocation,
  yLocation,
}: UserWrapperProps) => css`
  background-color: red;
  grid-area: ${yLocation} / ${xLocation} / ${yLocation + 1} / ${xLocation + 1};
`;
