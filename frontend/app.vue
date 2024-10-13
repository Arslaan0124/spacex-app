<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster rich-colors close-button />
</template>

<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
</script>
