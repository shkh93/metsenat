<template>
  <div class="max-w-[1200px] w-full mx-auto items-center bg-grey-900">
    <div class="py-8 flex gap-4 items-center">
      <RouterLink to="/students">
      <img src="/public/svg/chevron-left.svg" alt="">
    </RouterLink>
      <h2 class="text-navy-100 text-2xl font-bold">Talaba qo‘shish</h2>
    </div>
  </div>
  <main class="bg-grey-50">
    <section class="max-w-[793px] w-full mx-auto items-center pt-10 pb-[430px]">
      <div class="border p-8 bg-grey-1200 rounded-xl">
        <div class="grid grid-cols-2 gap-7">
          <div class="flex flex-col">
            <label class="uppercase font-medium text-xs text-dark-100">F.I.Sh. (Familiya Ism Sharif)</label>
            <CInput placeholder="fullname" />
          </div>
          <div class="flex flex-col">
            <label class="uppercase font-medium text-xs text-dark-100">Telefon raqam</label>
            <CInput type="tel" placeholder="+998" />
          </div>
        </div>
        <div class="mt-7">
        <label class="text-dark-100 text-xs font-medium mt-7">OTM</label>
        <CSelect :options="studentUniversities" />
      </div>
        <div class="grid grid-cols-2 gap-7 mt-7">
          <div class="flex-col">
            <label class="text-dark-100 text-xs font-medium uppercase">Talabalik turi</label>
            <CSelect :options="studentDegrees" />
          </div>
          <div class="flex-col">
            <label class="uppercase font-medium text-xs text-dark-100">Kontrakt summa</label>
            <CInput type="" placeholder="Summani kiriting" />
          </div>
        </div>
        <div class="border-2 border-grey-50 w-[734px] mt-7"></div>
        <router-link to="/addstudent/studentinfo">
          <button
            class="mt-7 py-2 px-8 justify-end items-end bg-blue-300 border rounded-md text-sm font-medium text-white hover:bg-white hover:border-blue-300 hover:text-blue-300 duration-30"
          >
            <i class="icon-plus"></i>
            Qo‘shish
          </button>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import CSelect from '../components/Base/CSelect.vue'
import CInput from '../components/Base/CInput.vue'
import { RouterLink } from 'vue-router';

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
