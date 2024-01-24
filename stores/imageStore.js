export const useImageStore = defineStore("imageStore", {
    state: () => {
      return {
        images: [],
      }
    },
    getters: {
      // doubleCount: (state) => state.count * 2,
    },
    actions: {}
  });
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useImageStore, import.meta.hot));
  }