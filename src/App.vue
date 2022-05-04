<template>
  <AppHeader />
  <div class="App__container">
    <SelfDisplay :self="self" />
    <JobsDisplay :jobs="jobs"/>
    <ProjectsDisplay :projects="projects" />
    <ContactMeDisplay />
  </div>
</template>

<script lang="ts" setup>
  import AppHeader from '@/components/AppHeader.vue'
  import SelfDisplay from '@/components/SelfDisplay.vue'
  import JobsDisplay from '@/components/JobsDisplay/JobsDisplay.vue'
  import ProjectsDisplay from './components/ProjectsDisplay.vue'
  import ContactMeDisplay from './components/ContactMeDisplay.vue'
  import { useJobsStore } from '@/stores/jobs'
  import { useContactsStore } from '@/stores/contacts'
  import { useProjectsStore } from '@/stores/projects'
  import { computed } from '@vue/runtime-core'

  const stores = {
    jobs: useJobsStore(),
    contacts: useContactsStore(),
    projects: useProjectsStore()
  }

  const self = computed(() => stores.contacts.self);
  const jobs = computed(() => stores.jobs.jobs);
  const projects = computed(() => stores.projects.projects);
</script>

<style>
html, body {
  overflow-x: hidden;
  margin: 0 0;
  scroll-behavior: smooth;
}

.App__container {
  padding-top: 3.5em;
}
</style>
