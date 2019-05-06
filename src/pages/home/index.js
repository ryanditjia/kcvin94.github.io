import * as React from 'react';
import { Link } from 'gatsby';
import { Container, Layout, Logo } from 'components';

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <Container>
          <Logo scale={0.5} />
        </Container>
        <Container>
          <Link to="/game">Play a game :)</Link>
        </Container>
      </Layout>
    );
  }
}

export default Home;
