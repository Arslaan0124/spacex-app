<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Launches</h1>

    <Table v-if="!store.loading" class="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>Flight Number</TableHead>
          <TableHead>Launch Name</TableHead>
          <TableHead>Launch Date (UTC)</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="launch in store.launches" :key="launch.flight_number">
          <TableCell>{{ launch.flight_number }}</TableCell>
          <TableCell>{{ launch.name }}</TableCell>
          <TableCell
            >{{ new Date(launch.date_utc).toLocaleDateString() }}
            {{ new Date(launch.date_utc).toLocaleTimeString() }}</TableCell
          >
          <TableCell>
            <!-- Check if the launch is being saved by looking at savingLaunches array -->
            <Button
              v-if="!store.isLaunchSaved(launch)"
              @click="saveLaunch(launch)"
              :disabled="store.savingLaunches.includes(launch.name)"
            >
              <Loader2
                class="w-4 h-4 mr-2 animate-spin"
                v-if="store.savingLaunches.includes(launch.name)"
              />
              <span v-else>Save</span>
            </Button>
            <small v-else class="text-sm font-medium leading-none px-3">
              Saved
            </small>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <div v-if="store.loading"class="flex justify-center items-center">
      <Loader2 class="w-16 h-16 animate-spin text-gray-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useLaunchStore } from "~/stores/launchStore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-vue-next";
import { toast } from "vue-sonner";

const store = useLaunchStore();

onMounted(() => {
  store.fetchLaunches();
});

const saveLaunch = async (launch: any) => {
  try {
    await store.saveLaunch(launch);

    toast.success("Launch has been saved", {
      description:
        "Launch has been saved successfully, You can view it under saved launches",
    });
  } catch (error) {
    toast.error("Error Saving Launch", {
      description: `There was an error saving ${launch.name}. Please try again.`,
      variant: "destructive",
    });
  }
};
</script>
