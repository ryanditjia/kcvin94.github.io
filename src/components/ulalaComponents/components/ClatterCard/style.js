import { css } from '@emotion/core';
import { RED, YELLOW } from '../../colors';

export const ClatterCardWrapperStyle = css`
  position: relative;
  display: grid;
  grid-auto-rows: min-content;
  grid-auto-flow: row;
  width: 250px;
  box-shadow: 0 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: #fff;
  justify-items: center;
  padding: 100px 20px 15px 20px;
  margin: 30px;
  height: 295px;
  flex-shrink: 0;
`;

export const DeleteButtonStyle = css`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  width: 40px;
  height: 40px;
  background: none;
  color: rgba(0, 0, 0, 0.1);
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: ${RED};
  }
`;

export const ImageStyle = css`
  position: absolute;
  top: -40px;
  left: calc(50% - 70px);
  height: 140px;
  width: 140px;
  object-fit: contain;
`;

export const CardInfoWrapperStyle = css`
  display: grid;
  grid-auto-rows: min-content;
  grid-auto-flow: rows;
  grid-gap: 5px;
  width: 100%;
`;

export const RegionsWrapperStyle = css`
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapperStyle = css`
  display: flex;
  align-items: center;
  & > img {
    margin: 0 5px 0 0;
  }
`;

export const IconImageStyle = css`
  height: 22px;
  width: 22px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const StarButtonsWrapperStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
`;

export const StarButtonStyle = isActive => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 30px;
  font-size: 26px;
  border: none;
  background: none;
  outline: none;
  transition: all 0.2s linear;
  ${isActive
    ? `
    color: ${YELLOW};
  `
    : `
    color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.4);
    }
  `};
`;

export const AttributeWrapperStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
