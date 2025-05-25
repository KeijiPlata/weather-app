export interface WeatherStat {
  name: string;
  value: string;
  icon: string;
  animation: string;
}

export interface WeeklyForecast {
  temperature: number;
  icon: string;
  date: string;
}

export interface WeatherStore {
  city: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  location: string;
  date: string;
  todayWeather: WeatherStat[];
  weeklyWeather: WeeklyForecast[];
  summary: string;
}
