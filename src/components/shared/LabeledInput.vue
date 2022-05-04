<template>
    <div class="Labeled-Input__container">
        <label :for="label" :type="type" class="Labeled-Input__label">{{displayLabel}}:</label>
        <div class="Labeled-Input__input">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            label: {
                type: String,
                required: true
            },
        },
        computed: {
            displayLabel() {
                return this.label.substring(0, 1).toUpperCase() + this.label.substring(1)
            },
        }
    }
</script>

<style lang="scss">
.Labeled-Input__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
}

.Labeled-Input__label {
    width: 50%;
    text-align: right;
    padding-right: 5px;
}

.Labeled-Input__input {
    width: 50%;
}
</style>