import React from "react";
import headerStyles from "./header.module.css";

export default props => (
  <h1 className={headerStyles.header}>{props.headerText}</h1>
);
