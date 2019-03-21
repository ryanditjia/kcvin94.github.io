import * as React from 'react';
import { ContainerWrapperStyle } from './style';

const Container = ({ children }) => (
  <div css={ContainerWrapperStyle}>{children}</div>
);

export default Container;
