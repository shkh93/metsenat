<template>
  <div class="max-w-[1200px] w-full mx-auto items-center bg-grey-900">
    <div class="py-8 flex gap-4 items-center">
      <RouterLink to="/dashboard">
      <img src="/public/svg/chevron-left.svg" alt="">
    </RouterLink>
      <h2 class="text-navy-100 text-2xl font-bold">Ishmuhammedov Aziz Ishqobilovich</h2>
      <span class="bg-green-300 text-green-200 border rounded-md text-xs font-normal py-1.5 px-3">
        Tasdiqlangan
      </span>
    </div>
  </div>
  <main class="bg-grey-50">
    <section class="max-w-[793px] w-full mx-auto items-center pt-10">
      <div class="border p-8 bg-grey-1200 rounded-xl">
        <div class="flex justify-between">
          <h2 class="text-2xl font-bold text-navy-100">Homiy haqida</h2>
          <button
            class="py-2 px-8 border bg-grey-100 rounded-md items-center justify-center text-blue-500 text-sm font-medium"
            @click="showEditModal = true"
          >
            <i class="icon-edit text-[24px]"></i>
            Tahrirlash
          </button>
        </div>
        <div v-for="(info, index) in sponsorInfo" :key="index">
          <p>sponsorId: {{ $route.params.sponsorId }}</p>
          <div class="mt-8 flex flex-row gap-5">
            <div class="bg-grey-1400 p-4 items-center border rounded-md">
              <img src="/public/temp/sponsorimg.svg" alt="sponsors-img" class="w-[28px]" />
            </div>

            <h4 class="text-base font-medium text-dark-200">{{ info.fullName }}</h4>
          </div>
          <div class="grid grid-cols-2 mt-6">
            <div class="">
              <h5 class="text-grey-1500 text-xs font-medium uppercase mb-3">telefon raqam</h5>
              <p class="text-dark-200 text-base font-medium">{{ info.phone }}</p>
            </div>
            <div class="">
              <h5 class="text-grey-1500 text-xs font-medium uppercase mb-3">Homiylik summasi</h5>
              <div class="flex flex-row gap-1">
                <p class="text-dark-200 text-base font-medium">{{ info.amount }}</p>
                <p class="text-dark-200 text-base font-medium">{{ info.currency }}</p>
              </div>
            </div>
            <div class="mt-6">
              <h5 class="text-grey-1500 text-xs font-medium uppercase mb-3">Tashkilot nomi</h5>
            </div>
          </div>
        </div>
      </div>

      <img src="/temp/sponsors.png" alt="sponsors-page-img" class="w-[820px] mt-[173px]" />
    </section>
  </main>
  <CSponsorEditModal :show="showEditModal" @close="showEditModal = false" />
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import CSponsorEditModal from '@/components/Sponsors/CSponsorEditModal.vue'
import { RouterLink } from 'vue-router';
const showEditModal = ref(false)

const route = useRoute()
console.log('id: ', route.params.id)

const sponsorInfo = ref([
  { id:1,
    fullName: 'Ishmuhammedov Aziz Ishqobilovich',
    phone: '+998 99 973-72-60',
    amount: '30 000 000 ',
    currency: 'UZS',
  },

  // {id: 2,
  //   fullname: 'dff',
  //   phone: '+998 99 973-72-60',
  //   amount: '30 000 000 ',
  //   currency: 'UZS',
  // },
  //   {
  //     img: "/public/temp/sponsor.svg",
  //     fullname: "Saimov Rustam Saimjonovich",
  //     phone: "+998 99 973-72-60",
  //     amount: "5 000 000 UZS",
  //     currency: "UZS"
  //   },
])
</script>
