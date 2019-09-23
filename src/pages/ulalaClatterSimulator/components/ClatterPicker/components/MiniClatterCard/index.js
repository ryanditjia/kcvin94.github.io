import Display from '../../../Display';
import { GREEN } from '../../../../colors';
import {
  MiniClatterCardWrapperStyle,
  ImageStyle,
  HoverLabelStyle,
} from './style';

const MiniClatterCard = ({ clatter, addClatter }) => {
  return (
    <button
      css={MiniClatterCardWrapperStyle}
      onClick={() => addClatter(clatter)}
    >
      <img src={clatter.image} css={ImageStyle} />

      <Display align="center">{clatter.name}</Display>

      <span css={HoverLabelStyle}>
        <Display align="center" color={GREEN}>
          Add To Deck
        </Display>
      </span>
    </button>
  );
};

export default MiniClatterCard;
