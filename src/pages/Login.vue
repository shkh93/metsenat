<template>
  <section class="items-center w-full h-lvh flex justify-center bg-bgcolor">
    <div class="flex flex-col">
      <div class="flex flex-row gap-3">
        <img src="/public/svg/logo.svg" alt="logo" />
        <p
          class="text-white bg-red border rounded-lg py-1.5 px-2 translate-y-3 font-semibold text-xs"
        >
          CLUB
        </p>
      </div>
      <div class="mt-11 bg-white rounded-xl p-8">

        <div class="flex flex-col">
          <h3 class="text-navy-100 font-bold text-2xl">Kirish</h3>
          <label for="login" class="text-xs font-medium text-dark-100 mt-11">LOGIN</label>
      <CInput type="email" placeholder="email" />
      <label for="password" class="text-xs font-medium text-dark-100 mt-5">PAROL</label>
      <CInput  type="password" placeholder="password" />
        </div>
        <RouterLink to="/">
          <CButton text=" Kirish" class="mt-5"> </CButton>
            <!-- <button
              class="py-3.5 px-[103px] w-full bg-blue text-white mt-5 rounded-md border hover:bg-white hover:border-blue hover:text-blue duration-300"
            >
              Kirish
            </button> -->
          </RouterLink>
      
        <!-- <form class="flex flex-col">
          <h3 class="text-navy-100 font-bold text-2xl">Kirish</h3>

          <label for="login" class="text-xs font-medium text-dark-100 mt-11">LOGIN</label>
          <input
            type="text"
            placeholder="adm8904"
            class="border border-grey-100 rounded-md mt-2 py-2 pl-4 hover:border-blue outline-none :placeholder= font-normal text-sm"
          />
          <label for="password" class="text-xs font-medium text-dark-100 mt-5">PAROL</label>
          <input
            type="text"
            placeholder=""
            class="border border-grey-100 rounded-md mt-2 py-2 pl-4 hover:border-blue outline-none"
          />
          <RouterLink to="/">
            <button
              class="py-3.5 px-[103px] w-full bg-blue text-white mt-5 rounded-md border hover:bg-white hover:border-blue hover:text-blue duration-300"
            >
              Kirish
            </button>
          </RouterLink>
        </form> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import CButton from '@/components/Base/CButton.vue';
import CInput from '@/components/Base/CInput.vue'
</script>
