import * as React from 'react';
import { ContainerWrapperStyle } from './style';

interface Props {
  children: React.Node;
}

const Container = ({ children }: Props) => (
  <div css={ContainerWrapperStyle}>{children}</div>
);

export default Container;
