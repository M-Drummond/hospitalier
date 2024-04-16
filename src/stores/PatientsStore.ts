import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import patientNameAsSlug from '@/utils/PatientNameAsSlug'

import { fetchData } from '@/api/api'

import type Patient from '@/types/Patient.ts'

export const usePatientsStore = defineStore('patientsStore', {
  state: () => ({
    patients: [] as Patient[],
    loading: true
  }),
  actions: {
    async getData(params?: string) {
      console.log('getting data ')
      try {
        const fetchedData = await fetchData(params)

        const modifiedData =
          fetchedData.results?.map((item) => ({
            ...item,
            slug: patientNameAsSlug(item),
            patientID: Math.round(Math.random() * 110 + Math.random() * 1),
            notes: [],
            assignedBed: null
          })) ?? []
        this.patients = modifiedData
        this.loading = false
      } catch (error) {
        console.error('Error fetching data:', error)
        // Handle error or throw it further
      }
    },
    removeBedFrompatient(patient) {
      patient.assignedBed = null
    }
  }
})
