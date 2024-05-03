import VueGapi from 'vue-gapi'
// import { useUserStore } from '../../stores/userStore'
export default defineNuxtPlugin(nuxtApp=>{
    const userStore = useUserStore();
    const clientId = computed(()=>userStore.$state.client_id);
    const apiKey = computed(()=>userStore.$state.api_key);
    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
    const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
    nuxtApp.vueApp.use(VueGapi,{
        apiKey: `${apiKey}`,
        clientId: `${clientId}`,
        discoveryDocs: [DISCOVERY_DOC],
        scope: SCOPES,
    })
})