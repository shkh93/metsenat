<template>
  <div v-if="show" class="bg-black/50 fixed inset-0"></div>
  <div
    v-if="show"
    class="bg-grey-600 fixed z-10 left-1/2 top-96 -translate-x-1/2 -translate-y-1/2 inset-0 p-7 w-[586px] h-fit border rounded-xl"
  >
    <div class="flex justify-between pl-2">
      <h2 class="text-navy-100 text-2xl font-bold">{{ title }}</h2>
      <button class="icon-exit text-grey-300 text-2xl" @click="$emit('close')"></button>
    </div>
    <div class="border-2 border-grey-50 w-[520px] my-7"></div>

    <slot />
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: 'Modal',
  },
})
</script>
