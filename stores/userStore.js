import axios from "axios";
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      // user data
      user: null,

      // ENV
      base_url: useRuntimeConfig().public.BASE_URL,
      client_id: useRuntimeConfig().public.CLIENT_ID,
      api_key: useRuntimeConfig().public.API_KEY,
      endpoint: useRuntimeConfig().public.ENPOINT,

      is_signin: false,
      token: null,
      user: null,
    };
  },
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    async ERROR(error, message) {
      console.log(error.status);
      if (error?.response?.status === 401) {
        // await this.LOGOUT(true, message);
        throw error;
      } else {
        // useToast("error", error.message ?? "Ada Kesalahan Server");
        throw new Error(error);
      }
    },
    async uploadToGdrive(images) {
      try {
        // console.log(images)
        await axios.post(
          "https://www.googleapis.com/upload/drive/v3/files",
          images,
          {
            headers: { Authorization: `Bearer ${this.token}` },
          }
        );
      } catch (error) {
        console.log(error);
        // this.ERROR(error);
      }
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
