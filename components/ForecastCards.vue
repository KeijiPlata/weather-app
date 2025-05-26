<script setup>
    defineProps({
        temperature: String,
        icon: String,
        date: String,
    })
</script>

<template>
    <div class="w-full outline-2 p-3 md:p-5 rounded-md flex flex-col items-center justify-center gap-2">
        <h2 class="text-xl font-bold">{{ temperature }}&deg;</h2>
        <Icon :name="icon" class="md:text-3xl text-2xl" />
        <p class="text-xs md:text-base">{{ date }}</p>
    </div>
</template>