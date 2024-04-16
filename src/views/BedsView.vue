<script setup lang="ts">

import { onMounted, computed } from 'vue';
import { useBedsStore } from '@/stores/BedsStore'
import { usePatientsStore } from '@/stores/PatientsStore'

import patientDisplayName from '@/utils/PatientDisplayName'

import BedSummary from '@/components/BedSummary.vue'

const ps = usePatientsStore();
const bs = useBedsStore();


const groupedBeds = computed(() => {
    const grouped = {};
    bs.beds.forEach(bed => {
        if (!grouped[bed.location]) {
            grouped[bed.location] = [];
        }
        grouped[bed.location].push(bed);
    });
    return grouped;
});


</script>

<template>
    <main>
        <div class="flex md:flex-row md:justify-between px-8 md:space-x-4 w-full">
            <div v-for="(beds, location) in groupedBeds" :key="location">
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
