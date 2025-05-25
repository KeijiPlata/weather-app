<script setup>
import { ref, onMounted, watch } from 'vue'

import { useWeatherStore } from '~/composables/useWeatherStore'

const {
    city,
    temperature,
    date,
    condition,
    summary,
    location,
    todayWeather,
    weeklyWeather,
    loadWeather
} = useWeatherStore()

await loadWeather() 

console.log("location", location)
</script>


<template>
    <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-10 gap-7">
        <div class="w-full h-full flex flex-col justify-center lg:items-end items-center">
            <div class="flex flex-col items-center justify-center gap-3">
                <div class="flex flex-col gap-1 items-center w-full justify-center">
                    <h2 class="bg-black px-7 py-1 rounded-full text-custompink text-xl text-center">{{ condition }}</h2>
                    <div class="flex flex-row items-center justify-center">
                        <Icon name="material-symbols:location-on" class="text-2xl" />
                        <h2 class="text-lg">{{ location }}</h2>
                    </div>
                </div>
                <div class="flex w-full flex-col items-center justify-center">
                    <h1 class="text-9xl font-ledger leading-none font-bold">{{ temperature }}&deg;</h1>
                    <p class="text-lg">{{ date }}</p>
                </div>
                <p class="max-w-md text-justify">
                   {{ summary }}
                </p>
            </div>
        </div>
        <div class="w-full h-full flex flex-col justify-center lg:items-start items-center gap-5">
            <WeatherStats :data="todayWeather" />
            <div class="flex flex-col items-start justify-center gap-3 w-full max-w-md">
                <h2 class="text-xl font-bold">Weekly Forecast</h2>
                <div class="flex flex-row items-center justify-center gap-3 w-full">
                    <ForecastCards v-for="(item, index) in weeklyWeather" :key="index" :temperature="item.temperature"
                        :date="item.date" :icon="item.icon" />
                </div>
            </div>
        </div>
    </div>
</template>
