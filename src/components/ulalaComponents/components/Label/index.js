import { LabelStyle } from './style';

const Label = ({ children, color, align }) => {
  return <div css={LabelStyle(color, align)}>{children}</div>;
};

Label.defaultProps = {
  color: 'rgba(0, 0, 0, 0.5)',
  align: 'left',
};

export default Label;
