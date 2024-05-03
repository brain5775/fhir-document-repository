<template>
  <button
    class="tw-bg-sky-100 tw-shadow-md tw-p-1.5 tw-rounded-xl tw-flex tw-items-center tw-gap-1.5"
    @click="uploadToDrive()"
  >
    <svgo-googledrive class="tw-w-6 tw-h-6" filled />
    <span>Save To Google Drive</span>
  </button>
  <!-- {{isSignin}}-{{token}} -->
</template>

<script setup>
// store
const userStore = useUserStore();
const imageStore = useImageStore();

const token = computed(() => userStore.$state.token);
const isSignin = computed(() => userStore.$state.is_signin);

// Must have
const clientId = computed(() => userStore.$state.client_id);
const apiKey = computed(() => userStore.$state.api_key);

const images = computed(() => imageStore.$state.images);
const endpoint = computed(() => userStore.$state.endpoint);

const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const SCOPES =
  "https://www.googleapis.com/auth/drive.appdata,https://www.googleapis.com/auth/drive.appfolder,https://www.googleapis.com/auth/drive.install,https://www.googleapis.com/auth/drive.file,https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/drive.metadata";

const urlToFile = (url, filename, mimeType) => {
  if (url.startsWith("data:")) {
    var arr = url.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    var file = new File([u8arr], filename, { type: mime || mimeType });
    return Promise.resolve(file);
  }
  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], filename, { type: mimeType }));
};

const uploadToDrive = async () => {
  const imageList = images.value;
  if (imageList.length > 0) {
    const formData = new FormData();
    await imageList.forEach(async (img) => {
      formData.append(
        "files",
        await urlToFile(img.url, img.name, `image/jpeg`)
      );
      // console.log(await urlToFile(img.url, img.name, `image/jpg`));
    });
    try {
      const response = await fetch(`${endpoint.value}/upload-to-drive`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      imageStore.images = [];
      localStorage.removeItem("images");
      console.log("files uploaded successfully", data);
    } catch (error) {
      console.log(error);
    }
  }
  // urlToFile();
};
</script>

<style lang="scss" scoped></style>
