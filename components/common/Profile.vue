<template>
  <ClientOnly>
    <a
      href="#"
      class="flex items-center justify-center h-[48px] text-black text-[16px] gap-1"
    >
      <span><img src="@/assets/img/icon-profile.svg" /></span>
      <span>Profile</span>
      <span
        ><img class="w-4" src="@/assets/img/chevron-down.svg" alt="down"
      /></span>
    </a>
    <ul
      class="hidden group-hover:block absolute bg-[#f9f9f9] right-[6px] shadow-cus top-[100%] w-[360px] z-10 border-t-2 border-black"
    >
      <li class="border-b-[0.7px] border-b-[#e1e1e1]">
        <a href="/en/profile/" class="flex items-center justify-between p-5">
          <span class="flex flex-col">
            <span class="text-[#202020] text-base font-semibold">
              IT Team Test
            </span>
            <span class="text-xs text-txt-secondary">
              aosama.qc@gmail.com
            </span>
          </span>
          <img
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180"
          />
        </a>
      </li>
      <li class="border-b-[0.7px] border-b-[#e1e1e1]">
        <div class="flex items-center justify-center gap-[30px] p-5">
          <a href="/en/orders/">
            <div class="flex flex-col items-center justify-center">
              <div class="relative">
                <img
                  src="https://cdn.niceonesa.com/web/assets/img/136d356.svg"
                  alt=""
                />
              </div>
              <p class="mt-3 text-[#202020] text-[13px]">Orders</p>
            </div>
          </a>
          <a href="/en/wallet/">
            <div class="flex flex-col items-center justify-center">
              <div class="relative flex justify-center items-center">
                <img
                  src="https://cdn.niceonesa.com/web/assets/img/07f0e6e.svg"
                  alt=""
                />
              </div>
              <p class="mt-3 text-[#202020] text-[13px]">Balance</p>
            </div>
          </a>
          <a href="/en/tickets/">
            <div class="flex flex-col items-center justify-center">
              <div class="position-relative">
                <img
                  src="https://cdn.niceonesa.com/web/assets/img/ff7afba.svg"
                  alt=""
                />
              </div>
              <p class="mt-3 text-[#202020] text-[13px]">Tickets</p>
            </div>
          </a>
          <a href="/en/favourite/">
            <div class="flex flex-col items-center justify-center">
              <div class="relative">
                <img
                  src="https://cdn.niceonesa.com/web/assets/img/ac40b8a.svg"
                  alt=""
                />
              </div>
              <p class="mt-3 text-[#202020] text-[13px]">Favourite</p>
            </div>
          </a>
        </div>
      </li>
      <li>
        <a href="/en/voucher/" class="flex items-center text-[13px] gap-[30px]">
          <div class="flex-grow-0 pl-5">
            <img src="@/assets/img/sidebar/referral.svg" />
          </div>
          <div class="w-100 flex items-center justify-between flex-grow-1 border-b-[0.7px] border-b-[#e1e1e1] py-[14px]">
            <span>Refferral</span>
            <span class="pr-5"
              ><img
                src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
                class="transform rotate-180"
            /></span></div
        ></a>
      </li>
      <li>
        <a href="/en/voucher/" class="flex items-center text-[13px] gap-[30px]">
          <div class="flex-grow-0 pl-5">
            <img src="@/assets/img/sidebar/voucher.svg"/>
          </div>
          <div
            class="w-100 flex items-center justify-between flex-grow-1 border-b-[0.7px] border-b-[#e1e1e1] py-[14px]"
          >
            <span> Gift a voucher</span>
            <span class="pr-5"
              ><img
                src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
                class="transform rotate-180"
            /></span></div
        ></a>
      </li>
      <li>
        <a href="/en/voucher/" class="flex items-center text-[13px] gap-[30px]">
          <div class="flex-grow-0 pl-5">
            <img src="@/assets/img/sidebar/address.svg"/>
          </div>
          <div
            class="w-100 flex items-center justify-between flex-grow-1 border-b-[0.7px] border-b-[#e1e1e1] py-[14px]"
          >
            <span>Addresses</span>
            <span class="pr-5"
              ><img
                src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
                class="transform rotate-180"
            /></span></div
        ></a>
      </li>
      <li>
        <a href="/en/voucher/" class="flex items-center text-[13px] gap-[30px] w-full">
          <div class="pl-5">
            <img src="@/assets/img/sidebar/logout.svg"/>
          </div>
          <div
            class="w-100 flex justify-between flex-grow-1 py-[14px]"
          >
            <span>LogOut</span>
            <span class="pr-5"
              ><img
                src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
                class="transform rotate-180"
            /></span></div
        ></a>
      </li>
    </ul>
  </ClientOnly>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>