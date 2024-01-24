<template>
    <div class="tw-grid tw-grid-cols-4 tw-gap-2" v-if="imageList.length">
        <div class="tw-relative" v-for="(img, index) in imageList" :key="index">
            <img :src="img" />
            <span class="tw-absolute tw-top-1 tw-right-1" @click="deleteSelectedImg(index)">
                <svgoTrash class="tw-w-5 tw-h-5  tw-stroke-red-500 tw-text-[#ffffff01] tw-cursor-pointer" />
            </span>
        </div>
    </div>
    {{ imageList }}
</template>

<script setup>
// store
const imageStore = useImageStore();

const imageList = computed(() => imageStore.$state.images)

const createImageURL = (url) => {
    return URL.createObjectURL(url);
};

onMounted(() => {
    // Load images array from localStorage
    const imagesString = localStorage.getItem('images');
    imageStore.images = imagesString ? JSON.parse(imagesString) : [];
})

const deleteSelectedImg = (index) => {
    // Remove the image at the specified index
    const reader = new FileReader();
    imageStore.images.splice(index, 1);

    // Update localStorage with the modified images array
    localStorage.setItem('images', JSON.stringify(imageList.value));
}
</script>

<style lang="scss" scoped></style>
