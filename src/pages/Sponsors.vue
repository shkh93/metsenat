<template>
  <main class="bg-bgcolor">
    <section class="max-w-[1200px] w-full mx-auto items-center">
      <RouterLink to="/sponsors/sponsorsinfo">
        <CTable :head="tableHead" :data="sponsors">
          <template #sponsorshipAmount="{ colData }">
            <p>
              <span>{{ colData }}</span>
              <span class="text-grey-300">UZS</span>
            </p>
          </template>

          <template #spentAmount="{ colData }">
            <p>
              <span>{{ colData }}</span>
              <span class="text-grey-300">UZS</span>
            </p>
          </template>

          <template #status="{ colData }">
            <span :class="getStatusStyles(colData)"> {{ colData }}</span>
          </template>

          <template #action="{ data }">
            <RouterLink :to="{ name: 'SponsorInfo', params: { sponsorId: data.id } }">
              <img src="/public/svg/eye.svg" alt="eye" />
              {{ data.id }}
            </RouterLink>
          </template>
        </CTable>
      </RouterLink>

      <!-- pagination -->

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

      <!-- Modal -->
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import CTable from '@/components/Base/CTable.vue'
import { RouterLink } from 'vue-router'
import { data } from 'autoprefixer'

const tableHead = [
  {
    key: 'fullName',
    title: 'f.i.sh.',
  },
  {
    key: 'phone',
    title: 'Tel.Raqami',
  },
  {
    key: 'sponsorshipAmount',
    title: 'Homiylik summasi',
  },
  {
    key: 'spentAmount',
    title: 'Sarflangan summa',
  },
  {
    key: 'date',
    title: 'Sana',
  },
  {
    key: 'status',
    title: 'Holati',
  },
  {
    key: 'action',
    title: 'Amallar',
  },
]

const sponsors = ref([
  {
    id: 1,
    fullName: 'Alimov Abror Xabibullayevich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '30 000 000 ',
    spentAmount: '0 ',
    currency: 'UZS',
    date: '15.01.2021',
    status: 'Yangi',
  },
  {
    id: 2,
    fullName: 'Saimov Rustam Saimjonovich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '1 000 000 ',
    spentAmount: '0 ',
    currency: 'UZS',
    date: '02.02.2021',
    status: 'Moderatsiyada',
  },
  {
    id: 3,
    fullName: 'Sanginov Otabek Muratovich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '5 000 000 ',
    spentAmount: '5 000 000 ',
    currency: 'UZS',
    date: '20.04.2021',
    status: 'Tasdiqlangan',
  },
  {
    id: 4,
    fullName: 'Nazarov Sanjar Olimovich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '7 000 000',
    spentAmount: '7 000 000 ',
    currency: 'UZS',
    date: '03.05.2021',
    status: 'Bekor qilingan',
  },
  {
    id: 5,
    fullName: 'Ibragimov Sohib Mirfayozovich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '10 000 000',
    spentAmount: '0 ',
    currency: 'UZS',
    date: '10.05.2021',
    status: 'Moderatsiyada',
  },
  {
    id: 6,
    fullName: 'Ishmuhammedov Aziz Ishqobilovich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '30 000 000 ',
    spentAmount: '1 000 000 ',
    currency: 'UZS',
    date: '17.06.2021',
    status: 'Bekor qilingan',
  },
  {
    id: 7,
    fullName: 'Qosimov Furqat Xabibullayevich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '50 000 000',
    spentAmount: '0 ',
    currency: 'UZS',
    date: '21.06.2021',
    status: 'Yangi',
  },
  {
    id: 8,
    fullName: 'Ortiqov Abror Bahodirovich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '70 000 000',
    spentAmount: '0',
    currency: 'UZS',
    date: '25.02.2021',
    status: 'Yangi',
  },
  {
    id: 9,
    fullName: 'Rustamov Oybek  Tajiddinovich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '50 000 000',
    spentAmount: '2 000 000',
    currency: 'UZS',
    date: '18.07.2021',
    status: 'Tasdiqlangan',
  },
  {
    id: 10,
    fullName: 'Isfandiyorov  Iqbol Bobomirzayevich',
    phone: '+99899 973-72-60',
    sponsorshipAmount: '1 000 000 ',
    spentAmount: '0 ',
    currency: 'UZS',
    date: '28.02.2021',
    status: 'Moderatsiyada',
  },
])

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

const getStatusStyles = computed(() => (statusText) => {
  const styles = {
    Yangi: 'text-blue-600',
    Moderatsiyada: 'text-orange-300',
    Tasdiqlangan: 'text-green-200',
    'Bekor qilingan': 'text-grey-1000',
  }

  return styles[statusText]
})

// pagination //
const currentPage = ref(1)
const itemsPerPage = 5
const paginatedTransactions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sponsors.value.slice(start, end)
})
const totalPages = computed(() => Math.ceil(sponsors.value.length / itemsPerPage))
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

//
</script>

<style lang="scss" scoped></style>
