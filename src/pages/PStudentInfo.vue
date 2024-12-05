<template>
  <div class="max-w-[1200px] w-full mx-auto items-center bg-grey-900">
    <div class="py-8 flex gap-4 justify-between">
      <div class="flex flex-row gap-4">
        <RouterLink to="/students/addstudent">
          <img src="/public/svg/chevron-left.svg" alt="chevron-left" />
        </RouterLink>
        <h2 class="text-navy-100 text-2xl font-bold">Ishmuhammedov Aziz Ishqobilovich</h2>
      </div>

      <button class="px-8 py-2 bg-grey-1300 text-blue-500 rounded-md">
        <i class="icon-plus"></i>
        Homiy qo‘shish
      </button>
    </div>
  </div>
  <main class="bg-grey-50">
    <section class="max-w-[793px] w-full mx-auto items-center pt-10">
      <div class="border p-8 bg-grey-1200 rounded-xl">
        <div class="flex justify-between">
          <h2 class="text-2xl font-bold text-navy-100">Talaba haqida</h2>

          <button
            class="py-2 px-8 border bg-grey-100 rounded-md items-center justify-center text-blue-500 text-sm font-medium"
            @click="showStudentEditModal = true"
          >
            <i class="icon-edit text-[24px]"></i>
            Tahrirlash
          </button>
        </div>
        <div class="relative">
          <div class="border border-grey-50 w-[734px] mt-7"></div>

          <p class="absolute uppercase bg-grey-1600 px-3 text-blue-300 text-xs font-medium">
            Asosiy ma’lumotlar
          </p>
        </div>
        <div class="" v-for="(info, index) in sponsorInfo" :key="index">
          <div class="mt-8 flex flex-row gap-5">
            <div class="bg-grey-1400 p-4 items-center border rounded-md">
              <img src="/public/temp/sponsorimg.svg" alt="sponsors-img" class="w-[28px]" />
            </div>

            <h4 class="text-base font-medium text-dark-200">{{ info.fullname }}</h4>
          </div>

          <div class="mt-6">
            <h5 class="text-grey-1500 text-xs font-medium uppercase mb-2">telefon raqam</h5>
            <p class="text-dark-200 text-base font-medium">{{ info.phone }}</p>
          </div>
          <div class="">
            <div class="relative border border-grey-50 w-[734px] mt-9"></div>
            <p class="absolute uppercase bg-grey-1600 px-3 text-blue-300 text-xs font-medium">
              O‘qish joyi haqida ma’lumot
            </p>
          </div>

          <div class="grid grid-cols-2 gap-7 mt-8">
            <div class="flex-col">
              <h5 class="text-grey-1500 text-xs font-medium uppercase">OTM</h5>
              <p class="text-dark-200 text-base font-medium pt-2">{{ info.uni }}</p>
            </div>
            <div class="flex-col">
              <h5 class="text-grey-1500 text-xs font-medium uppercase">Talabalik turi</h5>

              <p class="text-dark-200 text-base font-medium pt-2">{{ info.degree }}</p>
            </div>
            <div class="flex-col">
              <h5 class="text-grey-1500 text-xs font-medium uppercase">Ajratilingan summa</h5>
              <div class="flex flex-row gap-1 pt-2">
                <p class="text-dark-200 text-base font-medium">{{ info.amount }}</p>
                <p class="text-dark-200 text-base font-medium">{{ info.currency }}</p>
              </div>
            </div>

            <div class="flex-col">
              <h5 class="text-grey-1500 text-xs font-medium uppercase">Kontrakt miqdori</h5>
              <div class="flex flex-row gap-1 pt-2">
                <p class="text-dark-200 text-base font-medium">{{ info.fee }}</p>
                <p class="text-dark-200 text-base font-medium">{{ info.currency }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border p-8 bg-grey-1200 rounded-xl py-6 px-8 mt-10">
        <div class="flex justify-between">
          <h2 class="text-2xl font-bold text-navy-100">Talabaga homiylar</h2>
          <button
            class="px-8 py-2 bg-grey-1300 text-blue-500 rounded-md"
            @click="showAddSponsorModal = true"
          >
            <i class="icon-plus"></i>
            Homiy qo‘shish
          </button>
        </div>
      </div>

      <div class="border p-8 bg-grey-1200 rounded-xl py-6 px-8 mt-10">
        <div class="flex justify-between">
          <h2 class="text-2xl font-bold text-navy-100">Talabaga homiylar</h2>
          <button class="px-8 py-2 bg-grey-1300 text-blue-500 rounded-md">
            <i class="icon-plus"></i>
            Homiy qo‘shish
          </button>
        </div>

        <CTable :head="tableHead" :data="sponsors">
          <template #sponsorshipAmount="{ colData }">
            <p>
              <span>{{ colData }}</span>
              <span class="text-grey-300">UZS</span>
            </p>
          </template>
          <template #action>
            <button @click="showSponsorModal = true">
              <i class="icon-edit text-[24px] text-blue-700"></i>
            </button>
          </template>
        </CTable>
      </div>

      <img src="/temp/sponsors.png" alt="sponsors-page-img" class="w-[820px] mt-[173px]" />
    </section>
  </main>

  <CStudentEditModal :show="showStudentEditModal" @close="showStudentEditModal = false" />
  <CAddSponsorModal :show="showAddSponsorModal" @close="showAddSponsorModal = false" />
  <CSponsorModal :show="showSponsorModal" @close="showSponsorModal = false" />
</template>

<script setup>
import CTable from '@/components/Base/CTable.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import CStudentEditModal from '@/components/Students/CStudentEditModal.vue'
import CAddSponsorModal from '@/components/Sponsors/CAddSponsorModal.vue'
import CSponsorModal from '@/components/Students/CSponsorModal.vue'
import { RouterLink } from 'vue-router'

const showStudentEditModal = ref(false)
const showAddSponsorModal = ref(false)
const showSponsorModal = ref(false)

const sponsorInfo = ref([
  {
    fullname: 'Isfandiyorov  Iqbol Bobomirzayevich',
    phone: '+998 99 973-72-60',
    uni: 'O’zbekiston davlat jahon tillari universiteti',
    degree: 'Bakalavr',
    amount: '14 000 000',
    currency: 'UZS',
    fee: '30 000 000',
  },
])

const tableHead = [
  {
    key: 'fullName',
    title: 'f.i.sh.',
  },
  {
    key: 'sponsorshipAmount',
    title: 'Homiylik summasi',
  },
  {
    key: 'action',
    title: 'Amallar',
  },
]
const sponsors = ref([
  {
    id: 2,
    fullName: 'Saimov Rustam Saimjonovich',
    sponsorshipAmount: '1 000 000 ',
  },
  {
    id: 3,
    fullName: 'Sanginov Otabek Muratovich',
    sponsorshipAmount: '5 000 000 ',
  },
  {
    id: 4,
    fullName: 'Nazarov Sanjar Olimovich',
    sponsorshipAmount: '7 000 000',
  },
  {
    id: 5,
    fullName: 'Ibragimov Sohib Mirfayozovich',
    sponsorshipAmount: '10 000 000',
  },
])
</script>
