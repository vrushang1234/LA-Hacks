var instanceData = {
  start_location: {
    lat: 0,
    long: 0,
  },
  destination: [],
  image_url: null,

  guesses: 0,
  maxguesses: 5,

  map: null,
  current_circle: null,
};

let userData = {
  date_played: null,
  points: 0,
};
export default instanceData;
export { apiData, userData };
