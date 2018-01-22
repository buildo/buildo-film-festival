import React, { Component } from 'react';
import FlexView from 'react-flexview';
import shuffle from 'lodash/shuffle';
import * as requests from './requests';

import 'react-flexview/lib/flexView.css';

const levels = {
  Keyword: requests.getKeyword,
  Genre: requests.getGenre,
  Country: requests.getCountry,
  Director: requests.getDirector,
  'Director of photography': requests.getPhotographyDirector,
  'Award winner': requests.getWinnerOfAFestival
}

const Level = ({ content }) => (
  <FlexView
    width='100%'
    hAlignContent='center'
    style={{
      height: 100,
      lineHeight: '100px',
      background: 'lightblue'
    }}
  >
    {content}
  </FlexView>
);

class App extends Component {

  state = {
    firstLevel: null,
    secondLevel: null
  }

  selectFirstLevel = () => {
    const firstLevels = Object.keys(levels);
    const firstLevel = shuffle(firstLevels)[0];

    if (firstLevel === this.state.firstLevel) {
      this.selectFirstLevel();
    } else {
      this.setState({ firstLevel });
    }
  }

  selectSecondLevel = () => {
    levels[this.state.firstLevel]().then(secondLevel => this.setState({ secondLevel }));
  }

  render() {
    const { firstLevel, secondLevel } = this.state;

    return (
      <FlexView width='100%'>
        <FlexView column grow hAlignContent='center'>
          {firstLevel && <Level content={firstLevel} />}
          {secondLevel && <Level content={secondLevel} />}
          {!firstLevel && (
            <button
              onClick={this.selectFirstLevel}
              style={{
                marginTop: 50,
                width: 200,
                lineHeight: '200px',
                borderRadius: '100%',
                background: 'darkseagreen',
                cursor: 'pointer'
              }}
            >
              Buildo Film Festival
            </button>
          )}
          {firstLevel && !secondLevel && (
            <FlexView width='100%'>
              <FlexView
                grow
                height={30}
                style={{ background: 'lightgray', cursor: 'pointer' }}
                hAlignContent='center'
                vAlignContent='center'
                onClick={this.selectFirstLevel}
              >
                Retry
              </FlexView>
              <FlexView
                grow
                height={30}
                style={{ background: 'lightgray', cursor: 'pointer' }}
                hAlignContent='center'
                vAlignContent='center'
                onClick={this.selectSecondLevel}
              >
                Continue
              </FlexView>
            </FlexView>
          )}
        </FlexView>
      </FlexView>
    );
  }
}

export default App;
