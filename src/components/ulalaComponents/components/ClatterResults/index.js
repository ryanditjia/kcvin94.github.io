import Label from '../Label';
import Display from '../Display';
import {
  getAttributeCalculations,
  getAttributeColor,
  formatNumber,
} from '../../helpers';
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
      <Display align="center" fontSize={24}>Results</Display>

      {ATTRIBUTES.map(attributeKey => {
        if (totalAttributes[attributeKey] > 0) {
          return (
            <div css={AttributeWrapperStyle}>
              <Label align="center" color={getAttributeColor(attributeKey)}>
                {attributeKey}
              </Label>
              <Display align="center" color={getAttributeColor(attributeKey)} fontSize={20}>
                {formatNumber(totalAttributes[attributeKey])}
              </Display>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ClatterResults;
