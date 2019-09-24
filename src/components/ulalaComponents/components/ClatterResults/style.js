import { css } from '@emotion/core';
import { BLACK } from '../../colors';

export const ClatterResultsWrapperStyle = css`
  width: 25vw;
  min-width: 300px;
  overflow: auto;
  overflow: overlay;
  display: grid;
  grid-auto-rows: min-content;
  grid-auto-flow: row;
  grid-gap: 20px;
  padding: 20px;
`;

export const InfoWrapperStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DescriptionStyle = css`
  width: 100%;
  font-size: 20px;
  color: ${BLACK};
  font-weight: 500;
  text-align: center;
`;
