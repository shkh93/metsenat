<template>
  <CModal title="Tahrirlash">
    <div class="mt-8">
      <div class="">
        <label class="uppercase font-medium text-xs text-dark-100"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <CInput placeholder="fullname" class="" />
      </div>

      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Telefon raqam</label>
        <CInput type="tel" placeholder="+998" />
      </div>
      <div class="mt-7">
        <label class="text-dark-100 text-xs font-medium mt-7">OTM</label>
        <CSelect :options="studentUniversities" />
      </div>
      <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100">Kontrakt summa</label>
        <CSelect :options="sponsorshipAmount" />
      </div>

      <div class="border-2 border-grey-50 w-[520px] my-7"></div>
      <div class="flex justify-end mt-7">
          <button
            class="py-2 px-8 border rounded-md text-grey-600 bg-blue-300 transition duration-300 hover:bg-white hover:text-blue-300"
          >
            <i class="icon-save text-[24px] text-grey-600 hover:text-blue-300"></i>
            Saqlash
          </button>
        </div>
    </div>



    
  </CModal>
</template>

<script setup>
import CModal from '@/components/Base/CModal.vue'
import CInput from '@/components/Base/CInput.vue'
import CSelect from '../Base/CSelect.vue'

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
