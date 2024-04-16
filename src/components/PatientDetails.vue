<script setup lang="ts">

import PatientDisplayName from '@/utils/PatientDisplayName'

defineProps({
    patient: {
        type: Object
    }
})
</script>

<script lang="ts">

</script>

<template>
    <div class="patientDetails mb-8">


        <img class="rounded-full my-4 w-24 h-24" :src="patient.picture.medium" />

        <div class="flex flex-row items-center space-x-2">

            <span>
                Age:</span>
            <span class="font-bold">
                {{ patient.dob.age }}
            </span>
            <span>
                - {{ patient.email }}
            </span>
            <!-- <span class="font-bold">Name:</span> -->
            <!-- {{ patientDisplayName(patient) }} -->
        </div>
        <div>

            <!-- <span class="font-bold">ID:</span> -->
            <!-- {{ patient.id?.name }} -
            {{ patient.id?.value }} -->
        </div>
    </div>

</template>
<style scoped></style>
