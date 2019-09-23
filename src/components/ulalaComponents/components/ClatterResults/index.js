import * as React from 'react';
import Label from '../Label';
import Display from '../Display';
import {
  getCalculations,
  getAttributeColor,
  formatNumber,
} from '../../helpers';
import { ATTRIBUTES, REGIONS, TYPES } from '../../constants';
import { GREEN } from '../../colors';
import {
  ClatterResultsWrapperStyle,
  InfoWrapperStyle,
  DescriptionStyle,
} from './style';

const ClatterResults = ({ clatterData }) => {
  const totalCalculations = getCalculations(clatterData);

  return (
    <div css={ClatterResultsWrapperStyle}>
      <Display align="center" fontSize={24}>
        Results
      </Display>

      {ATTRIBUTES.map(attributeKey => {
        if (totalCalculations[attributeKey] > 0) {
          return (
            <div css={InfoWrapperStyle}>
              <Label align="center" color={getAttributeColor(attributeKey)}>
                {attributeKey}
              </Label>
              <Display
                align="center"
                color={getAttributeColor(attributeKey)}
                fontSize={20}
              >
                {formatNumber(totalCalculations[attributeKey])}
              </Display>
            </div>
          );
        }
      })}

      {REGIONS.map(regionKey => {
        const region = totalCalculations[regionKey];

        if (region) {
          return (
            <div css={InfoWrapperStyle}>
              <Label align="center">{regionKey}</Label>
              <div css={DescriptionStyle}>
                {region.descriptions.map((description, index) => {
                  return (
                    <>
                      <span>{description}</span>
                      {region.values.length > index && (
                        <span style={{ color: GREEN }}>
                          {region.values[index]}
                        </span>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          );
        }
      })}

      {TYPES.map(typeKey => {
        const type = totalCalculations[typeKey];

        if (type) {
          return (
            <div css={InfoWrapperStyle}>
              <Label align="center">{typeKey}</Label>
              <div css={DescriptionStyle}>
                {type.descriptions.map((description, index) => {
                  return (
                    <>
                      <span>{description}</span>
                      {type.values.length > index && (
                        <span style={{ color: GREEN }}>
                          {type.values[index]}
                        </span>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ClatterResults;
