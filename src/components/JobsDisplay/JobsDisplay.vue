<template>
    <div>
    <JobListItem v-for="job in jobs" :key="job.id" :job="job"/>
    </div>
</template>

<script lang="ts" setup>
    import JobListItem from '@/components/JobsDisplay/JobListItem.vue'
    import type { Job } from '@/types/model'
    defineProps<{
        jobs: Job[]
    }>();
</script>

<style lang="scss">

.Jobs-Display__title {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}
</style>