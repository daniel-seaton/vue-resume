<template>
  <AppHeader />
  <div class="App__container">
    <SelfDisplay :self="contactsStore.self" />
    <JobsDisplay :jobs="jobStore.jobs"/>
    <ProjectsDisplay :projects="projectsStore.projects" />
    <ContactMeDisplay />
  </div>
</template>

<script lang="ts">
  import AppHeader from '@/components/AppHeader.vue'
  import SelfDisplay from '@/components/SelfDisplay.vue'
  import JobsDisplay from '@/components/JobsDisplay/JobsDisplay.vue'
  import ProjectsDisplay from './components/ProjectsDisplay.vue'
  import ContactMeDisplay from './components/ContactMeDisplay.vue'
  import { useJobsStore } from '@/stores/jobs'
  import { useContactsStore } from '@/stores/contacts'
  import { useProjectsStore } from '@/stores/projects'


  export default {
    components: {
      AppHeader,
      SelfDisplay,
      JobsDisplay,
      ProjectsDisplay,
      ContactMeDisplay
    },
    data() {
        return {
          contactsStore: useContactsStore(),
          jobStore: useJobsStore(),
          projectsStore: useProjectsStore(),
        }
    },
  }
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
