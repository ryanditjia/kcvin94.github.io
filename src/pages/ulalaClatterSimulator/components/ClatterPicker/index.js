import MiniClatterCard from './components/MiniClatterCard';
import { CLATTER_LIST } from '../../constants';
import { ClatterPickerWrapperStyle } from './style';

const ClatterPicker = ({ addClatter }) => {
  return (
    <div css={ClatterPickerWrapperStyle}>
      {CLATTER_LIST.map(clatter => (
        <MiniClatterCard clatter={clatter} addClatter={addClatter} />
      ))}
    </div>
  );
};

export default ClatterPicker;
