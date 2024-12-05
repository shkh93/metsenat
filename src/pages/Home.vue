<template>
  <!-- <div @click="closeModals"> -->
  <HomeToolbar @open-filter="openFilterModal" />

  <RouterView />

  <div>
    <SponsorsFilterModal :show="showSponsorsModal" @close="showSponsorsModal = false" />
    <StudentsFilterModal :show="showStudentsModal" @close="showStudentsModal = false" />
  </div>
  <!-- </div> -->
</template>

<script setup>
import HomeToolbar from '@/components/Home/Toolbar.vue'
import SponsorsFilterModal from '@/components/Home/SponsorsFilterModal.vue'
import StudentsFilterModal from '@/components/Home/StudentsFilterModal.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()

const showSponsorsModal = ref(false)
const showStudentsModal = ref(false)

const openFilterModal = () => {
  if (route.name === 'Sponsors') {
    showSponsorsModal.value = true
  } else {
    showStudentsModal.value = true
  }
}


</script>
