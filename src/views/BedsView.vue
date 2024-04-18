<script setup lang="ts">

import { onMounted, computed } from 'vue';
import { useBedsStore } from '@/stores/BedsStore'
import { usePatientsStore } from '@/stores/PatientsStore'

import patientDisplayName from '@/utils/PatientDisplayName'

import BedSummary from '@/components/BedSummary.vue'

const ps = usePatientsStore();
const bs = useBedsStore();

</script>

<template>
    <main>
        <div class="flex w-full px-8 md:flex-row md:justify-between md:space-x-4">
            <div v-for="(beds, location) in bs.groupedBeds" :key="location">
                <h2>{{ location }}</h2>
                <ul>
                    <li v-for="bed in bs.beds" :key="bed.id">
                        <div v-if="bed.location === location">

                            <BedSummary :bed />
                        </div>
                    </li>
                </ul>
            </div>

        </div>

    </main>
</template>
