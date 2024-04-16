<script setup lang="ts">

import patientDisplayName from '@/utils/PatientDisplayName'

defineProps({
    patient: {
        type: Object
    }
})
</script>

<script lang="ts">

</script>

<template>
    <div class="patientSummary" v-if="patient">

        <div class="relative h-10">
            <transition name="fade">
                <h3 v-if="patient.assignedBed">Assigned to Bed: {{ patient.assignedBed?.id }}</h3>
                <h3 v-else>Not Assigned a Bed </h3>
            </transition>
        </div>


        <div>
            <span class="font-bold">Name:</span>
            {{ patientDisplayName(patient) }}
        </div>
        <div>
            <span class="font-bold">ID:</span>
            {{ patient.patientID }}
        </div>
    </div>

</template>
<style scoped></style>
