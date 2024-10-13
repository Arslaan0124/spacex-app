import { defineStore } from "pinia";
import {
  fetchLaunches,
  fetchSavedLaunches,
  saveLaunch,
  deleteLaunch,
} from "@/services/launchService";
import type { Launch } from "~/types/launch";

interface LaunchStoreState {
  launches: Launch[];
  savedLaunches: Launch[];
  loading: boolean;
}

export const useLaunchStore = defineStore("launchStore", {
  state: (): LaunchStoreState => ({
    launches: [],
    savedLaunches: [],
    loading: false,
  }),

  actions: {
    async fetchLaunches() {
      this.loading = true;
      try {
        this.launches = await fetchLaunches();
      } catch (error) {
        console.error("Error fetching launches", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSavedLaunches() {
      this.loading = true;
      try {
        this.savedLaunches = await fetchSavedLaunches();
      } catch (error) {
        console.error("Error fetching saved launches", error);
      } finally {
        this.loading = false;
      }
    },

    async saveLaunch(launch: Launch) {
      try {
        const savedLaunch = await saveLaunch(launch);
        this.savedLaunches.push(savedLaunch);
      } catch (error) {
        console.error("Error saving launch", error);
      }
    },

    async deleteLaunch(id: string) {
      try {
        await deleteLaunch(id);
        this.savedLaunches = this.savedLaunches.filter(
          (launch) => launch._id !== id
        );
      } catch (error) {
        console.error("Error deleting launch", error);
      }
    },
  },
});
