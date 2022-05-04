<template>
    <div id="experience" class="Jobs-Display__title">Experience</div>
    <JobListItem v-for="job in jobs" :key="job.id" :job="job"/>    
</template>

<script lang="ts">
    import JobListItem from '@/components/JobsDisplay/JobListItem.vue'
    import type { Job } from '@/types/model'
    import type { PropType } from 'vue'
    export default {
        components: {
            JobListItem
        },
        props: {
            jobs: {
                type: Array as PropType<Job[]>
            }
        }
    }

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