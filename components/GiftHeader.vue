<template>
    <ClientOnly>
      <div
        v-if="overlayPopup"
        class="z-[3] top-0 fixed left-0 right-0 h-screen bg-overlay bottom-0"
      ></div>
      <header>
        <nav class="bg-[#fdfdfd] border-b-[1px] border-b-[#efefef] relative z-[99] w-full py-2 giftHeader">
          <div class="container mx-auto px-4 w-4/6">
            <div class="flex justify-between items-center mx-auto">
              <div class="relative">
                <a href="#" class="flex items-center">
                  <img
                    class="w-[115px]"
                    src="https://cdn.niceonesa.com/web/assets/img/a886eac.svg"
                    alt="Logo"
                  />
                </a>
              </div>
              <div class="relative">
                <ul class="flex items-center justify-center pt-[7px] gap-6">
                  <li
                    class="flex items-center justify-center group hover:border-b-black border-b-3 border-white"
                    @mouseover="overlayPopup = true"
                    @mouseleave="overlayPopup = false"
                  >
                    <Language />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </ClientOnly>
  </template>
  <script setup>
  import Language from "./common/Langauge.vue";
  const overlayPopup = ref(false);
  </script>
  
  <style lang="scss" scoped></style>