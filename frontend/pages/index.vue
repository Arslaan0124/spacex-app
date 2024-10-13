<template>
  <div>
    <h1>SpaceX Launches</h1>

    <!-- Button to navigate to the saved launches page -->
    <NuxtLink to="/saved">
      <button>View Saved Launches</button>
    </NuxtLink>

    <table v-if="!store.loading">
      <tr v-for="launch in store.launches" :key="launch.flight_number">
        <td>{{ launch.flight_number }}</td>
        <td>{{ launch.name }}</td>
        <td>{{ launch.date_utc }}</td>
        <td>
          <!-- Check if the launch is being saved by looking at savingLaunches array -->
          <button @click="saveLaunch(launch)" :disabled="store.savingLaunches.includes(launch.name)">
            <span v-if="store.savingLaunches.includes(launch.name)">Saving...</span>
            <span v-else>Save</span>
          </button>
        </td>
      </tr>
    </table>

    <div v-if="store.loading">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { useLaunchStore } from '~/stores/launchStore';
const store = useLaunchStore();

onMounted(() => {
  store.fetchLaunches();
});

const saveLaunch = (launch: any) => {
  store.saveLaunch(launch);
};
</script>
