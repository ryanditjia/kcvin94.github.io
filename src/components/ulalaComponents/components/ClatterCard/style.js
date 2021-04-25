import { css } from '@emotion/core';
import { RED, YELLOW, BLACK } from '../../colors';

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
  margin: 0 20px 100px 20px;
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
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StarButtonStyle = isActive => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 30px;
  font-size: 15px;
  border: none;
  background: none;
  outline: none;
  transition: all 0.2s linear;
  padding: 0;
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

export const BonusInfoStyle = css`
  position: absolute;
  left: calc(50% - 115px);
  top: 280px;
  width: 230px;
  font-size: 12px;
  color: ${BLACK};
  font-weight: 500;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 10px;
`;
