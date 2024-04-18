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
    <transition enter-active-class="transition duration-150 ease-in-out transform" enter-from-class="translate-x-full"
        enter-to-class="translate-x-0" leave-active-class="transition duration-150 ease-in-out transform"
        leave-from-class="translate-x-0" leave-to-class="translate-x-full">
        <div id="assignModal" v-show="ui.assignPatientModalVisible"
            class="fixed top-0 right-0 w-11/12 h-screen p-4 bg-white border-l border-gray-200 shadow-2xl md:w-1/3">

            <button @click="ui.assignPatientModalVisible = false" class="absolute right-2 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </button>

            <h2 class="mt-8">{{ ui.assigningPatient ? `Assigning ${PatientDisplayName(ui.assigningPatient)}` : 'Loading'
                }} to Bed
            </h2>

            <form>
                <div class="p-2 mt-4 border border-gray-200 border-solid">
                    <div class="flex flex-row">
                        <label for="bed">Bed: </label>
                        <select id="bed" class="w-full" v-model="selectedBedId">
                            <!-- <option disabed>Select A Bed</option> -->
                            <optgroup :label="location" v-for="(beds, location) in bs.groupedBeds" :key="location">

                                <option v-for="bed in beds" :key="bed.id" :value="bed.id">
                                    {{ bed.id }}
                                </option>

                            </optgroup>
                        </select>
                    </div>
                </div>
            </form>


            <button class="justify-between action-button"
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
                    class="p-2 mb-2 bg-white border border-gray-400 border-solid">
                    {{ note }}
                </div>
            </div>


        </div>
    </transition>


</template>
<style scoped></style>
