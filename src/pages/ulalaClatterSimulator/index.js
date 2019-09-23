import * as React from 'react';
import ClatterPicker from 'components/ulalaComponents/components/ClatterPicker';
import ClatterCard from 'components/ulalaComponents/components/ClatterCard';
import ClatterResults from 'components/ulalaComponents/components/ClatterResults';
import {
  AppWrapperStyle,
  HeaderWrapperStyle,
  ClatterCardsWrapperStyle,
  PlaceholderCardStyle,
} from 'components/ulalaComponents/style';

class UlalaClatterSimulator extends React.Component {
  state = {
    clatterData: [],
  };

  addClatter = clatter => {
    const { clatterData } = this.state;

    if (clatterData.length >= 9) return;

    this.setState({
      clatterData: [
        ...clatterData,
        {
          ...clatter,
          star: 'oneStar',
        },
      ],
    });
  };

  deleteClatter = index => {
    const { clatterData } = this.state;

    const clonedData = [...clatterData];
    clonedData.splice(index, 1);

    this.setState({ clatterData: clonedData });
  };

  chooseStar = (clatter, index, starChoice) => {
    const { clatterData } = this.state;

    if (starChoice !== clatter.star) {
      const clonedData = [...clatterData];
      clonedData[index].star = starChoice;

      this.setState({ clatterData: clonedData });
    }
  };

  render () {
    const { clatterData } = this.state;
    const placeholders = [];
    for (let i = clatterData.length + 1; i < 10; i++) {
      placeholders.push(i);
    }

    return (
      <div css={AppWrapperStyle}>
        <div css={HeaderWrapperStyle}>Ulala Clatter Card Simulator</div>
        <ClatterPicker addClatter={this.addClatter} />

        <div css={ClatterCardsWrapperStyle}>
          {clatterData.map((clatter, index) => {
            return (
              <ClatterCard
                clatter={clatter}
                deleteClatter={() => this.deleteClatter(index)}
                chooseStar={starChoice =>
                  this.chooseStar(clatter, index, starChoice)
                }
              />
            );
          })}
          {placeholders.map(number => {
            return <div css={PlaceholderCardStyle}>{number}</div>;
          })}
        </div>

        <ClatterResults clatterData={clatterData} />
      </div>
    );
  }
}

export default UlalaClatterSimulator;
