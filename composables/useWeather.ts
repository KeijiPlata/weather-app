import type { WeatherData } from '~/types/weather'

export const useWeather = async (city: string = "davao") => {
  const config = useRuntimeConfig();
  const apiKey = config.public.weatherApiKey;

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=14&aqi=no&alerts=no`;

  try {
    const data = await $fetch<WeatherData>(url);
    console.log("weather data:", data);

    if (!data || !data.current) {
      throw new Error("Weather data is missing expected structure");
    }

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch weather");
  }
};
