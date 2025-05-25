import type { WeatherData } from '~/types/weather'

export const useWeather = async (city: string = "davao") => {
  const config = useRuntimeConfig();
  const apiKey = config.public.weatherApiKey;

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=14&aqi=no&alerts=no`;

  const { data, error } = await useFetch<WeatherData>(url);

  console.log("weather data:", data.value);

  if (error.value) {
    console.error("Fetch error:", error.value);
    throw new Error("Failed to fetch weather");
  }

  if (!data.value || !data.value.current) {
    throw new Error("Weather data is missing expected structure");
  }

  return data.value;
};
