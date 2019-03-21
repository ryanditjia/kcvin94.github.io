import { css } from '@emotion/core';
import { colors } from 'styles/common';

export const LogoWrapperStyle = css`
  display: flex;
`;

export const KWrapperStyle = css`
  display: flex;
  position: relative;
`;

export const K1Style = scale => css`
  width: ${scale * 50}px;
  height: ${scale * 180}px;
  background: linear-gradient(to bottom, ${colors.TEAL}, ${colors.TEAL_DARK1});
  border-radius: ${scale * 50}px 0;
  margin-top: ${scale * 20}px;
  position: relative;
`;

export const K2Style = scale => css`
  width: ${scale * 50}px;
  height: ${scale * 100}px;
  background: linear-gradient(to bottom, ${colors.TEAL_LIGHT1}, ${colors.TEAL});
  border-radius: ${scale * 50}px 0;
  position: relative;
  margin-left: ${scale * 10}px;
`;

export const K3Style = scale => css`
  width: ${scale * 50}px;
  height: ${scale * 100}px;
  background: linear-gradient(
    to bottom,
    ${colors.TEAL_DARK3},
    ${colors.TEAL_DARK2}
  );
  border-radius: 0 ${scale * 50}px;
  position: absolute;
  bottom: ${scale * 20}px;
  right: ${scale * 10}px;
`;

export const NWrapperStyle = css`
  display: flex;
  position: relative;
`;

export const N1Style = scale => css`
  width: ${scale * 50}px;
  height: ${scale * 180}px;
  background: linear-gradient(
    to bottom,
    ${colors.CORAL},
    ${colors.CORAL_DARK1}
  );
  border-radius: ${scale * 50}px 0;
  margin-top: ${scale * 20}px;
  position: relative;
`;

export const N2Style = scale => css`
  width: ${scale * 50}px;
  height: ${scale * 180}px;
  background: linear-gradient(
    to bottom,
    ${colors.CORAL_LIGHT1},
    ${colors.CORAL}
  );
  border-radius: ${scale * 50}px 0;
  margin-left: ${scale * 10}px;
  position: relative;
`;

export const N3Style = scale => css`
  width: ${scale * 50}px;
  height: ${scale * 151}px;
  background: linear-gradient(
    to bottom,
    ${colors.CORAL_DARK3},
    ${colors.CORAL_DARK2}
  );
  margin-left: ${scale * 10}px;
  border-radius: ${scale * 50}px 0;
  position: absolute;
  top: ${scale * 25}px;
  left: ${scale * 20}px;
  transform: rotate(-22deg);
`;
