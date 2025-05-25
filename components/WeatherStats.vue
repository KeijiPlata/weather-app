<script setup>
import Stats from '~/components/Status.vue'
defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="bg-black w-full text-custompink max-w-md rounded-md md:rounded-lg p-5 grid grid-cols-3">
        <Status v-for="(item, index) in data" :key="index" :name="item.name" :value="item.value" :icon="item.icon"
            :animation="item.animation" />
    </div>
</template>