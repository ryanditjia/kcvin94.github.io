import React from "react";
import { Link } from "gatsby";
import { Layout } from "../../components";

export default () => (
  <Layout>
    Home <Link to="/test">go to test</Link>
  </Layout>
);
