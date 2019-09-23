import { ClatterResultsWrapperStyle } from './style';

const ClatterResults = ({ clatterData }) => {
  return <div css={ClatterResultsWrapperStyle}>{clatterData.length}</div>;
};

export default ClatterResults;
