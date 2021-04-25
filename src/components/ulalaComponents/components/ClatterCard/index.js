import Label from '../Label';
import Display from '../Display';
import {
  getRarityColor,
  getRegionImage,
  getTypeImage,
  getAttributeColor,
  formatNumber,
} from '../../helpers';
import {
  ClatterCardWrapperStyle,
  DeleteButtonStyle,
  ImageStyle,
  CardInfoWrapperStyle,
  RegionsWrapperStyle,
  InfoWrapperStyle,
  IconImageStyle,
  StarButtonsWrapperStyle,
  StarButtonStyle,
  AttributeWrapperStyle,
  BonusInfoStyle,
} from './style';

const ClatterCard = ({ clatter, deleteClatter, chooseStar }) => {
  const { name, image, rarity, region, type, bonus, star } = clatter;

  return (
    <div css={ClatterCardWrapperStyle}>
      <button onClick={deleteClatter} css={DeleteButtonStyle}>
        ×
      </button>

      <img src={image} css={ImageStyle} />

      <Display align="center" fontSize={18}>
        {name}
      </Display>

      <Display color={getRarityColor(rarity)} align="center" fontSize={14}>
        {rarity}
      </Display>

      <div css={CardInfoWrapperStyle}>
        <div css={RegionsWrapperStyle}>
          {region.map(region => (
            <div css={InfoWrapperStyle}>
              <img src={getRegionImage(region)} css={IconImageStyle} />
              <Display>{region}</Display>
            </div>
          ))}
        </div>

        <div css={InfoWrapperStyle}>
          <img src={getTypeImage(type)} css={IconImageStyle} />
          <Display>{type}</Display>
        </div>

        <div css={StarButtonsWrapperStyle}>
          <button
            onClick={() => chooseStar('oneStar')}
            css={StarButtonStyle(star === 'oneStar')}
          >
            ⭐
          </button>
          <button
            onClick={() => chooseStar('twoStar')}
            css={StarButtonStyle(star === 'twoStar')}
          >
            ⭐⭐
          </button>
          <button
            onClick={() => chooseStar('threeStar')}
            css={StarButtonStyle(star === 'threeStar')}
          >
            ⭐⭐⭐
          </button>
        </div>

        <div css={InfoWrapperStyle}>
          {clatter[star].map(stat => (
            <div css={AttributeWrapperStyle}>
              <Label color={getAttributeColor(stat.attribute)} align="center">
                {stat.attribute}
              </Label>
              <Display color={getAttributeColor(stat.attribute)} align="center">
                {formatNumber(stat.value)}
              </Display>
            </div>
          ))}
        </div>

        {bonus && (
          <div css={BonusInfoStyle}>
            <Label align="center">BONUS</Label>
            {bonus}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClatterCard;
