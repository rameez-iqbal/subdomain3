<template>
  <ClientOnly>
  <div v-if="overlayPopup"  class="z-[3] top-0 fixed left-0 right-0 h-screen bg-overlay bottom-0"></div>
  <header>
    <nav class="bg-white border-b-[1px] border-b-[#efefef] fixed z-[99] w-full">
      <div class="container mx-auto px-4">
        <div
          class="flex justify-between items-center pt-1 pb-1 md:pb-0 md:pt-4"
        >
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-black hover:text-txt-secondary"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="#000"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div class="flex items-center w-full">
            <!-- Website Logo -->
            <a href="#" class="flex items-center px-2">
              <img
                class="w-[90px] md:w-auto"
                src="https://cdn.niceonesa.com/web/assets/img/a886eac.svg"
                alt="Logo"
              />
            </a>
            <div class="w-full mx-auto flex-[0.9]">
              <input
                type="search"
                placeholder="What are you looking for ?"
                autocomplete="off"
                class="w-full focus:ring-0 focus:outline-none !border-[#f4f4f4] rounded-[4px] bg-[#f4f4f4] text-black h-[45px] p-[18px]"
              />
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-3 flex-shrink-0">
            <img
              src="https://cdn.niceonesa.com/web/assets/img/285b093.svg"
              alt="niceonebrand"
            />
            <p class="text-[18px]">Best Makeup website in Saudi Arabia</p>
          </div>
        </div>
        <div class="justify-between items-center mx-auto hidden lg:flex">
          <div class="relative">
            <ul class="flex items-center justify-center">
              <li
                class="flex gap-2 pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
              >
                <a
                  href="#"
                  class="flex items-center gap-3 h-[48px] text-black text-[16px]"
                >
                  <span>
                  <img src="@/assets/img/burger.svg" class="w-6" alt="menu" /></span>
                  <span>Categories</span>
                </a>
              </li>
              <div class="w-1 border-r-[1px] border-[#efefef] mt-5 mb-2 h-7"></div>
              <li
                class="flex gap-2 items-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
              >
                <a
                  href="#"
                  class="flex items-center gap-3 h-[48px] text-black text-[16px]"
                >
                  <span>Makeup</span>
                </a>
              </li>
              <div class="w-1 border-r-[1px] border-[#efefef] mt-5 mb-2"></div>
              <li
                class="flex gap-2 items-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
              >
                <a
                  href="#"
                  class="flex items-center gap-3 h-[48px] text-black text-[16px]"
                >
                  <span>Perfume</span>
                </a>
              </li>
              <div class="w-1 border-r-[1px] border-[#efefef] mt-5 mb-2 h-7"></div>
              <li
                class="flex gap-2 items-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
              >
                <a
                  href="#"
                  class="flex items-center gap-3 h-[48px] text-black text-[16px]"
                >
                  <span>Care</span>
                </a>
              </li>
              <div class="w-1 border-r-[1px] border-[#efefef] mt-5 mb-2 h-7"></div>
              <li
                class="flex gap-2 items-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
              >
                <a
                  href="#"
                  class="flex items-center gap-3 h-[48px] text-black text-[16px]"
                >
                  <span>Brands</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="relative">
            <ul class="flex items-center justify-center">
              <li
                class="flex items-center justify-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
                @mouseover="overlayPopup = true"
                @mouseleave="overlayPopup = false"
              >
                <Language />
              </li>
              <li
                class="flex items-center justify-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
                @mouseover="overlayPopup = true"
                @mouseleave="overlayPopup = false"
              >
                <Country />
              </li>
              <li
                class="flex items-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
                @mouseover="overlayPopup = true"
                @mouseleave="overlayPopup = false"
              >
                <Profile />
              </li>
              <li
                class="flex items-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
              >
                <a
                  href="#"
                  class="flex items-center justify-center h-[48px] text-[16px]"
                >
                  <span class="relative">
                    <img class="w-5" src="@/assets/img/icon-cart.svg" />
                    <span
                      class="inline-flex absolute text-white -top-[2px] z-1 left-3 items-center justify-center w-4 h-4 text-xs font-semibold bg-[#d0021b] rounded-full"
                      >2</span
                    >
                  </span>
                </a>
              </li>
              <li
                class="flex items-center pt-[7px] px-[15px] group hover:border-b-black border-b-3 border-white"
              >
                <a
                  href="#"
                  class="flex items-center justify-center h-[48px] text-[16px]"
                >
                  <span class="relative">
                    <img class="w-5" src="@/assets/img/notification.svg" />
                    <span
                      class="inline-flex absolute text-white -top-[2px] left-3 z-1 items-center justify-center w-4 h-4 text-xs font-semibold bg-[#d0021b] rounded-full"
                      >2</span
                    >
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hidden mobile-menu">
        <ul class="">
          <li class="active">
            <a
              href="index.html"
              class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >cat</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >About</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</ClientOnly>
</template>
<script setup>
import Language from "./common/Langauge.vue";
import Country from "./common/Country.vue";
import Profile from "./common/Profile.vue";
const overlayPopup = ref(false);
</script>

<style lang="scss" scoped></style>