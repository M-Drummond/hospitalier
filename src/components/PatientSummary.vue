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
