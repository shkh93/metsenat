<template>
  <CModal title="Tahrirlash">
    <div class="flex flex-row justify-between border-2 border-gray-100 rounded-md mt-7">
      <button
        class="text-center rounded-l-md py-3.5 px-[75px] text-xs font-medium text-blue-300 active:bg-blue-300 active:text-white active-tab"
        onclick="switchTab('individual')"
      >
        Jismoniy Shaxs
      </button>
      <button
        class="text-center rounded-r-md py-3.5 px-20 text-xs font-medium text-blue-300 active:bg-blue-300 active:text-white"
        onclick="switchTab('legal')"
      >
        Yuridik Shaxs
      </button>
    </div>

    <!-- Jismoniy shaxs -->
    <div class="mt-8">
      <label class="uppercase font-medium text-xs text-dark-100"
        >F.I.Sh. (Familiya Ism Sharifingiz)</label
      >
      <CInput placeholder="fullname" class="" />

      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Telefon raqam</label>
        <CInput type="tel" placeholder="+998" />
      </div>
      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Holati</label>

        <CSelect :options="sponsorStatuses" />
      </div>
      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Kontrakt summa</label>
        <CSelect :options="sponsorshipAmount" />
      </div>
      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">To‘lov turi</label>
        <CSelect :options="sponsorshipType" />
        <div class="border border-grey-50 w-[520px] mt-7"></div>
        <div class="flex justify-end mt-7">
          <button
            class="py-2 px-8 border rounded-md text-grey-600 bg-blue-300 transition duration-300 hover:bg-white hover:text-blue-300"
          >
            <i class="icon-save text-[24px] text-grey-600 hover:text-blue-300"></i>
            Saqlash
          </button>
        </div>
      </div>
    </div>

    <!-- Yuridik shaxs -->
    <div class="mt-8">
      <label class="uppercase font-medium text-xs text-dark-100"
        >F.I.Sh. (Familiya Ism Sharifingiz)</label
      >
      <CInput placeholder="fullname" class="" />

      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Telefon raqam</label>
        <CInput type="tel" placeholder="+998" />
      </div>
      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Holati</label>

        <CSelect :options="sponsorStatuses" />
      </div>
      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Kontrakt summa</label>
        <CSelect :options="sponsorshipAmount" />
      </div>
      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Tashkilot nomi</label>
        <CInput placeholder="Tashkilot nomi" />
        <div class="border border-grey-50 w-[520px] mt-7"></div>
        <div class="flex justify-end mt-7">
          <button
            class="py-2 px-8 border rounded-md text-grey-600 bg-blue-300 transition duration-300 hover:bg-white hover:text-blue-300"
          >
            <i class="icon-save text-[24px] text-grey-600 hover:text-blue-300"></i>
            Saqlash
          </button>
        </div>
      </div>
    </div>
  </CModal>
</template>

<script setup>
import CModal from '@/components/Base/CModal.vue'
import CInput from '@/components/Base/CInput.vue'
import CSelect from '../Base/CSelect.vue'

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

const sponsorshipAmount = [
  {
    id: 1,
    name: '30 000 000 UZS',
  },
  {
    id: 2,
    name: '1 000 000',
  },
  {
    id: 3,
    name: '5 000 000',
  },
  {
    id: 4,
    name: '7 000 000',
  },
  {
    id: 5,
    name: '10 000 000',
  },
  {
    id: 6,
    name: '30 000 000',
  },
  {
    id: 7,
    name: '50 000 000',
  },
  {
    id: 8,
    name: '70 000 000',
  },
  {
    id: 9,
    name: '50 000 000',
  },
  {
    id: 10,
    name: '1 000 000',
  },
]

const sponsorshipType = [
  {
    id: 1,
    name: 'narxd',
  },
  {
    id: 2,
    name: 'Pul o‘tkazmalari',
  },
]
</script>
