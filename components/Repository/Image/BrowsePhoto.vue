<template>
  <input
    ref="file"
    type="file"
    id="photo"
    class="tw-hidden"
    accept="image/*"
    @change="inputPhoto($event)"
    multiple
  />
  <label
    for="photo"
    class="tw-bg-sky-100 tw-shadow-md tw-p-1.5 tw-rounded-xl tw-flex tw-items-center tw-gap-1.5 tw-cursor-pointer"
  >
    <svgo-folderSearch class="tw-w-6 tw-h-6" filled />
    <span>Browse Photo</span>
  </label>
</template>

<script setup>
// store
const imageStore = useImageStore();

// input data
const file = ref();

const inputPhoto = (e) => {
  const files = e.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = () => {
      // Save the file content to the images array
      imageStore.images.push({ url: reader.result, name: file.name });
      // Save the images array to localStorage with the key 'images'
      localStorage.setItem("images", JSON.stringify(imageStore.images));
    };

    // Read the content of the file as a data URL (for images)
    reader.readAsDataURL(file);
  }
  file.value.value = null;
};
</script>

<style lang="scss" scoped></style>
