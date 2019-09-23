import { css } from '@emotion/core';

export const ClatterPickerWrapperStyle = css`
  position: relative;
  display: grid;
  grid-auto-rows: min-content;
  grid-auto-flow: rows;
  grid-gap: 20px;
  width: 260px;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.15);
  background-color: #eee;
  overflow: overlay;
  z-index: 1;
  padding: 20px;
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #eee;
    border: 5px solid #fff;
    &:hover {
      background-color: #ddd;
    }
  }
`;
