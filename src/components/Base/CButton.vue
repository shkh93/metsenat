<template>
  <button class="py-3.5 px-8 w-full bg-blue text-white rounded-md border hover:bg-white hover:border-blue hover:text-blue duration-300"
  :class="[btnClass ]">
    
    <i v-if="iconName" :class="iconName"></i>
    <slot/>
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  text: {
    type: String,
    default: 'Button', 
  },
  iconName: {
    type: String,
    default: '', // icon-clean
  },
  btnClass: {
    type: String,
    default: ''
  }
})
</script>





<!-- <button>
  <i v-if="iconName" :class="iconName"></i>
  <span>Button </span>
</button> -->