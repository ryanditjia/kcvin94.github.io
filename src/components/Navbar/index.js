import * as React from "react";
import { NavbarWrapperStyle } from "./style";

const Navbar = ({ children }) => (
  <div css={NavbarWrapperStyle}>
    {children}
  </div>
);

export default Navbar;
