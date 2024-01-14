<template>
    <div class="tw-flex tw-flex-col tw-gap-2">
        <h4 class="tw-text-base tw-font-bold">Image Can be accessed in:</h4>
        <div class="tw-px-4">
            <ol class="tw-list-decimal tw-text-base tw-font-semibold">
                <li v-for="(registry, index) in registryList" :key="index">
                    <a :src="registry.link" class="tw-cursor-pointer link tw-text-[#004f98]">{{ registry.link }}</a>
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup>
const registryList = ref([
    {
        link: "documentregistrygateway/fhirbase/DocumentReference/xxx"
    }
])
</script>

<style lang="scss" scoped>
.link {
    display: inline-block;
    position: relative !important;
}

.link:after {
    content: "";
    position: absolute !important;
    width: 100% !important;
    transform: scaleX(0);
    height: 2px !important;
    bottom: 0;
    left: 0;
    background-color: #004f98;
    transform-origin: bottom left !important;
    transition: transform 0.5s ease-in-out !important;
}

.link:hover:after {
    transform: scaleX(1) !important;
    transform-origin: bottom left !important;
}

.link.active::after {
    content: "";
    position: absolute !important;
    width: 100% !important;
    height: 2px !important;
    background-color: #004f98;
    transform: scaleX(1) !important;
}
</style>