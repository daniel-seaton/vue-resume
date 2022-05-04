<template>
    <div class="Job-List-Item__title-container">
        <p class="Job-List-Item__company"> {{ job.company }} </p>
        <p class="Job-List-Item__location">&nbsp; — {{ job.location }}</p> 
    </div>
    <JobRoleItem v-for="role in job.roles" :key="role.id" :role="role"/>
</template>

<script lang="ts" setup>
    import JobRoleItem from '@/components/JobsDisplay/JobRoleItem.vue'
    import type { Job } from '@/types/model'

    defineProps<{
        job: Job
    }>();
</script>

<style lang="scss">
.Job-List-Item__title-container {
    display: flex;
    flex-direction: row;
    font-size: 1.5em;
    margin: 5px 0;
    justify-content: center;
    .Job-List-Item__company {
        margin: inherit;
        font-weight: bold;
        font-size: 1em;
    }
    .Job-List-Item__location {
        margin: inherit
    }
}
</style>
