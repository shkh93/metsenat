<template>
  <main class="bg-bgcolor">
    <section class="max-w-[1200px] w-full mx-auto items-center">
      <ul class="grid grid-cols-3 gap-7 pt-12">
        <li
          v-for="i of data"
          :key="i.id"
          class="flex justify-start flex-row bg-white py-6 pl-6 mb-9 border rounded-md gap-4"
        >
          <i class="icon-cash text-blue-100 bg-blue-200 text-[30px] p-3 rounded-md"></i>
          <div class="flex flex-col gap-1.5">
            <b class="text-xs font-normal text-grey-200">{{ i.title }}</b>
            <div class="flex row gap-1.5">
              <span class="text-xl font-bold">{{ formatMoneyDecimal(i.amount) }}</span>
              <span class="text-xl font-bold text-grey-300">UZS</span>
            </div>
          </div>
        </li>
      </ul>
      <!-- <div class="grid grid-cols-3 gap-7 pt-12"> -->
      <!-- <div class="flex flex-row bg-white py-6 pl-6 mb-9 border rounded-md gap-4">
          <i class="icon-cash text-blue-100 bg-blue-200 text-[30px] p-3 rounded-md"></i>
          <div class="flex flex-col gap-1.5">
            <h4 class="text-xs font-normal text-grey-200">Jami to‘langan summa</h4>
            <div class="flex row gap-1.5">
              <p class="text-xl font-bold">1 684 325 000</p>
              <p class="text-xl font-bold text-grey-300">UZS</p>
            </div>
          </div>
        </div>

        <div class="flex flex-row bg-white py-6 mb-9 pl-6 border rounded-md gap-4">
          <i class="icon-cash text-yellow-100 bg-yellow-200 text-[30px] p-3 rounded-md"></i>
          <div class="flex flex-col gap-1.5">
            <h4 class="text-xs font-normal text-grey-200">Jami so‘ralgan summa</h4>
            <div class="flex row gap-1.5">
              <p class="text-xl font-bold">14 098 530 000</p>
              <p class="text-xl font-bold text-grey-300">UZS</p>
            </div>
          </div>
        </div>

        <div class="flex flex-row bg-white py-6 pl-6 mb-9 border rounded-md gap-4">
          <i class="icon-cash text-orange-100 bg-orange-200 text-[30px] p-3 rounded-md"></i>
          <div class="flex flex-col gap-1.5">
            <h4 class="text-xs font-normal text-grey-200">To‘lanishi kerak summa</h4>
            <div class="flex row gap-1.5">
              <p class="text-xl font-bold">12 414 205 000</p>
              <p class="text-xl font-bold text-grey-300">UZS</p>
            </div>
          </div>
        </div> -->
      <!-- </div> -->

      <div id="chart" class="bg-white w-[1200px] h-[402px] border rounded-lg"></div>
    </section>
  </main>
</template>

<script setup>
import { formatMoneyDecimal } from '@/utils/formatters'

// import HeaderLayout from '../layout/Header.vue'

const data = [
  {
    id: 1,
    title: 'Jami to‘langan summa',
    amount: 1684325000,
  },
  {
    id: 2,
    title: 'Jami so‘ralgan summa',
    amount: 14098530000,
  },
  {
    id: 3,
    title: 'To‘lanishi kerak summa',
    amount: 12414205000,
  },
]
</script>


