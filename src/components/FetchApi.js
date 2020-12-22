import API_KEY from '../API_KEY'
const days = 16;

export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=${days}&key=${API_KEY}`
  );
  const results = await response.json();
  return results;
};
