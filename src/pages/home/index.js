import * as React from 'react';
import { Container, Layout, Logo } from '../../components';

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <Container>
          <Logo scale={0.5} />
        </Container>
        <Container>
          Content
        </Container>
      </Layout>
    );
  }
}

export default Home;
