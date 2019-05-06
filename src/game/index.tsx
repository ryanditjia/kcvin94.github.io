import * as React from 'react';
import { GameWrapperStyle, UserWrapperStyle } from './style';

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

class Game extends React.Component {
  state = {
    userLocation: [1, 1],
  };

  componentDidMount () {
    document.addEventListener('keydown', this.handleUserMove);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleUserMove);
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

  render () {
    const { userLocation } = this.state;

    return (
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
    );
  }
}

export default Game;
