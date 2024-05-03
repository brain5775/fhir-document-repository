import axios from "axios";
export const useImageStore = defineStore("imageStore", {
    state: () => {
      return {
        // image data
        images: [],

        // BASE URL
        base_url: useRuntimeConfig().public.BASE_URL,

        // patient data
        patient: null,
        patient_loading: true,

        // modal
        open_modal_photo: false,
      }
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
      async GET_PATIENT_DATA(){
        try{
          this.patient_loading = true;
          // this.patient = {
          //   "resourceType": "Patient",
          //   "id": "TCUMI.Patient01",
          //   "meta": {
          //     "versionId": "4",
          //     "lastUpdated": "2023-06-19T23:56:20.376+08:00",
          //     "source": "#pXS4dqIZfSNieVMa"
          //   },
          //   "text": {
          //     "status": "generated",
          //     "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody/></table></div>"
          //   },
          //   "identifier": [ {
          //     "system": "http://www.boca.gov.tw/",
          //     "value": "310942728"
          //   }, {
          //     "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=1986712865",
          //     "value": "JianHospital_Patient01"
          //   } ],
          //   "name": [ {
          //     "text": "Billy Smith",
          //     "family": "Smith",
          //     "given": [ "Billy" ]
          //   } ],
          //   "gender": "male",
          //   "birthDate": "2000-03-03T01:52:25.835+08:00",
          //   "managingOrganization": {
          //     "reference": "Organization/TCUMI.Organization01",
          //     "display": "Jian Hospital"
          //   }
          // }
          // https://203.64.84.150:58443/r5/fhir/Patient/TCUMI.Patient01
          const response = await axios.get(
            `${this.base_url}/r5/fhir/Patient/TCUMI.Patient01`,
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
          );
          this.patient_loading = false;
          this.patient = response.data;
        }catch(error){
          console.log(error);
          
        }
      }
    }
  });
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useImageStore, import.meta.hot));
  }