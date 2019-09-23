import { BLACK } from '../../colors';
import { DisplayStyle } from './style';

const Display = ({ children, color, align, fontSize }) => {
  return <div css={DisplayStyle(color, align, fontSize)}>{children}</div>;
};

Display.defaultProps = {
  color: BLACK,
  align: 'left',
  fontSize: 16,
};

export default Display;
