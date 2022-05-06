<template>
    <div>
        <p class="Self-Display__phone-number"> {{ phoneNumber }}</p>
        <p class="Self-Display__full-name"> {{ fullName }} </p>
        <p class="Self-Display__email"> {{ email}}</p>
        <div class="Self-Display__description"> {{ description }} </div>
    </div>
</template>

<script lang="ts" setup>
    import type { Contact } from '@/types/model'
    import { computed } from 'vue'

    const props = defineProps<{
        self: Contact
    }>();

    const fullName = computed(() => `${props.self.firstName} ${props.self.lastName}`);
    const phoneNumber = computed(() => props.self.phoneNumber);
    const email = computed(() => props.self.email);
    const description = computed(() => props.self.description);
</script>

<style lang="scss">
.Self-Display__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25em;
    border-bottom: 7px double;
    margin: 0 5px;
}

.Self-Display__full-name, .Self-Display__phone-number, .Self-Display__email {
    width: 20%;
    margin: inherit;
}


.Self-Display__full-name {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}

.Self-Display__email {
    text-align: right;
}

.Self-Display__description {
    font-size: 1.25em;
}
</style>