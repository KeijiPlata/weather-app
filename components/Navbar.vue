<script setup>
const emit = defineEmits(['search'])
const searchQuery = ref('')

function handleSearch() {
  emit('search', searchQuery.value)
}
</script>

<template>
  <div class="w-full max-w-md flex flex-row items-center gap-2">
    <UInput
      v-model="searchQuery"
      icon="i-lucide-search"
      size="lg"
      placeholder="Search ..."
      color="neutral"
      @keyup.enter="handleSearch"
      class="flex-1"
      :ui="{
        base: 'bg-custompink border border-black text-black placeholder:text-black',
        leadingIcon: 'text-black'
      }"
    />
    <Icon name="lucide:ellipsis-vertical" class="text-3xl text-black" />
  </div>
</template>
