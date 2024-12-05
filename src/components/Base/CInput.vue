<template>
  <div class="input relative mt-2">
    <input
      v-model="inputValue"
      autocomplete="off"
      type
      id="input"
      name="input"
      placeholder
      class="input w-full h-full py-3 pl-4 outline-none focus:border-blue transition-all duration-300 text-dark-200"
    />
  </div>
  <pre>{{ value }}</pre>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  placeholder: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    required: true,
  },
})

const inputValue = ref()
</script>
