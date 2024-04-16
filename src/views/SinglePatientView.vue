<script setup lang="ts">

import { onMounted, computed } from 'vue';
import { usePatientsStore } from '@/stores/PatientsStore'
import PatientDisplayName from '@/utils/PatientDisplayName';

import PatientSummary from '../components/PatientSummary.vue'
import PatientDetails from '../components/PatientDetails.vue'
import PatientNotes from '../components/PatientNotes.vue'
import PatientAssignedBed from '@/components/PatientAssignedBed.vue';


import router from '@/router';

const ps = usePatientsStore();

const current = router.currentRoute.value.params.slug

console.log(current)

const patient = ps.patients.find((p) => (p.slug === current));


</script>

<template>
    <main>
        <div class=" w-full" v-if="patient">
            <!-- {{ patientDisplayName(singlePatient) }} -->
            <h2>{{ PatientDisplayName(patient) }}</h2>
            <div class="widget w-full    gap-2 p-2">
                <PatientSummary :patient />
                <PatientDetails :patient />
                <PatientNotes :patient />
                <PatientAssignedBed :patient />
            </div>
        </div>

    </main>
</template>
