<script setup>
import { ref } from 'vue';

const todayWeather = ref([
    {
        name: 'Wind',
        value: '4km/h',
        icon: 'lucide:wind',
        animation: 'animate-wind'
    },
    {
        name: 'Humidity',
        value: '48%',
        icon: 'lucide:droplet',
        animation: 'animate-bounce'
    },
    {
        name: 'Visibility',
        value: '1.68km',
        icon: 'lucide:eye',
        animation: 'animate-blink'
    }
])
</script>

<template>
    <div class="w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-10 gap-7">
        <div class="w-full h-full flex flex-col justify-center md:items-end items-center">
            <div class="flex flex-col items-center justify-center gap-3">
                <div class="flex flex-col gap-1 items-center w-full justify-center">
                    <h2 class="bg-black px-7 py-1 rounded-full text-custompink text-xl text-center">Sunny</h2>
                    <div class="flex flex-row items-center justify-center">
                        <Icon name="material-symbols:location-on" class="text-2xl" />
                        <h2 class="text-lg">Quezon City</h2>
                    </div>
                </div>
                <div class="flex w-full flex-col items-center justify-center">
                    <h1 class="text-[10rem] font-ledger leading-none font-bold">31&deg;</h1>
                    <p class="text-lg">Saturday, May 24</p>
                </div>
                <p class="max-w-md text-justify">
                    It feels like 28°C in Quezon City today, with high humidity and light rain in the afternoon.
                    Expect temperatures to range between 22°C and 30°C throughout the day.
                </p>
            </div>
        </div>
        <div class="w-full h-full flex flex-col justify-center md:items-start items-center gap-5">
            <WeatherStats :data="todayWeather" />
            <div class="flex flex-col items-start justify-center gap-3 w-full max-w-md">
                <h2 class="text-xl font-bold">Weekly Forecast</h2>
                <div class="flex flex-row items-center justify-center gap-3 w-full">
                    <div class="w-full outline-2 p-3 md:p-5 rounded-md flex flex-col items-center justify-center gap-2">
                        <h2 class="text-xl font-bold">26&deg;</h2>
                        <Icon name="lucide:cloud" class="text-3xl" />
                        <p class="text-xs md:text-base">24 May</p>
                    </div>
                    <div class="w-full outline-2 p-3 md:p-5 rounded-md flex flex-col items-center justify-center gap-2">
                        <h2 class="text-xl font-bold">26&deg;</h2>
                        <Icon name="lucide:sun" class="text-3xl" />
                        <p class="text-xs md:text-base">24 May</p>
                    </div>
                    <div class="w-full outline-2 p-3 md:p-5 rounded-md flex flex-col items-center justify-center gap-2">
                        <h2 class="text-xl font-bold">26&deg;</h2>
                        <Icon name="lucide:cloud-rain" class="text-3xl" />
                        <p class="text-xs md:text-base">24 May</p>
                    </div>
                    <div class="w-full outline-2 p-3 md:p-5 rounded-md flex flex-col items-center justify-center gap-2">
                        <h2 class="text-xl font-bold">26&deg;</h2>
                        <Icon name="lucide:cloud-lightning" class="text-3xl" />
                        <p class="text-xs md:text-base">24 May</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
