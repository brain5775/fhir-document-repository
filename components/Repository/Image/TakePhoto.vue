<template>
  <button
    class="tw-bg-sky-100 tw-shadow-md tw-p-1.5 tw-rounded-xl tw-flex tw-items-center tw-gap-1.5"
    @click="takePhoto()"
  >
    <svgo-camera class="tw-w-6 tw-h-6" filled />
    <span>Take Photo</span>
  </button>
</template>

<script setup>
const imageStore = useImageStore();
const takePhoto = () => {
  imageStore.$patch({
    open_modal_photo: true,
  });
};
</script>

<style lang="scss" scoped></style>
