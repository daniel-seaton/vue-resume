<template>
    <header class="App-Header_container">
        <a class="App-Header_link" v-for="(link, index) in links" :key="index" :href="link.href"> {{ link.label }} </a>
    </header>
</template>
<script lang="ts" setup>
    const links = [{
        href: '#experience',
        label: 'Experience'
    }, {
        href: '#projects',
        label: 'Projects'
    }, {
        href: '#contact-me',
        label: 'Contact Me'
    }]
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
.App-Header_container {
    position: fixed;
    top: 0;
    width: 100%;
    background-image: linear-gradient($light-grey, $dark-grey);
    padding: 15px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
}

.App-Header_link {
    color: white;
    font-size: 1.25em;
    padding: 10px 25px;
    text-decoration: none;
    border-left: .5px solid $light-grey;
    border-right: .5px solid $light-grey;

    &:first-of-type{
        border-left: none;
    }

    &:last-of-type{
        border-right: none;
    }
}
</style>