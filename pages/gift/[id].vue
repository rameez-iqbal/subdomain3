<template>
  <div class="container mx-auto w-4/6 mt-4">
    <div class="flex flex-col bg-white py-[10px] px-[30px] min-h-[76vh]">
      <p class="text-2xl font-semibold text-black my-[15px]">
        Receiving the gift
      </p>
      <div class="flex gap-2 w-full">
        <div class="flex items-start w-5/12">
          <div class="relative">
            <p class="text-2xl bottom-7 left-6 absolute font-bold">50 SAR</p>
            <img class="rounded-lg mb-3" src="@/assets/img/gift.png" alt="" />
          </div>
        </div>
        <div class="flex gap-4 flex-col w-7/12">
          <div class="p-4 rounded-[10px] border-[1px] border-[#e1e1e1]">
            <p class="text-sm text-[#202020] mb-1">
              Hello,
              <span class="text-[22px] font-bold">Abdul Majeed</span>
            </p>
            <p class="text-sm text-[#202020] break-words">
              Happy New Year, Nevin, and I wish you a happy and blessed
              birthday. I wish you a happy and blessed birthday. Happy New Year,
              and I wish you a happy and blessed birthday.
            </p>
          </div>
          <div class="p-4 rounded-[10px] border-[1px] border-[#e1e1e1]">
            <p
              class="md:text-[17px] md:font-bold font-normal text-[15px] text-[#202020]"
            >
              Card code
            </p>
            <div
              class="flex justify-between items-center my-2 p-[10px] rounded-lg border-[1px] border-dashed border-[#cecece] bg-[#f9f9f9]"
            >
              <p class="text-[19px] font-bold text-[#9272d4]">4563</p>

              <!-- <b-tooltip v-if="dataText !== ''" target="tooltip-button-2">
                    {{ dataText }}
                  </b-tooltip> -->
              <van-popover
                v-model:show="showPopover"
                :actions="actions"
                @select="onSelect"
              >
                <template #reference>
                  <p
                    id="tooltip-button-2"
                    class="text-[13px] font-bold cursor-pointer text-[#9272d4]"
                    @click.stop.prevent="copyCode"
                    @mouseover="showText"
                  >
                    Copy
                  </p>
                </template>
              </van-popover>

              <input id="ref-code" type="hidden" :value="4563" />
            </div>
            <p class="font-semibold text-[13px] text-[#757575]">
              Copy the card code to add 50 Saudi riyals to your balance
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
definePageMeta({
  layout: "gift",
});
const dataText = ref("Copy Code");
const showPopover = ref(false);
const copyReferralCode = document.getElementById("ref-code");
const actions = [{ text: dataText.value }];

const showText = () => {
  showPopover.value = true;
  dataText.value = "Copy Code";
};
const onSelect = () => {
  const copyReferralCode = document.querySelector("#ref-code");
  copyReferralCode.setAttribute("type", "text");
  copyReferralCode.select();
  try {
    const successful = document.execCommand("copy");
    if (successful){
      showToast({
      message:'Code copied successfully',
      position:'top'
    });
    } 
  } catch (err) {
    showToast({
      message:'Oops, unable to copy',
      position:'top'
    });
  }
  copyReferralCode.setAttribute("type", "hidden");
  window.getSelection().removeAllRanges();
};
</script>