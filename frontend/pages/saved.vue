<template>
  <div class="saved-launches-container">
    <h1 class="text-xl font-bold mb-4">Saved Launches</h1>

    <div v-if="store.loading" class="mt-4">Loading...</div>

    <div v-if="!store.loading" class="launches-grid">
      <Card
        v-for="launch in store.savedLaunches"
        :key="launch._id"
        class="launch-card"
      >
        <CardHeader>
          <CardTitle>{{ launch.name }}</CardTitle>
          <CardDescription>{{
            new Date(launch.date_utc).toLocaleDateString()
          }}</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-gray-600">
            Launch Date: {{ new Date(launch.date_utc).toLocaleDateString() }}
            {{ new Date(launch.date_utc).toLocaleTimeString() }}
          </p>
        </CardContent>
        <CardFooter>
          <Button
            @click="deleteLaunch(launch._id)"
            :disabled="store.deletingLaunches.includes(launch._id)"
            variant="destructive"
            class="w-full"
          >
            <Loader2
              class="w-4 h-4 mr-2 animate-spin"
              v-if="store.deletingLaunches.includes(launch._id)"
            />
            <span v-if="store.deletingLaunches.includes(launch._id)"
              >Deleting...</span
            >
            <span v-else>Delete</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useLaunchStore } from "~/stores/launchStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-vue-next";
import { toast } from "vue-sonner";

const store = useLaunchStore();

onMounted(() => {
  store.fetchSavedLaunches();
});

const deleteLaunch = async (id: string) => {
  try {
    await store.deleteLaunch(id);
    toast.success("Launch has been deleted", {
      description: "Launch has been deleted successfully",
    });
  } catch (error) {
    toast.error("Error Deleting Launch", {
      description: `There was an error deleting ${launch.name}. Please try again.`,
      variant: "destructive",
    });
  }
};
</script>

<style scoped>
.saved-launches-container {
  padding: 20px;
}

.launches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.launch-card {
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>
