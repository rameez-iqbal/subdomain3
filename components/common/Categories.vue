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
      <ul class="relative max-w-[225px] min-w-[225px] min-h-full">
        <li
          class="hover:bg-[#f4f4f4] flex items-center justify-between py-[11px] px-2"
        >
          <div class="flex items-center gap-5">
            <div class="w-[10%]">
              <img
                src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/category/1679399423_undefined_45696377_-500x500.png"
                alt="Makeup"
              />
            </div>
            <a href="/en/makeup/?page=1" class="text-sm text-black"> Makeup </a>
          </div>
          <img
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180 w-2"
          />
        </li>
        <li
          class="hover:bg-[#f4f4f4] flex items-center justify-between py-[11px] px-2"
        >
          <div class="flex items-center gap-5">
            <div class="w-[10%]">
              <img
                src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/category/1679399527_undefined_81840020_icons2-06-500x500.png"
                alt="Perfume"
              />
            </div>
            <a href="/en/perfume/?page=1" class="text-sm text-black">
              Perfume
            </a>
          </div>
          <img
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180 w-2"
          />
        </li>
        <li
          class="hover:bg-[#f4f4f4] flex items-center justify-between py-[11px] px-2"
        >
          <div class="flex items-center gap-5">
            <div class="w-[10%]">
              <img
                src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/category/1679399961_undefined_78204468_-500x500.png"
                alt="Care"
              />
            </div>
            <a href="/en/care/?page=1" class="text-sm text-black"> Care </a>
          </div>
          <img
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180 w-2"
          />
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center justify-between py-[11px] px-2">
         <div class="flex items-center gap-5">
            <div class="w-[10%]">
            <img
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/category/1679399773_undefined_78145330_icons2-041-500x500.png"
              alt="Gifts"
            />
          </div>
          <a href="/en/gifts/?page=1" class="text-sm text-black"> Gifts </a>
         </div>
         <img
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180 w-2"
          />
        </li>
        <li
          class="hover:bg-[#f4f4f4] flex items-center justify-between py-[11px] px-2"
        >
          <div class="flex items-center gap-5">
            <div class="w-[10%]">
              <img
                src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/category/1679399825_undefined_22946536_IMG_3317-500x500.png"
                alt="Nails"
              />
            </div>
            <a href="/en/nails/?page=1" class="text-sm text-black"> Nails </a>
          </div>
          <img
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180 w-2"
          />
        </li>
        <li
          class="hover:bg-[#f4f4f4] flex items-center justify-between py-[11px] px-2"
        >
          <div class="flex items-center gap-5">
            <div class="w-[10%]">
              <img
                src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/category/1679399732_undefined_31295627_-500x500.png"
                alt="Lenses"
              />
            </div>
            <a href="/en/lenses/?page=1" class="text-sm text-black"> Lenses </a>
          </div>
          <img
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180 w-2"
          />
        </li>
        <li
          class="hover:bg-[#f4f4f4] flex items-center justify-between py-[11px] px-2"
        >
          <div class="flex gap-5 items-center">
            <div class="w-[10%]">
              <img
                src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/category/1679399897_undefined_26607706_icons2-091-500x500.png"
                alt="Devices"
              />
            </div>
            <a href="/en/devices/?page=1" class="text-sm text-black">
              Devices
            </a>
          </div>
          <img
            src="https://cdn.niceonesa.com/web/assets/img/34fdceb.svg"
            class="transform rotate-180 w-2"
          />
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <div class="w-[10%]">
            <img
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/category/1679399614_undefined_19214021_icons2-07-500x500.png"
              alt="Home Scents"
            />
          </div>
          <a href="/en/home-scents/?page=1" class="text-sm text-black">
            Home Scents
          </a>
        </li>
      </ul>
      <ul class="relative max-w-[225px] min-w-[225px] min-h-full">
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/?page=1" class="text-sm text-black">
            All Products
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a
            href="/en/care/mouth--teeth-care/?page=1"
            class="text-sm text-black"
          >
            Mouth Teeth Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/derma-hub/?page=1" class="text-sm text-black">
            DERMA HUB
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/body-care/?page=1" class="text-sm text-black">
            Body Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/health-care/?page=1" class="text-sm text-black">
            Health Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="#" class="text-sm text-black">
            Hair Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/face-care/?page=1" class="text-sm text-black">
            Face Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/hand-care/?page=1" class="text-sm text-black">
            Hand Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/foot-care/?page=1" class="text-sm text-black">
            Foot Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/sunscreen/?page=1" class="text-sm text-black">
            Sunscreen
          </a>
        </li>
      </ul>
      <ul class="relative max-w-[225px] min-w-[225px] min-h-full">
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/?page=1" class="text-sm text-black">
            All Products
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a
            href="/en/care/mouth--teeth-care/?page=1"
            class="text-sm text-black"
          >
            Mouth Teeth Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/derma-hub/?page=1" class="text-sm text-black">
            DERMA HUB
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/body-care/?page=1" class="text-sm text-black">
            Body Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/health-care/?page=1" class="text-sm text-black">
            Health Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="#" class="text-sm text-black">
            Hair Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/face-care/?page=1" class="text-sm text-black">
            Face Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/hand-care/?page=1" class="text-sm text-black">
            Hand Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/foot-care/?page=1" class="text-sm text-black">
            Foot Care
          </a>
        </li>
        <li class="hover:bg-[#f4f4f4] flex items-center gap-5 py-[11px] px-2">
          <a href="/en/care/sunscreen/?page=1" class="text-sm text-black">
            Sunscreen
          </a>
        </li>
      </ul>
    </div>
  </ClientOnly>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>