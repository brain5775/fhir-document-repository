<template>
  <div class="tw-container tw-py-10">
    <div class="tw-flex tw-flex-col tw-gap-4 tw-text-gray-700">
      <h1 class="tw-text-2xl tw-font-bold">Document Repository Upload Image</h1>
      <div class="tw-w-8/12 tw-border tw-border-slate-700 tw-p-4 tw-rounded-xl tw-bg-slate-300">
        <div class="tw-flex tw-flex-col tw-gap-8">
          <div class="tw-flex tw-items-center tw-gap-2">
            <h4 class="tw-text-lg tw-font-bold">Pasien Name:</h4>
            <span>{{ "Tuyul Bayul" }}</span>
          </div>
          <RepositoryImage />
          <RepositoryAction />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
