<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import AssignPatientToBedModal from '@/components/AssignPatientToBedModal.vue'

import { useBedsStore } from '@/stores/BedsStore.ts'

import { usePatientsStore } from './stores/PatientsStore';

import router from './router';
import { useUiStore } from './stores/UiStore';

const bs = useBedsStore();
const ps = usePatientsStore()
const ui = useUiStore();

ps.getData();

</script>

<template>


  <div class="min-h-screen transition-all" :class="ui.assignPatientModalVisible ? 'modal-open opacity-20' : ''">


    <header>

      <nav class="bg-white border border-solid border-gray-500 p-4   my-2 space-x-4 container mx-auto">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/patients/">Patients</RouterLink>
        <RouterLink to="/beds/">Beds</RouterLink>
      </nav>

    </header>


    <div class="bg-white border border-solid border-gray-500 p-4    container mx-auto">
      <RouterView />
    </div>

    <div class="container mx-auto my-4">

      <nav class="bg-white border border-solid border-gray-500 p-4   my-2 space-x-4 container mx-auto">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/patients/">Patients</RouterLink>
        <RouterLink to="/beds/">Beds</RouterLink>
      </nav>

    </div>

  </div>

  <AssignPatientToBedModal />

</template>

<style scoped>
nav a {
  @apply inline-block p-2 hover:bg-gray-200 font-bold;
}
</style>