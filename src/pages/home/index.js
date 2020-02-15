import * as React from 'react';
import { Link } from 'gatsby';
import { Container, Layout, Logo } from 'components';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Link to="/budget">
            <Logo scale={0.5} />
          </Link>
        </Container>
        <Container>
          <Link to="/ulalaClatterSimulator">Ulala Clatter Simulator</Link>
        </Container>
      </Layout>
    );
  }
}

export default Home;
