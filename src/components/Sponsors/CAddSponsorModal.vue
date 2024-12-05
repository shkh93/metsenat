<template>
  <CModal title="Homiy qo‘shish">
    <div class="mt-7">
      <label class="uppercase font-medium text-xs text-dark-100"
        >F.I.Sh. (Familiya Ism Sharifingiz)</label
      >
      <CSelect :options="chooseSponsor" /> 
    </div>
    <div class="mt-7">
        <label class="uppercase font-medium text-xs text-dark-100"
        >Ajratilingan summa</label
      >
      <CInput placeholder="Summani kiriting"/>
    </div>

    <div class="border border-grey-50 w-[520px] my-7"></div>
  </CModal>
</template>

<script setup>
import CModal from '@/components/Base/CModal.vue'
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
