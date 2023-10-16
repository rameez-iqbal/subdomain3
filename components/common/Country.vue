<template>
  <ClientOnly>
    <a
      href="#"
      class="flex items-center gap-1 h-[48px] text-black text-[16px]"
    >
      <span
        ><img
          class="w-[20px]"
          src="https://d3e7ardzpaj3y4.cloudfront.net/assets/images/iconfinder_Saudi-Arabia_298512_1.png"
          alt="menu"
      /></span>
      <span
        ><img class="w-4" src="@/assets/img/chevron-down.svg" alt="down"
      /></span>
    </a>
    <div class="absolute hidden group-hover:block bg-[#f9f9f9] right-0 shadow-cus p-[25px] top-[100%] w-[360px] z-10 border-t-2 border-black">
      <p class="text-xs mb-5 font-semibold text-txt-secondary">Country</p>
      <ul class="flex flex-col space-y-5">
        <li class="flex items-center gap-2 hover:text-[#676767]">
          <input
            id="radio-1"
            type="radio"
            value=""
            name="radio1"
            class="w-4 h-4 shadow-cus border-0 text-black focus:ring-0 focus:outline-none"
          />
          <label for="radio-1" class="text-sm font-semibold">Sadui Arabia</label>
        </li>
        <li class="flex items-center gap-2 hover:text-[#676767]">
          <input
            id="radio-1"
            type="radio"
            value=""
            name="radio1"
            class="w-4 h-4 shadow-cus border-0 focus:ring-0 focus:outline-none"
          />
          <label for="radio-1" class="text-sm">Kuwait</label>
        </li>
        <li class="flex items-center gap-2 hover:text-[#676767]">
          <input
            id="radio-1"
            type="radio"
            value=""
            name="radio1"
            class="w-4 h-4 shadow-cus border-0 focus:ring-0 focus:outline-none"
          />
          <label for="radio-1" class="text-sm ">united Arab Emirates</label>
        </li>
        <li class="flex items-center gap-2 hover:text-[#676767]">
          <input
            id="radio-1"
            type="radio"
            value=""
            name="radio1"
            class="w-4 h-4 shadow-cus border-0 focus:ring-0 focus:outline-none"
          />
          <label for="radio-1" class="text-sm ">Bahran</label>
        </li>
        <li class="flex items-center gap-2 hover:text-[#676767]">
          <input
            id="radio-1"
            type="radio"
            value=""
            name="radio1"
            class="w-4 h-4 shadow-cus border-0 focus:ring-0 focus:outline-none"
          />
          <label for="radio-1" class="text-sm ">Oman</label>
        </li>
      </ul>
    </div>
  </ClientOnly>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>