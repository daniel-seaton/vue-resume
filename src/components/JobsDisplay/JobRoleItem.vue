<template>
    <div class="Job-Role-Item__title-container">
        <p class="Job-Role-Item__title"> {{ role.title }} </p>
        <p class="Job-Role-Item__date-range">, {{ dateRange }} </p>
    </div>
    <div class="Job-Role-Item__duties-container" v-for="(duty, index) in role.duties" :key="index">
        {{ duty }}
    </div>
</template>

<script lang="ts" setup>
    import type { Role } from '@/types/model'
    import { computed } from '@vue/runtime-core';
    import moment from 'moment'

    const props = defineProps<{
        role: Role
    }>();

    const datePlaceHolder = 'Present'
    const dateFormat = 'MMMM YYYY'

    const dateRange = computed(() => `${formatDate(props.role.startDate)} to ${formatDate(props.role.endDate)}`)

    function formatDate(date?: Date) {
        return date ? moment(date).format(dateFormat) : datePlaceHolder;
    }
</script>

<style lang="scss">
.Job-Role-Item__title-container {
    display: flex;
    flex-direction: row;
    font-size: 1.5em;
    margin: 5px 0;
    justify-content: center;
    .Job-Role-Item__title {
        margin: inherit;
        font-weight: bold;
        font-size: 1em;
    }
    .Job-Role-Item__date-range {
        margin: inherit
    }
}

.Job-Role-Item__duties-container {
    font-size: 1.25em;
    padding: 5px 0;
}

</style>
