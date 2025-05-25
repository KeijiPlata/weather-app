import { ref } from "vue";
import { useWeather } from "./useWeather";
import type { WeatherStat, WeeklyForecast } from "~/types/weatherStore";

export function useWeatherStore() {
  const city = ref<string>("Manila");
  const temperature = ref<number>(0);
  const feelsLike = ref<number>(0);
  const condition = ref<string>("");
  const location = ref<string>("");
  const date = ref<string>("");
  const todayWeather = ref<WeatherStat[]>([]);
  const weeklyWeather = ref<WeeklyForecast[]>([]);
  const summary = ref<string>("");

  function getWeatherIcon(condition: string): string {
    const iconMap: Record<string, string> = {
      sunny: "lucide:sun",
      clear: "lucide:sun",
      cloudy: "lucide:cloud",
      overcast: "lucide:cloud",
      "partly cloudy": "lucide:cloud-sun",
      rain: "lucide:cloud-rain",
      "moderate rain": "lucide:cloud-rain",
      "light rain": "lucide:cloud-rain",
      "heavy rain": "lucide:cloud-rain",
      thunderstorm: "lucide:cloud-lightning",
      snow: "lucide:snowflake",
      fog: "lucide:cloud-fog",
      mist: "lucide:cloud-fog",
      drizzle: "lucide:cloud-drizzle",
      haze: "lucide:cloud",
      windy: "lucide:wind",
    };

    const key = condition.trim().toLowerCase();
    return iconMap[key] || "lucide:cloud";
  }

  async function loadWeather() {
    const data = await useWeather(city.value);

    temperature.value = data.current.temp_c;
    feelsLike.value = data.current.feelslike_c;
    condition.value = data.current.condition.text;
    location.value = data.location.name;
    date.value = new Date(data.location.localtime).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    todayWeather.value = [
      {
        name: "Wind",
        value: `${data.current.wind_kph} km/h`,
        icon: "lucide:wind",
        animation: "animate-wind",
      },
      {
        name: "Humidity",
        value: `${data.current.humidity}%`,
        icon: "lucide:droplet",
        animation: "animate-bounce",
      },
      {
        name: "Visibility",
        value: `${data.current.vis_km} km`,
        icon: "lucide:eye",
        animation: "animate-blink",
      },
    ];

    weeklyWeather.value = data.forecast.forecastday.slice(1, 5).map((day) => ({
      temperature: day.day.avgtemp_c,
      icon: getWeatherIcon(day.day.condition.text),
      date: new Date(day.date).toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
      }),
    }));

    summary.value = `It feels like ${feelsLike.value}°C in ${
      location.value
    } today, with ${condition.value.toLowerCase()}. Expect temperatures to range between ${
      data.forecast.forecastday[0].day.mintemp_c
    }°C and ${data.forecast.forecastday[0].day.maxtemp_c}°C.`;
  }

  return {
    city,
    temperature,
    feelsLike,
    condition,
    location,
    date,
    todayWeather,
    weeklyWeather,
    summary,
    loadWeather,
  };
}
