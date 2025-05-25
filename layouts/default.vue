<script setup>
import { useWeatherStore } from '~/composables/useWeatherStore'

const store = useWeatherStore()

function onSearch(newCity) {
    store.city.value = newCity    
    store.loadWeather()        
}

await store.loadWeather()
</script>

<template>
    <div
        class="min-h-screen w-full bg-custompink text-black font-roboto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-5">
        <Navbar @search="onSearch" />
        <div class="w-full flex flex-1 items-center justify-center">
            <slot />
        </div>
    </div>
</template>
