<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex justify-between items-center p-3 hover:bg-lightModeHover dark:hover:bg-darkModeHover">
    <div class="flex items-center gap-4">
      <img class="w-16 h-16 rounded-full object-cover" :src="user.avatar" alt="Avatar" width="50" />
      <div class="user-data dark:text-lightMode">
        <h1>{{ user.nickname }}</h1>
        <p class="truncate max-w-[200px]">{{ user.message }}</p>
      </div>
    </div>
    <font-awesome-icon class="p-3 rounded-2xl dark:text-lightMode hover:bg-[#d3cdc4] dark:hover:bg-gray-500"
      icon="ellipsis-vertical" size="lg" />
  </div>
</template>
