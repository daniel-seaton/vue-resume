<template>
    <div>
        <a :id="id" class="Section__marker"></a>
        <div class="Section__container" :style="style" data-aos="fade-in">
            <SectionHeader :title="title" :reverse="reverseHeader"/>
            <slot/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { toDisplayValue } from '@/utils/utilities'
    import SectionHeader from '@/components/shared/SectionHeader.vue'
    import { computed } from '@vue/runtime-core'

    const props = defineProps<{
        id: string,
        reverseHeader: boolean,
    }>()

    const title = computed(() => toDisplayValue(props.id))

    const style = computed(() => `flex-direction: ${props.reverseHeader ? 'row-reverse': 'row'}`)
</script>

<style lang="scss">
.Section__container {
    display: flex;
    flex-direction: row;
}

.Section__marker {
    height: 0px;
    width: 0px;
    position: relative;
    top: -60px;
}
</style>