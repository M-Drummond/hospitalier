import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type Patient from '@/types/Patient'

interface Bed {
  id: number
  patient: Patient
  location: object
}

export const useBedsStore = defineStore('bedsStore', {
  state: () => ({
    beds: [
      { id: 1, patient: null, location: 'West Hall' },
      { id: 2, patient: null, location: 'West Hall' },
      { id: 3, patient: null, location: 'West Hall' },
      { id: 4, patient: null, location: 'Eastern Dorm' },
      { id: 5, patient: null, location: 'West Hall' },
      { id: 6, patient: null, location: 'Eastern Dorm' },
      { id: 7, patient: null, location: 'Eastern Dorm' },
      { id: 8, patient: null, location: 'South Dorm' },
      { id: 9, patient: null, location: 'South Dorm' }
    ] as Bed[]
  }),
  actions: {
    findEmptyBeds() {
      return this.beds.filter((bed) => bed.patientID === null)
    },
    assign(patient: Patient, bed: number) {
      const selectedBed = this.beds.find((b) => b.id === bed)

      if (selectedBed) {
        selectedBed.patient = patient
        patient.assignedBed = selectedBed
      }
    },
    removePatientFromBed(patient) {
      console.log(patient.assignedBed.id)
      const selectedBed = this.beds.find((b) => b.id === patient.assignedBed.id)
      selectedBed.patient = null
    }
  },
  getters: {
    groupedBeds() {
      const grouped = {}
      this.beds.forEach((bed) => {
        if (!grouped[bed.location]) {
          grouped[bed.location] = []
        }
        grouped[bed.location].push(bed)
      })
      console.log('grouped:  ' + grouped)
      return grouped
    }
  }
})
