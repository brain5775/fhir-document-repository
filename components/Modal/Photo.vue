<template>
    <Modal>
        <div class="tw-w-fit tw-h-fit tw-bg-white  tw-rounded-lg tw-relative tw-overflow-auto">
            <nav
                class="tw-py-2 tw-px-2 tw-flex tw-justify-end tw-border-b-2 tw-absolute tw-w-full tw-top-0 tw-bg-white tw-z-50">
                <span
                    class="tw-p-1.5 tw-border tw-border-slate-700 tw-rounded hover:tw-bg-red-500 hover:tw-text-white tw-transition-all tw-ease-in-out tw-cursor-pointer tw-h-fit"
                    @click="closeModal()">
                    <svgoClose class="tw-w-6 tw-h-6" />
                </span>
            </nav>
            <section class="tw-relative">
                <video ref="video" @canplay="initCanvas()" width="960">Stream Unavailable</video>
                <button @click="takePicture()"
                    class="tw-absolute tw-p-6 tw-bg-red-500 tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-rounded-full"></button>
                <canvas ref="canvas" class="tw-hidden" />
            </section>
        </div>
    </Modal>
</template>

<script setup>
const imageStore = useImageStore();
const video = ref();
const canvas = ref();

onMounted(() => {
    video.value = video.value;
    canvas.value = canvas.value;
    startCapture();
});

const startCapture = () => {
    navigator.mediaDevices.getUserMedia({
        video: true, audio: false
    }).then(stream => {
        video.value.srcObject = stream;
        video.value.play();
    }).catch(error => {
        console.log(error);
    })
}

const initCanvas = () => {
    canvas.value.setAttribute('width', video.value.videoWidth);
    canvas.value.setAttribute('height', video.value.videoHeight);
}

const takePicture = () => {
    let context = canvas.value.getContext('2d');
    context.drawImage(video.value, 0, 0, video.value.videoWidth, video.value.videoHeight);
    imageStore.images.push(canvas.value.toDataURL('image/png'))
    localStorage.setItem('images', JSON.stringify(imageStore.images));
}

const closeModal = () => {
    imageStore.$patch({
        open_modal_photo: false
    })
}
</script>

<style lang="scss" scoped></style>