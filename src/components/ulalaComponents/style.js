import { css } from '@emotion/core';

export const AppWrapperStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.05);
  & * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const BodyWrapperStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: overlay;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.15);
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

export const HeaderWrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ClatterCardsWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: center;
`;

export const PlaceholderCardStyle = css`
  position: relative;
  width: 250px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 30px;
  height: 295px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: rgba(0, 0, 0, 0.1);
  font-weight: 500;
`;
