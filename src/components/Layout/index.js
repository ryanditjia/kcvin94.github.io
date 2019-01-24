import * as React from "react";
import { LayoutWrapperStyle, LayoutContentWrapperStyle } from "./style";

const Layout = ({ children }) => (
  <div css={LayoutWrapperStyle}>
    <div css={LayoutContentWrapperStyle}>{children}</div>
  </div>
);

export default Layout;
