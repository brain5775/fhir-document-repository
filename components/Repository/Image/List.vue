<template>
    <div class="tw-grid tw-grid-cols-4 tw-gap-2">
        <div class="tw-relative" v-for="(img, index) in imgList" :key="index">
            <img :src="getImage(`${img.src}`)" />
            <span class="tw-absolute tw-top-1 tw-right-1">
                <svgoTrash class="tw-w-5 tw-h-5  tw-stroke-red-500 tw-text-[#ffffff01]" />
            </span>
        </div>
    </div>
</template>

<script setup>
const imgList = ref([
    {
        src: "dummy-image/1.jpg"
    },
    {
        src: "dummy-image/2.jpg"
    },
    {
        src: "dummy-image/3.jpg"
    },
    {
        src: "dummy-image/1.jpg"
    }
]);
</script>

<style lang="scss" scoped></style>
