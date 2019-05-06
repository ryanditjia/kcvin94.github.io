import * as React from 'react';
import { Container, Layout } from 'components';
import { GameWrapperStyle, UserWrapperStyle } from './style';

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

class Game extends React.Component {
  state = {
    userLocation: [1, 1],
    tempClick: [0, 0],
  };

  componentDidMount () {
    document.addEventListener('keydown', this.handleUserMove);
    document.addEventListener('mousedown', this.handleBasicAttack);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleUserMove);
    document.removeEventListener('mousedown', this.handleBasicAttack);
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    if (prevState.tempClick !== this.state.tempClick) {
      console.log(this.state.tempClick);
    }
    return null;
  }

  handleUserMove = (event: Event) => {
    const { userLocation } = this.state;

    switch (event.keyCode) {
    case KEY_W:
      this.setState({ userLocation: [userLocation[0], userLocation[1] - 1] });
      break;
    case KEY_A:
      this.setState({ userLocation: [userLocation[0] - 1, userLocation[1]] });
      break;
    case KEY_S:
      this.setState({ userLocation: [userLocation[0], userLocation[1] + 1] });
      break;
    case KEY_D:
      this.setState({ userLocation: [userLocation[0] + 1, userLocation[1]] });
      break;
    default:
      break;
    }
  };

  handleBasicAttack = (event: Event) => {
    const { tempClick } = this.state;

    this.setState({ tempClick: [event.x, event.y] });
  };

  render () {
    const { userLocation } = this.state;

    return (
      <Layout>
        <Container>
          <div css={GameWrapperStyle}>
            <div
              css={UserWrapperStyle({
                xLocation: userLocation[0],
                yLocation: userLocation[1],
              })}
            >
              :)
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Game;
