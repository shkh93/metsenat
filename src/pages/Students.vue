<template>
  <main class="bg-bgcolor">
    <section class="max-w-[1200px] w-full mx-auto items-center">
      <div class="flex justify-end pt-7">
        <routerLink to="/students/addstudent">
          <button
            class="py-2 px-8 bg-blue-300 border rounded-md text-sm font-medium text-white hover:bg-white hover:border-blue-300 hover:text-blue-300 duration-30"
          >
            <i class="icon-plus"></i>
            Talaba qo‘shish
          </button>
        </routerLink>
      </div>

      <CTable :head="tableHead" :data="students">
        <template #allocatedAmount="{ colData }">
          <p class="flex gap-1">
            <span>{{ colData }}</span>
            <span class="text-grey-300">UZS</span>
          </p>
        </template>

        <template #tutionFee="{ colData }">
          <p class="flex gap-1">
            <span>{{ colData }}</span>
            <span class="text-grey-300">UZS</span>
          </p>
        </template>

        <template #action="{ data }">
          <RouterLink :to="{ name: 'StudentInfo', params: { studentId: data.id } }">
            <img src="/public/svg/eye.svg" alt="eye" />
            {{ data.id }}
          </RouterLink>
        </template>

      </CTable>

      <!-- <table class="w-full text-sm mx-auto border-separate border-spacing-y-3 pt-7">
        <thead class="text-grey-400 font-normal text-xs uppercase">
          <tr>
            <th scope="col" class="text-center px-4 py-3">#</th>
            <th scope="col" class="text-start px-4 py-3">F.I.SH</th>
            <th scope="col" class="text-center px-4 py-3">Talabalik turi</th>
            <th scope="col" class="text-center px-4 py-3">OTM</th>
            <th scope="col" class="text-center px-4 py-3">Ajratilingan summa</th>
            <th scope="col" class="text-center px-4 py-3">Kontrakt miqdori</th>
            <th scope="col" class="text-center px-4 py-3">Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white" v-for="(student, index) in paginatedTransactions" :key="index">
            <th class="rounded-l-lg mt-3 text-center py-5 px-4 font-medium text-sm text-dark-100">
              {{ index + 1 }}
            </th>

            <td class="py-5 px-4 text-start font-medium text-sm text-dark-100">
              {{ student.fullname }}
            </td>
            <td class="py-5 px-4 text-center font-normal text-normal text-dark-100">
              {{ student.degree }}
            </td>
            <td class="py-5 px-4 text-center font-normal text-sm text-dark-100">
              {{ student.university }}
            </td>
            <td class="py-5 px-4 text-center font-medium text-sm text-navy-200">
              {{ student.amount }} <span class="text-grey-300">{{ student.currency }}</span>
            </td>
            <td class="py-5 px-4 text-center font-medium text-sm text-navy-200">
              {{ student.fee }} <span class="text-grey-300">{{ student.currency }}</span>
            </td>
            <td class="py-5 px-4 text-center rounded-r-lg text-[24px] text-blue">
              <i class="icon-eye-result"></i>
            </td>
          </tr>
        </tbody>
      </table> -->

      <!-- Pagination -->

      <div class="flex items-center justify-end mt-5 pb-20 space-x-3">
        <!-- Dropdown for items per page -->
        <h3 class="text-sm font-normal">Ko‘rsatish</h3>
        <select
          class="px-2 text-sm font-normal py-1 border border-grey-1100 rounded bg-grey-1200 text-dark-100 focus:outline-none"
          @change="updateItemsPerPage($event)"
        >
          <option>1</option>
          <option>5</option>
          <option>10</option>
        </select>
        <!-- Previous Button -->
        <button
          class="p-2 rounded border border-grey-1000 bg-grey-1200 text-grey-1000 disabled:border-none disabled:bg-grey-1100 disabled:cursor-not-allowed rotate-90 transform"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          <i class="icon-chevron-small text-sm"></i>
        </button>
        <!-- Pagination Buttons -->
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-3 py-1 rounded border text-sm font-medium',
            page === currentPage
              ? 'border-blue-300 bg-white text-blue-300'
              : 'border-grey-1100 bg-grey-1200 text-black hover:bg-grey-1100',
          ]"
        >
          {{ page }}
        </button>
        <!-- Dots for skipped pages -->
        <span v-if="showDots" class="text-sm text-grey-500">...</span>
        <!-- Next Button -->
        <button
          class="p-2 rounded border border-grey-1000 bg-grey-1200 text-grey-1000 disabled:bg-grey-1100 disabled:border-none disabled:cursor-not-allowed -rotate-90 transform"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          <i class="icon-chevron-small text-sm -rotate-90 transform"></i>
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import CTable from '@/components/Base/CTable.vue'

const tableHead = [
  {
    key: 'fullName',
    title: 'f.i.sh.',
  },
  {
    key: 'degree',
    title: 'Talabalik turi',
  },
  {
    key: 'university',
    title: 'OTM',
  },
  {
    key: 'allocatedAmount',
    title: 'Ajratilingan summa',
  },
  {
    key: 'tutionFee',
    title: 'Kontrakt miqdori',
  },

  {
    key: 'action',
    title: 'Amallar',
  },
]

const students = ref([
  {
    id: 1,
    fullName: 'Alimov Abror Xabibullayevich',
    degree: 'Bakalavr',
    university: 'Toshkent shahridagi INHA Universiteti',
    allocatedAmount: '14 000 000',
    tutionFee: '30 000 000',
    currency: 'UZS',
  },
  {
    id: 2,
    fullName: 'Saimov Rustam Saimjonovich',
    degree: 'Magistr',
    university: 'O’zbekiston milliy universiteti',
    allocatedAmount: '28 000 000',
    tutionFee: '28 000 000',
    currency: 'UZS',
  },
  {
    id: 3,
    fullName: 'Sanginov Otabek Muratovich',
    degree: 'Magistr',
    university: 'Toshkent davlat texnika universiteti',
    allocatedAmount: '0',
    tutionFee: '24 000 000',
    currency: 'UZS',
  },
  {
    id: 4,
    fullName: 'Nazarov Sanjar Olimovich',
    degree: 'Bakalavr',
    university: 'Toshkent davlat iqtisodiyot universiteti',
    allocatedAmount: '20 000 000',
    tutionFee: '25 000 000',
    currency: 'UZS',
  },
  {
    id: 5,
    fullName: 'Ishmuhammedov Aziz Ishqobilovich',
    degree: 'Bakalavr',
    university: 'O’zbekiston davlat jahon tillari universiteti',
    allocatedAmount: '0',
    tutionFee: '25 000 000',
    currency: 'UZS',
  },
  {
    id: 6,
    fullName: 'Qosimov Furqat Xabibullayevich',
    degree: 'Magistr',
    university: 'Toshkent davlat sharqshunoslik instituti',
    allocatedAmount: '1 000 000',
    tutionFee: '10 000 000',
    currency: 'UZS',
  },
  {
    id: 7,
    fullName: 'Ortiqov Abror Bahodirovich',
    degree: 'Bakalavr',
    university: 'Toshkent arxitektura-qurilish instituti',
    allocatedAmount: '4 000 000',
    tutionFee: '18 000 000',
    currency: 'UZS',
  },
  {
    id: 8,
    fullName: 'Rustamov Oybek  Tajiddinovich',
    degree: 'Magistr',
    university: 'Toshkent to’qimachilik va нngil sanoat istituti',
    allocatedAmount: '0',
    tutionFee: '21 000 000',
    currency: 'UZS',
  },
  {
    id: 9,
    fullName: 'Isfandiyorov  Iqbol Bobomirzayevich',
    degree: 'Bakalavr',
    university: 'Toshkent avtomobil-yo’llari instituti',
    allocatedAmount: '14 000 000',
    tutionFee: '22 000 000',
    currency: 'UZS',
  },
  {
    id: 10,
    fullName: 'Ibragimov Sohib Mirfayozovich',
    degree: 'Bakalavr',
    university: 'Toshkent moliya instituti',
    allocatedAmount: '7 000 000 UZS',
    tutionFee: '22 000 000',
    currency: 'UZS',
  },
])

// pagination //
const currentPage = ref(1)
const itemsPerPage = 5
const paginatedTransactions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return students.value.slice(start, end)
})
const totalPages = computed(() => Math.ceil(students.value.length / itemsPerPage))
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<style lang="scss" scoped></style>
