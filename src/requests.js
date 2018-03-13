import shuffle from 'lodash/shuffle';

function getRandom(res) {
  return shuffle(
    res.records
      .filter(r => Object.keys(r.fields).length > 0)
      .map(r => r.fields[Object.keys(r.fields)[0]])
  )[0];
}

const get = table => () => (
  fetch(`https://api.airtable.com/v0/appDKKt5lJdd7maB1/${table}?api_key=keyRXab9tyXiaFoAd`)
    .then(res => res.json())
    .then(getRandom)
);

export default {
  Keyword: get('Keywords'),
  Genre: get('Genres'),
  Country: get('Country'),
  Director: get('Director'),
  'Director of photography': get('DirectorOfPhotography'),
  'Award winner': get('AwardWinner')
}
