<template>
  <CModal title="Filter">
    <label class="text-dark-100 text-xs font-medium uppercase mt-7">Talabalik turi</label>
    <CSelect :options="studentDegrees" />

    <label class="text-dark-100 text-xs font-medium mt-7">OTM</label>
    <CSelect :options="studentUniversities" />

    <!-- <form action="" class="flex flex-col mt-7">
      <label class="text-dark-100 text-xs font-medium">Talabalik turi</label>

      <select
        value=""
        class="border outline-none border-grey-100 rounded-md mt-2 bg-grey-600 py-2.5 pl-4 hover:border-blue hover:bg-grey-1200 w-[530px]"
      >
        <option value="" class="text-base font-normal hover:bg-grey-100">Barchasi</option>
        <option value="" class="text-base font-normal hover:bg-grey-100">Bakalavr</option>
        <option value="" class="text-base font-normal hover:bg-grey-100">Magistr</option>
      </select>
    </form> -->

    <!-- <form action="" class="flex flex-col mt-7">
      <label class="text-dark-100 text-xs font-medium">OTM</label>

      <select
        value=""
        class="border outline-none border-grey-100 rounded-md mt-2 bg-grey-600 py-2.5 pl-4 hover:border-blue hover:bg-grey-1200 w-[530px]"
      >
        <option value="" class="text-base font-normal">Barchasi</option>
        <option value="" class="text-base font-normal">
          Toshkent shahridagi INHA Universiteti
        </option>
        <option value="" class="text-base font-normal">O’zbekiston milliy universiteti</option>
        <option value="" class="text-base font-normal">Toshkent davlat texnika universiteti</option>
        <option value="" class="text-base font-normal">
          Toshkent davlat iqtisodiyot universiteti
        </option>
        <option value="" class="text-base font-normal">
          O’zbekiston davlat jahon tillarni uiversiteti
        </option>
      </select>
    </form> -->
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

const studentDegrees = [
  {
    id: 1,
    name: 'Bakalavr',
  },
  {
    id: 2,
    name: 'Magistr',
  },
]

const studentUniversities = [
  {
    id: 1,
    name: 'Toshkent shahridagi INHA Universiteti',
  },
  {
    id: 2,
    name: 'O’zbekiston milliy universiteti',
  },
  {
    id: 3,
    name: 'Toshkent davlat texnika universiteti',
  },
  {
    id: 4,
    name: 'Toshkent davlat iqtisodiyot universiteti',
  },
  {
    id: 5,
    name: 'O’zbekiston davlat jahon tillarni uiversiteti',
  },
]
</script>

<style scoped></style>
