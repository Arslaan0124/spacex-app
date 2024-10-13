<template>
    <div>
      <h1>Saved Launches</h1>
      <div v-if="!store.loading">
        <div v-for="launch in store.savedLaunches" :key="launch._id">
          <p>{{ launch.name }} - {{ launch.date_utc }}</p>
          <button @click="deleteLaunch(launch._id)" :disabled="store.deletingLaunches.includes(launch._id)">
            <span v-if="store.deletingLaunches.includes(launch._id)">Deleting...</span><span v-else>Delete</span>
          </button>
        </div>
      </div>
      <div v-if="store.loading">Loading...</div>
      <NuxtLink to="/">View Recent Launches</NuxtLink>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useLaunchStore } from '~/stores/launchStore';
  const store = useLaunchStore();
  
  onMounted(() => {
    store.fetchSavedLaunches();
  });
  
  const deleteLaunch = (id: string) => {
    store.deleteLaunch(id);
  };
  </script>
  