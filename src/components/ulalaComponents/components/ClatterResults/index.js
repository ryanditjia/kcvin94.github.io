import { ClatterResultsWrapperStyle } from './style';

const ClatterResults = ({ clatterData }) => {
  return <div css={ClatterResultsWrapperStyle}>{clatterData.length}Calculations go here</div>;
};

export default ClatterResults;
