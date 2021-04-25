import * as React from 'react';
import ClatterPicker from 'components/ulalaComponents/components/ClatterPicker';
import ClatterCard from 'components/ulalaComponents/components/ClatterCard';
import ClatterResults from 'components/ulalaComponents/components/ClatterResults';
import Display from 'components/ulalaComponents/components/Display';
import {
  AppWrapperStyle,
  BodyWrapperStyle,
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
        <ClatterPicker addClatter={this.addClatter} />

        <div css={BodyWrapperStyle}>
          <div css={HeaderWrapperStyle}>
            <Display align="center" fontSize={24}>
              Ulala Clatter Card Simulator V 1.01
            </Display>{' '}
            <Display align="center" fontSize={14} color="rgba(0, 0, 0, 0.5)">
              By Delighte & Jelighte (NA Server 1 Allosaurus)
            </Display>
            <Display align="center" fontSize={12} color="rgba(0, 0, 0, 0.3)">
              Last Updated: Sep 24, 2019
            </Display>
            <br />
            <Display align="center" fontSize={13} color="rgba(0, 0, 0, 0.5)">
              {'Click '}
              <a href="https://docs.google.com/spreadsheets/d/1l-kDoWsE45-C6h1ejUWNtoShZ2_Oq5Xu_y3idrMdz6U/edit#gid=0">
                here
              </a>
              {' for Ulala Clatter Chart (Google Sheets)'}
            </Display>
          </div>

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
        </div>

        <ClatterResults clatterData={clatterData} />
      </div>
    );
  }
}

export default UlalaClatterSimulator;
