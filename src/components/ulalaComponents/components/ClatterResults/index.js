import Label from '../Label';
import Display from '../Display';
import { getAttributeCalculations, getAttributeColor, formatNumber } from '../../helpers';
import {
  ATTRIBUTES,
  ATK,
  HP,
  ARMOR,
  IMPALE,
  CRIT,
  TENACITY,
  BLOCK,
} from '../../constants';
import { ClatterResultsWrapperStyle, AttributeWrapperStyle } from './style';

const ClatterResults = ({ clatterData }) => {
  const totalAttributes = getAttributeCalculations(clatterData);

  return (
    <div css={ClatterResultsWrapperStyle}>
      {ATTRIBUTES.map(attributeKey => {
        return (
          <div css={AttributeWrapperStyle}>
            <Label color={getAttributeColor(attributeKey)}>
              {attributeKey}
            </Label>
            <Display color={getAttributeColor(attributeKey)}>
              {formatNumber(totalAttributes[attributeKey])}
            </Display>
          </div>
        );
      })}
    </div>
  );
};

export default ClatterResults;
