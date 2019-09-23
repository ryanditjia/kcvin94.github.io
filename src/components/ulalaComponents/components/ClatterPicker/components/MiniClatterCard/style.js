import { css } from '@emotion/core';

export const MiniClatterCardWrapperStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: min-content;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  align-items: center;
  transition: all 0.2s ease-out;
  box-shadow: 0 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: #fff;
  &:hover {
    box-shadow: 0 0px 30px rgba(0, 0, 0, 0.4);
    & > span {
      opacity: 1;
    }
  }
`;

export const ImageStyle = css`
  height: 120px;
  object-fit: contain;
  margin: 0;
`;

export const HoverLabelStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 0.2s ease-out;
  width: 100%;
  padding: 3px 10px 10px 10px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
`;
