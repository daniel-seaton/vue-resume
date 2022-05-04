<template>
    <div id="projects" class="Projects-Display__header">Projects</div>
    <div class="Projects-Display__row" v-for="project in projects" :key="project.id">
        <div class="Projects-Display__title"> {{project.title}} </div>
        <div class="Projects-Display__desc"> {{project.description}} </div>
    </div>    
</template>

<script lang="ts" setup>
    import type { Project } from '@/types/model'

    defineProps<{
        projects: Project[]
    }>()
</script>

<style lang="scss">
.Projects-Display__header {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}

.Projects-Display__row {
    display: flex;
    flex-direction: row;
    font-size: 1.25em;
}

.Projects-Display__title {
    width: 33%;
    font-weight: bold;
}

.Projects-Display__desc {
    width: 67%;
}
</style>