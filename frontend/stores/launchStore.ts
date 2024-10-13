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
  savingLaunches: string[];
  deletingLaunches: string[];
}

export const useLaunchStore = defineStore("launchStore", {
  state: (): LaunchStoreState => ({
    launches: [],
    savedLaunches: [],
    loading: true,
    savingLaunches: [],
    deletingLaunches: [],
  }),

  getters: {
    isLaunchSaved: (state) => {
      return (launch: Launch) =>
        state.savedLaunches.some(
          (savedLaunch) => savedLaunch.name === launch.name
        );
    },
  },

  actions: {
    async fetchLaunches() {
      this.loading = true;
      try {
        this.launches = await fetchLaunches();
        // Fetch saved launches after fetching all launches
        await this.fetchSavedLaunches();
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
      if (this.savingLaunches.includes(launch.name)) return; // Prevent multiple saves at once
      this.savingLaunches.push(launch.name);

      try {
        const savedLaunch = await saveLaunch(launch);
        this.savedLaunches.push(savedLaunch);
      } catch (error) {
        console.error("Error saving launch", error);
      } finally {
        // Remove the flight number from the savingLaunches array after save is done
        this.savingLaunches = this.savingLaunches.filter(
          (name) => name !== launch.name
        );
      }
    },

    async deleteLaunch(id: string) {
      if (this.deletingLaunches.includes(id)) return;
      this.deletingLaunches.push(id);
      try {
        await deleteLaunch(id);
        this.savedLaunches = this.savedLaunches.filter(
          (launch) => launch._id !== id
        );
      } catch (error) {
        console.error("Error deleting launch", error);
      } finally {
        // Remove id from deletingLaunches after delete is done
        this.deletingLaunches = this.deletingLaunches.filter(
          (launchId) => launchId !== id
        );
      }
    },
  },
});
