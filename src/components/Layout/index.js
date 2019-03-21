import * as React from 'react';
import { LayoutWrapperStyle } from './style';

const Layout = ({ children }) => <div css={LayoutWrapperStyle}>{children}</div>;

export default Layout;
