<template>
    <div class="tw-flex tw-flex-col tw-gap-2">
        <h2 class="tw-font-bold tw-text-2xl">Patient</h2>
        <hr class="tw-w-full tw-border-2 tw-border-slate-700 tw-rounded-lg" />
        <div class="tw-grid tw-grid-cols-2 tw-gap-2">
            <div class="tw-flex tw-flex-col tw-gap-2 tw-text-base tw-col-span-2">
                <h4 class="tw-font-bold">ID Number:</h4>
                <div class="tw-w-full tw-rounded-lg tw-p-2 tw-overflow-clip tw-bg-slate-700 tw-text-white"
                    v-if="!patientLoading">
                    <ul class="tw-list-disc tw-ml-4">
                        <li v-for="(id, index) in patient.identifier" :key="index">{{ id.value }}</li>
                    </ul>
                </div>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2 tw-text-base">
                <h4 class="tw-font-bold">Name:</h4>
                <div class="tw-w-full tw-rounded-lg tw-p-2 tw-overflow-clip tw-bg-slate-700 tw-text-white"
                    v-if="!patientLoading">
                    <span v-for="(nm, index) in patient.name" :key="index">{{ nm.text }}</span>
                </div>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2 tw-text-base">
                <h4 class="tw-font-bold">Gender:</h4>
                <div class="tw-w-full tw-rounded-lg tw-p-2 tw-overflow-clip tw-bg-slate-700 tw-text-white"
                    v-if="!patientLoading">
                    <span>{{ patient.gender }}</span>
                </div>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2 tw-text-base">
                <h4 class="tw-font-bold">Birthdate:</h4>
                <div class="tw-w-full tw-rounded-lg tw-p-2 tw-overflow-clip tw-bg-slate-700 tw-text-white"
                    v-if="!patientLoading">
                    <span>{{ dateFormat(patient.birthDate) }}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- {{ patient }} -->
</template>

<script setup>
const imageStore = useImageStore();

onMounted(() => {
    imageStore.GET_PATIENT_DATA();
})

// patient
const patient = computed(() => imageStore.$state.patient);
const patientLoading = computed(() => imageStore.$state.patient_loading);
</script>

<style lang="scss" scoped></style>