<script setup lang="ts">

import { onMounted, computed } from 'vue';
import { usePatientsStore } from '@/stores/PatientsStore'


import PatientSummary from '../components/PatientSummary.vue'
import PatientDetails from '../components/PatientDetails.vue'
import PatientAssignedBed from '../components/PatientAssignedBed.vue'

const ps = usePatientsStore();

</script>

<template>
    <main>
        <div class=" w-full">
            <h2>Patients</h2>
            <div class="widget w-full grid grid-cols-2 md:grid-cols-4 mt-8  gap-2 p-2">

                <div v-for="patient in ps.patients" :key="patient.id"
                    :class="patient.assignedBed?.id ? 'border-green-500' : ''"
                    class="border-gray-500 hover:shadow-sm transition-all hover:bg-white md:min-h-full border-solid border-2 p-4">

                    <router-link class="" :to="`/patient/${patient.slug}`">
                        <img class="rounded-full my-4 mx-auto w-24 h-24" :src="patient.picture.thumbnail" />
                    </router-link>

                    <PatientSummary :patient />
                    <!-- <PatientDetails :patient /> -->

                    <router-link class="base-button w-full block text-xs" :to="`/patient/${patient.slug}`">
                        View Patient </router-link>


                    <PatientAssignedBed :patient />

                </div>

            </div>
        </div>

    </main>
</template>
