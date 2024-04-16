<script setup lang="ts">

import { useBedsStore } from '@/stores/BedsStore';
import { usePatientsStore } from '@/stores/PatientsStore';
import { useUiStore } from '@/stores/UiStore'

const bs = useBedsStore();
const ps = usePatientsStore();
const ui = useUiStore();

import unassign from '@/utils/Unassign'

defineProps({
    patient: {
        type: Object,
        required: true
    }
})

const handleAssignButton = function (patient) {
    ui.assignPatientModalVisible = true
    ui.assigningPatient = patient
}

</script>

<template>
    <div class="flex flex-row justify-between text-xs w-full relative">

        <button class="action-button flex flex-row justify-between space-x-4  text-md"
            @click="handleAssignButton(patient)">
            {{ patient.assignedBed?.id ? `Bed: ${patient.assignedBed.id}` : 'Assign' }}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

        </button>

        <button v-if="patient.assignedBed?.id"
            class="remove-button ml-2 flex flex-row justify-between space-x-4   text-md" @click="unassign(patient)">
            <span>Unassign</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>

    </div>
</template>