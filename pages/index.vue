<template>
  <div class="tw-container tw-py-10">
    <div class="tw-flex tw-flex-col tw-gap-4 tw-text-gray-700">
      <h1 class="tw-text-2xl tw-font-bold">Document Repository Upload Image</h1>
      <div
        class="tw-w-8/12 tw-border tw-border-slate-700 tw-p-4 tw-rounded-xl tw-bg-slate-300"
      >
        <div class="tw-flex tw-flex-col tw-gap-8">
          <RepositoryDataPatient />
          <RepositoryDataImage />
        </div>
      </div>
    </div>
  </div>
  <Transition
    enter-active-class="tw-transition-opacity tw-ease-linear tw-opacity-0"
    leave-active-class="tw-transition-opacity tw-ease-linear tw-opacity-0"
    enter-from-class="tw-opacity-1"
    leave-to-class="tw-opacity-1"
  >
    <ModalPhoto v-if="openModalPhoto" />
  </Transition>
</template>

<script setup>
const imageStore = useImageStore();
const openModalPhoto = computed(() => imageStore.$state.open_modal_photo);
</script>

<style lang="scss" scoped></style>
