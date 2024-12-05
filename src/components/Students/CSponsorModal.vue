<template>
   <CModal title="Homiylarni tahrirlash">
    <label class="uppercase font-medium text-xs text-dark-100"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <CSelect :options="chooseSponsor" /> 
<div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100"
        >Ajratilingan summa</label
      >
      <CInput placeholder="Summani kiriting"/>
    </div>


    <div class="border border-grey-50 w-[520px] my-7"></div>

    <div class="mt-7 flex flex-row gap-4 items-end justify-end">
      <button
        class="py-2 px-8 border bg-red-100 rounded-md items-center justify-center text-red-200 text-sm font-medium duration-300 hover:bg-red-200 hover:text-red-100 hover:border-red-200"
      >
        <i class="icon-trash text-[24px]"></i>
        Homiyni o‘chirish
      </button>
      <button
            class="py-2 px-8 border rounded-md text-grey-600 bg-blue-300 transition duration-300 hover:bg-white hover:text-blue-300"
          >
            <i class="icon-save text-[24px] text-grey-600 hover:text-blue-300"></i>
            Saqlash
          </button>
    </div>
   </CModal>
</template>

<script setup>
import CModal from '../Base/CModal.vue';
import CInput from '@/components/Base/CInput.vue'
import CSelect from '../Base/CSelect.vue'
const chooseSponsor = [
  {
    id: 1,
    name: 'Alimov Abror Xabibullayevich',
  },
  {
    id: 2,
    name: 'Saimov Rustam Saimjonovich',
  },
  {
    id: 3,
    name: 'Sanginov Otabek Muratovich',
  },
  {
    id: 4,
    name: 'Nazarov Sanjar Olimovich',
  },
  {
    id: 5,
    name: 'Ibragimov Sohib Mirfayozovich',
  },
  {
    id: 6,
    name: 'Ishmuhammedov Aziz Ishqobilovich',
  },
  {
    id: 7,
    name: 'Qosimov Furqat Xabibullayevich',
  },
  {
    id: 8,
    name: 'Ortiqov Abror Bahodirovich',
  },
  {
    id: 9,
    name: 'Rustamov Oybek  Tajiddinovich',
  },
  {
    id: 10,
    name: 'Isfandiyorov  Iqbol Bobomirzayevich',
  },
]

</script>

