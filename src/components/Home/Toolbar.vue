<template>
  <section class="bg-grey-900">
    <div class="max-w-[1200px] w-full mx-auto items-center py-6">
      <div class="flex justify-between">
        <nav class="">
          <ul class="flex">
            <li class="focus:text-white">
              <RouterLink
                v-for="nav of navBar"
                :key="nav.id"
                :to="nav.path"
                active-class="text-white bg-blue-100"
                class="py-3 px-14 border rounded-l-lg last: border-blue-100 duration-300"
              >
                <span class="text-xs font-medium text-blue-300">{{ nav.title }}</span>
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div class="flex flex-row gap-5">
          <form class="relative flex flex-row gap-2 items-center">
            <i class="icon-search absolute text-grey-400 left-2 text-[20px]"></i>
            <input
              type="text"
              placeholder="Izlash"
              class="hover:border-blue pl-8 py-2.5 focus:outline-none focus:ring-2 w-[284px] bg-grey-500 border rounded :placeholder= text-base font-normal text-grey-400"
            />
          </form>

          <CButton text="Filter"
          btnClass="items-center rounded py-2 px-8 w-full flex gap-2.5 bg-blue-200 text-blue text-sm font-medium "
          @click="$emit('open-filter')">
            
          </CButton>
          <!-- <button
            class="items-center rounded py-2 px-8 w-full flex gap-2.5 bg-blue-200 text-blue text-sm font-medium hover:bg-white hover:border-blue"
            @click="$emit('open-filter')"
          >
            <i class="icon-filter text-[16px] text-blue"></i>
            Filter
          </button> -->
        </div>
      </div>
      <!-- <div class="flex justify-between">
        <div class="flex flex-row">
          <router-link
            to="/dashboard"
            active-class="bg-blue text-white"
            class="py-3 px-14 border focus:bg-blue focus:text-white rounded-l-lg text-blue-300 border-blue-100 text-xs font-medium duration-300"
            >
            <button class="">Dashboard</button>
          </router-link>

          <router-link
            to="/sponsors"
            active-class="bg-blue text-white"
            class="py-3 px-14 border focus:bg-blue focus:text-white text-blue-300 border-blue-100 text-xs font-medium duration-300"
          >
            <button class="">Homiylar</button>
          </router-link>
          <RouterLink
            to="/students"
            active-class="bg-blue text-white"
            class="py-3 px-14 border focus:bg-blue focus:text-white rounded-r-lg text-blue-300 border-blue-100 text-xs font-medium duration-300"
          >
            <button>Talabalar</button>
          </RouterLink>
        </div>
        
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import CButton from '../Base/CButton.vue';
const navBar = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    id: 2,
    title: 'Homiylar',
    path: '/sponsors',
  },
  {
    id: 3,
    title: 'Talabalar',
    path: '/students',
  },
]
</script>
