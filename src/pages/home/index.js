import * as React from 'react';
import Container from 'components/Container';
import Layout from 'components/Layout';
import Logo from 'components/Logo';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Logo scale={0.5} />
        </Container>
      </Layout>
    );
  }
}

export default Home;
