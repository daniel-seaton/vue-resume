<template>
  <AppHeader />
  <div class="App__container">
    <SelfDisplay :self="self" />
    <Section id="experience"> 
      <JobsDisplay :jobs="jobs"/>
    </Section>
    <Section id="projects" reverseHeader> 
      <ProjectsDisplay :projects="projects" />
    </Section>
    <Section id="contact-me">
      <ContactMeDisplay />
    </Section>
  </div>
</template>

<script lang="ts" setup>
  import AppHeader from '@/components/AppHeader.vue'
  import Section from '@/components/shared/Section.vue'
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

<style lang="scss">
@import "@/scss/_variables.scss";

html, body {
  overflow-x: hidden;
  margin: 0 0;
  scroll-behavior: smooth;
  background-color: $light-grey;
}

.App__container {
  padding-top: 3.5em;
}
</style>
