<template>
    <div class="Section-Header__container">
        <div v-if="!reverse" class="Section-Header__arrow-right">
            <div class="Section-Header__arrow-label">{{ title }}</div>
        </div>
        <div v-if="reverse" class="Section-Header__arrow-left">
            <div class="Section-Header__arrow-label">{{ title }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        title: string,
        reverse: boolean,
    }>()
</script>

<style lang="scss">

$triangle-width: 400px;
$triangle-height: 532.8px;
$triangle-color: #007bff;
$font-size: 5em;
$top-offset: -.575em;
$left-offset: 50px;

.Section-Header__container {
    width: 100%;
    height: $triangle-width*2;
}

.Section-Header__arrow-right {
    width: 0px;
    height: 0px;
    border-style: inset;
    border-width: $triangle-width 0 $triangle-width $triangle-height;
    border-color: transparent transparent transparent $triangle-color;
    float: left;
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);

    div {
        left: -$triangle-height - $left-offset
    }
}

.Section-Header__arrow-left {
    width: 0px;
    height: 0px;
    border-style: inset;
    border-width: $triangle-width $triangle-height $triangle-width 0;
    border-color: transparent $triangle-color transparent transparent ;
    float: right;
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);

    div {
        left: $left-offset
    }
}

.Section-Header__arrow-label {
    width: $triangle-height;
    text-align: center;
    position: relative;
    margin: 0px;
    color: white;
    top: $top-offset;
    font-size: $font-size;

}
</style>