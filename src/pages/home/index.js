import * as React from 'react';
import { Container, Layout, Logo } from '../../components';

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <Container>
          Game
        </Container>
        <Container>
          <Logo scale={0.5} />
        </Container>
      </Layout>
    );
  }
}

export default Home;
