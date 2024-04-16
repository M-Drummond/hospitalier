<script setup lang="ts">

import { ref } from 'vue'

defineProps({
    patient: {
        type: Object,
        required: true
    }
})

const text = ref()
const invalid = ref(true)
const attempted = ref(false)
function handleNotesForm(event, patient) {
    console.log(text, invalid, attempted)
    if (text.value) {
        invalid.value = false
        attempted.value = false
        patient.notes.push(text.value)
        text.value = ''
    } else {
        attempted.value = true
    }
}


</script>

<script lang="ts">

</script>

<template>

    <div v-if="patient.notes">
        <h3 class="mb-4">Notes</h3>
        <div v-for="note in patient.notes" class="bg-white mb-2 p-2   border border-solid border-gray-400">
            {{ note }}
        </div>
    </div>
    <form @submit.prevent="handleNotesForm($event, patient)" id="PatientNotes"
        class="flex flex-col items-start border text-xs border-solid mb-4 p-4 border-gray-400 ">
        <h3 class="mb-4">Add Notes</h3>
        <textarea v-model="text" placeholder="Add Note"
            class="min-h-[12px] border border-solid border-gray-400 rounded-lg  w-full p-2"></textarea>
        <transition name="fade">
            <p v-if="attempted">Note must have content</p>
        </transition>
        <button class="action-button flex justify-between max-w-[200px] self-end"><span>Add Note</span><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"
                    clip-rule="evenodd" />
            </svg>
        </button>

    </form>

</template>
<style scoped></style>
