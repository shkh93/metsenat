<template>
  <CModal title="Filter">
    <label class="text-dark-100 text-xs font-medium mt-7">ARIZA HOLATI</label>
    <CSelect :options="sponsorStatuses" />

    <!-- <form action="" class="flex flex-col mt-7">
      <label class="text-dark-100 text-xs font-medium">ARIZA HOLATI</label>

      <select
        value=""
        class="border border-grey-100 rounded-md mt-2 bg-grey-600 py-2.5 pl-4 hover:border-blue hover:bg-grey-1200 w-[530px]"
      >
        <option value="" class="text-base font-normal">Barchasi</option>
        <option value="" class="text-base font-normal">Yangi</option>
        <option value="" class="text-base font-normal">Moderatsiyada</option>
        <option value="" class="text-base font-normal">Tasdiqlangan</option>
        <option value="" class="text-base font-normal">Bekor qilingan</option>
      </select>
    </form> -->

    <h4 class="mt-7 text-dark-100 text-xs font-medium">HOMIYLIK SUMMASI</h4>

    <div class="grid gap-3 md:grid-cols-4 mt-4">
      <button
        class="px-8 py-4 border text-center text-sm font-medium text-navy-200 bg-grey-100 rounded-md"
      >
        Barchasi
      </button>
      <button
        class="px-2 py-4 text-center border-2 rounded-md border-grey-100 bg-grey-900 hover:border-blue-400 text-sm font-medium text-navy-200"
        v-for="(amount, index) in amounts"
        :key="index"
      >
        {{ amount.value }}
        <span class="text-blue-400 text-xs font-medium">{{ amount.currency }}</span>
      </button>
    </div>
    <form action="" class="flex flex-col mt-7">
      <label class="text-dark-100 text-xs font-medium">SANA</label>
      <input
        type="date"
        class="mt-2 py-2.5 pl-4 pr-2.5 outline-none border rounded-md border-grey-100 bg-grey-1200 w-[253px]"
      />
    </form>
    <div class="border-2 border-grey-50 w-[520px] mt-7"></div>

    <div class="mt-7 flex flex-row gap-4 items-end justify-end">
      <button
        class="py-2 px-8 border border-grey-300 rounded-md items-center justify-center text-grey-300 text-sm font-medium hover:border-blue-300 duration-300 hover:text-blue-300"
      >
        <i class="icon-clear text-[24px]"></i>
        Tozalash
      </button>
      <button
        class="py-2 px-8 border rounded-md bg-blue-300 text-grey-1200 text-sm font-medium hover:bg-grey-1200 hover:text-blue-300 duration-300 hover:border-blue-300"
      >
        <i class="icon-eye-result text-[24px]"></i>
        Natijalarni ko‘rish
      </button>
    </div>
  </CModal>

  
</template>

<script setup>
import CModal from '@/components/Base/CModal.vue'
import CSelect from '../Base/CSelect.vue'
import { ref } from 'vue'

const sponsorStatuses = [
  {
    id: 1,
    name: 'Yangi',
  },
  {
    id: 2,
    name: 'Moderatsiyada',
  },
  {
    id: 3,
    name: 'Tasdiqlangan',
  },
  {
    id: 4,
    name: 'Bekor qilingan',
  },
]
const amounts = ref([
  {
    value: '1 000 000',
    currency: 'UZS',
  },
  {
    value: '5 000 000',
    currency: 'UZS',
  },
  {
    value: '7 000 000',
    currency: 'UZS',
  },
  {
    value: '10 000 000',
    currency: 'UZS',
  },
  {
    value: '30 000 000',
    currency: 'UZS',
  },
  {
    value: '50 000 000',
    currency: 'UZS',
  },
])
</script>

<style scoped></style>
