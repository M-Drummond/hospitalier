<script setup lang="ts">

import type { RouterLink } from 'vue-router';


import { onMounted, computed } from 'vue';
import { useBedsStore } from '@/stores/BedsStore'
import { usePatientsStore } from '@/stores/PatientsStore'

import patientDisplayName from '@/utils/PatientDisplayName'

import PatientSummary from '../components/PatientSummary.vue'

import BedSummary from '../components/BedSummary.vue'

const ps = usePatientsStore();
const bs = useBedsStore();


const previewBeds = computed(() => {
  return bs.beds.slice(0, 5)
});

const previewPatients = computed(() => {
  return ps.patients.slice(0, 12)
});


</script>

<template>
  <main v-cloak>
    <h1 class="mb-4">At A Glance - Hospitalier</h1>
    <div class="flex md:flex-row space-x-4 items-stretch justify-center w-full">

      <div class="widget flex w-full">
        <h2>Beds - {{ bs.beds.length }}</h2>

        <div v-for="bed in bs.beds" v-if="!ps.loading" class="flex flex-row space-x-4">
          <BedSummary :bed />
        </div>

        <div v-else>

        </div>
        <RouterLink to="/beds" class="base-button">View All
          Beds
        </RouterLink>
      </div>
      <div class="widget flex w-1/3">
        <h2>Patients - {{ ps.patients.length }}</h2>
        <RouterLink :to="`/patient/${patient.slug}`" v-for="patient in previewPatients" :key="patient.id"
          class="flex hover:bg-gray-100 p-2 flex-col   border-b-2  w-full">
          <PatientSummary :patient />
        </RouterLink>
        <RouterLink to="/patients" class="base-button">View All
          {{ ps.patients.length }}
          Patients
        </RouterLink>
      </div>
    </div>

  </main>
</template>
