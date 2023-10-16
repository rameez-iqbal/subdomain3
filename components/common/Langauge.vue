<template>
    <ClientOnly>
        <a href="#"
            class="flex items-center gap-1 h-[48px] text-black text-[16px] ">
            <span><img src="@/assets/img/icon.svg" alt="gloab" /></span>
            <span>EN</span>
            <span><img class="w-4" src="@/assets/img/chevron-down.svg" alt="down" /></span>
        </a>
        <ul class="hidden group-hover:block absolute bg-[#f9f9f9] right-[6px] shadow-cus p-[25px] top-[100%] w-[371px] z-10 border-t-2 border-black">
          <li>
            <p class="text-xs mb-5 font-semibold text-txt-secondary">Languages</p>
          </li>
           <li>
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-2">
                    <input id="radio-1" type="radio" value="" name="radio1"
                        class="w-4 h-4 shadow-cus border-0 text-black focus:ring-0 focus:outline-none">
                    <img src="@/assets/img/oval-2@3x.png" class="w-5" alt="العربية">
                    <label for="radio-1" class="text-sm hover:text-[#676767]">العربية (ع)</label>
                </div>
                <div class="flex items-center gap-2">
                    <input id="radio-1" type="radio" value="" name="radio1"
                        class="w-4 h-4 text-black border-0 shadow-cus focus:ring-0 focus:outline-none">
                    <img src="@/assets/img/oval-3@3x.png" class="w-5" alt="English">
                    <label for="radio-1" class="text-sm font-medium hover:text-[#676767]">English (EN)</label>
                </div>
            </div>
           </li>
            
        </ul>
    </ClientOnly>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>