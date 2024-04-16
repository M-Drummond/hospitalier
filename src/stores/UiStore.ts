import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type Patient from '@/types/Patient'

export const useUiStore = defineStore('uiStore', {
  state: () => ({
    assignPatientModalVisible: false,
    assigningPatient: null
  }),
  actions: {
    // async getData(params?: string) {
    //   console.log('getting data ')
    //   try {
    //     const fetchedData = await fetchData(params)
    //     const modifiedData =
    //       fetchedData.results?.map((item) => ({
    //         ...item,
    //         slug: patientNameAsSlug(item),
    //         assignedBed: null
    //       })) ?? []
    //     this.patients = modifiedData
    //   } catch (error) {
    //     console.error('Error fetching data:', error)
    //     // Handle error or throw it further
    //   }
    // }
  }
})
