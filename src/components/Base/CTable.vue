<template>
  <table class="w-full text-sm mx-auto border-separate border-spacing-y-3 pt-12">
    <thead class="text-grey-400 font-normal text-xs uppercase">
      <tr>
        <th class="text-center px-4 py-3">#</th>
        <th scope="col" 
        class="text-center px-4 py-3" 
        v-for="headItem of head" 
        :key="headItem.key">
          {{ headItem.title }}
        </th>
        <!-- <th scope="col" class="text-start px-4 py-3">F.I.SH</th>
            <th scope="col" class="text-center px-4 py-3">Tel.Raqami</th>
            <th scope="col" class="text-center px-4 py-3">Homiylik summasi</th>
            <th scope="col" class="text-center px-4 py-3">Sarflangan summa</th>
            <th scope="col" class="text-center px-4 py-3">Sana</th>
            <th scope="col" class="text-center px-4 py-3">Holati</th>
            <th scope="col" class="text-center px-4 py-3">Amallar</th> -->
      </tr>
    </thead>

    <!-- <tbody>
          <tr class="bg-white" v-for="(sponsor, index) in paginatedTransactions" :key="index">
            <th class="rounded-l-lg mt-3 text-center py-5 px-4 font-medium text-sm text-dark-100">
              {{ (currentPage - 1) * itemsPerPage + index + 1 }}
            </th>

            <td class="py-5 px-4 text-start font-medium text-sm text-dark-100">
              {{ sponsor.fullname }}
            </td>
            <td class="py-5 px-4 text-center font-normal text-sm text-dark-100">
              {{ sponsor.phone }}
            </td>
            <td class="py-5 px-4 text-center font-medium text-sm text-navy-200">
              {{ sponsor.amount }} <span class="text-grey-300">{{ sponsor.currency }}</span>
            </td>
            <td class="py-5 px-4 text-center font-medium text-sm text-navy-200">
              {{ sponsor.spending }} <span class="text-grey-300">{{ sponsor.currency }}</span>
            </td>
            <td class="py-5 px-4 text-center font-normal text-sm text-dark-100">
              {{ sponsor.date }}
            </td>
            <td class="py-5 px-4 text-center font-medium text-sm">{{ sponsor.status }}</td>
            <router-link to="/sponsors/sponsorsinfo">
              <td class="py-5 px-4 text-center rounded-r-lg text-[24px] text-blue">
                <i class="icon-eye-result"></i>
              </td>
            </router-link>
          </tr>
        </tbody> -->
    <tr v-for="(d, index) of data" :key="index" class=" bg-white">
        <th>{{ index + 1 }}</th>
      <td class="py-6 px-4 text-center font-medium text-sm text-navy-100" 
      v-for="headItem of head" :key="headItem.key">
        <slot :name="headItem.key" :colData="d[headItem.key]"
        :data="d">
        
        {{ d[headItem.key] }} </slot>
      </td>
    </tr>
  </table>
</template>

<script setup>
defineProps({
  head: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
})
</script>
