import * as React from 'react';
import { Layout, Logo } from '../../components';

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <Logo scale={0.5} />
      </Layout>
    );
  }
}

export default Home;
