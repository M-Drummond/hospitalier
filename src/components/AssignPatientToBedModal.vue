<script setup lang="ts">

import { computed, ref } from 'vue'
import { useBedsStore } from '@/stores/BedsStore';
import { useUiStore } from '@/stores/UiStore';

import PatientDisplayName from '@/utils/PatientDisplayName';


const ui = useUiStore();
const bs = useBedsStore();

const emptyBeds = computed(() => {
    return bs.beds.filter(bed => bed.patient === null);
});

const selectedBedId = ref()


</script>

<script lang="ts">

</script>

<template>
    <transition enter-active-class="transition ease-in-out duration-150 transform" enter-from-class="translate-x-full"
        enter-to-class="translate-x-0" leave-active-class="transition ease-in-out duration-150 transform"
        leave-from-class="translate-x-0" leave-to-class="translate-x-full">
        <div id="assignModal" v-show="ui.assignPatientModalVisible"
            class="bg-white border-l border-gray-200 shadow-2xl h-screen p-4  fixed top-0 w-11/12 md:w-1/3 right-0">

            <button @click="ui.assignPatientModalVisible = false" class="right-2 top-2 absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </button>

            <h2 class="mt-8">{{ ui.assigningPatient ? `Assigning ${PatientDisplayName(ui.assigningPatient)}` : 'Loading'
                }} to Bed
            </h2>

            <form>
                <div class="border border-solid border-gray-200 mt-4 p-2">
                    <div class="flex flex-row">
                        <label for="bed">Bed: </label>
                        <select id="bed" class="w-full" v-model="selectedBedId">
                            <!-- <option disabed>Select A Bed</option> -->
                            <option :value="bed.id" v-for="bed in emptyBeds">{{ bed.id }}</option>
                        </select>
                    </div>
                </div>
            </form>


            <button class="action-button justify-between"
                @click="ui.assignPatientModalVisible = false, bs.assign(ui.assigningPatient, selectedBedId)">
                <span>Assign</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </button>


            <div v-if="ui.assigningPatient?.notes.length >= 1" class="mt-4">
                <h3 class="mb-4">Patient Notes</h3>
                <div v-for="note in ui.assigningPatient.notes"
                    class="bg-white mb-2 p-2   border border-solid border-gray-400">
                    {{ note }}
                </div>
            </div>


        </div>
    </transition>


</template>
<style scoped></style>
