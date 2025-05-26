<script setup>
defineProps({
    name: String,
    value: String,
    icon: String,
    animation: String
})
</script>

<template>
    <div class="w-full text-center flex flex-col gap-2 items-center justify-center">
        <Icon :name="icon" :class="['md:text-5xl text-4xl text-custompink', animation]" />
        <div class="flex flex-col items-center justify-center">
            <h2 class="md:text-2xl text-xl">{{ value }}</h2>
            <p class="text-xs">{{ name }}</p>
        </div>
    </div>
</template>
