import { css } from '@emotion/core';

export const AppWrapperStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 50px 0 0 0;
  & * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const HeaderWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100vw;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const ClatterCardsWrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: repeat(3, min-content);
  grid-gap: 60px;
  flex: 1;
  overflow: overlay;
  padding: 50px;
`;
