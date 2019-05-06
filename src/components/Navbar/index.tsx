import * as React from 'react';
import { NavbarWrapperStyle } from './style';

interface Props {
  children: React.Node;
}

const Navbar = ({ children }: Props) => (
  <div css={NavbarWrapperStyle}>{children}</div>
);

export default Navbar;
