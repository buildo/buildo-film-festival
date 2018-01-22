import shuffle from 'lodash/shuffle';

function getRandom(res) {
  return shuffle(
    res.records
      .filter(r => Object.keys(r.fields).length > 0)
      .map(r => r.fields[Object.keys(r.fields)[0]])
  )[0];
}

export const getKeyword = () => (
  fetch('https://api.airtable.com/v0/appDKKt5lJdd7maB1/Keywords?api_key=keyRXab9tyXiaFoAd')
    .then(res => res.json())
    .then(getRandom)
);

export const getGenre = () => (
  fetch('https://api.airtable.com/v0/appDKKt5lJdd7maB1/Genres?api_key=keyRXab9tyXiaFoAd')
    .then(res => res.json())
    .then(getRandom)
);

export const getCountry = () => (
  fetch('https://api.airtable.com/v0/appDKKt5lJdd7maB1/Country?api_key=keyRXab9tyXiaFoAd')
    .then(res => res.json())
    .then(getRandom)
);

export const getDirector = () => (
  fetch('https://api.airtable.com/v0/appDKKt5lJdd7maB1/Director?api_key=keyRXab9tyXiaFoAd')
    .then(res => res.json())
    .then(getRandom)
);

export const getPhotographyDirector = () => (
  fetch('https://api.airtable.com/v0/appDKKt5lJdd7maB1/DirectorOfPhotography?api_key=keyRXab9tyXiaFoAd')
    .then(res => res.json())
    .then(getRandom)
);

export const getWinnerOfAFestival = () => (
  fetch('https://api.airtable.com/v0/appDKKt5lJdd7maB1/AwardWinner?api_key=keyRXab9tyXiaFoAd')
    .then(res => res.json())
    .then(getRandom)
);
