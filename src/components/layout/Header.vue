<template>
  <header class="max-w-[1200px] w-full mx-auto items-center bg-grey-600">
    <div class="flex flex-row justify-between pt-6">
      <RouterLink to="/" class="">
        <img src="/public/svg/logo.svg" alt="logo-img" />
      </RouterLink>

      <div class="flex flex-row gap-8">
        <div class="py-2.5">
          <div
            class="flex flex-row gap-6 items-center outline-none text-center text-sm font-medium rounded-md bg-grey-700 pl-5"
          >
            Shohrux
            <i
              class="icon-user2 text-white bg-green-100 text-[24px] px-1 pt-2 rounded my-1 mr-1"
            ></i>
          </div>
        </div>

        <div class="mt-2">
          <router-link to="/login">
            <i class="icon-log-out text-[38px] text-grey-800"></i>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
