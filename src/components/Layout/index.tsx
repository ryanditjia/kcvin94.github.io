import * as React from 'react';
import { LayoutWrapperStyle } from './style';

interface Props {
  children: React.Node;
}

const Layout = ({ children }: Props) => (
  <div css={LayoutWrapperStyle}>{children}</div>
);

export default Layout;
