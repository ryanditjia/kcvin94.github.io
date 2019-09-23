import { css } from '@emotion/core';

export const DisplayStyle = (color, align, fontSize) => css`
  width: 100%;
  font-size: ${fontSize}px;
  color: ${color};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: ${fontSize + 6}px;
  line-height: ${fontSize + 6}px;
  font-weight: 500;
  text-align: ${align};
`;
