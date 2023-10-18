<template>
  <ClientOnly>
    <a
      href="#"
      class="flex items-center gap-3 h-[48px] text-black text-[16px] group-hover:border-b-black border-b-3 border-white"
    >
      <span> <img src="@/assets/img/burger.svg" class="w-6" alt="menu" /></span>
      <span>Categories</span>
    </a>
    <div
      class="hidden group-hover:flex top-14 transition ease-in-out delay-[.3s] shadow-cus z absolute bg-[#f9f9f9] z-10"
    >
      <ul
        v-for="(categories, level) in categoryList"
        :key="level"
        class="relative max-w-[225px] min-w-[225px] min-h-full"
      >
        <li
          v-for="category in categories"
          :key="category.category_id"
          class="hover:bg-[#f4f4f4] flex items-center justify-between py-[11px] px-2"
          @mouseover="hoverMainCategory(category, level)"
        >
          <div class="flex items-center gap-5">
            <div v-if="level === 0" class="w-[10%]">
              <img :src="category.image" alt="Makeup" />
            </div>
            <a href="/en/makeup/?page=1" class="text-sm text-black">
              {{ category.name }}
            </a>
          </div>
          <img
            v-if="category.categories && category.categories.length"
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180 w-2"
          />
        </li>
      </ul>
    </div>
  </ClientOnly>
</template>
<script setup>
import Lists from "@/menu.json";

const categoryList = ref([Lists.categories]);
const currentLevel = ref(0);
const hoverMainCategory = (category, level) => {
  if (currentLevel.value >= level) {
    categoryList.value.splice(level + 1, categoryList.value.length - 1);
  }
  currentLevel.value = level;

  if (!category.categories) {
    return categoryList.value.splice(level + 1, 1);
  }
  categoryList.value.push(category.categories);
};
</script>
<style lang="scss" scoped></style>