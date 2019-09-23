import { css } from '@emotion/core';

export const LabelStyle = (color, align) => css`
  width: 100%;
  font-size: 11px;
  color: ${color};
  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: ${align};
  ${align === 'center' && 'padding: 0 0 0 2px'};
`;
