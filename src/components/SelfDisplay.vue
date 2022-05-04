<template>
    <div class="Self-Display__container">
        <p class="Self-Display__phone-number"> {{ self.phoneNumber }}</p>
        <p class="Self-Display__full-name"> {{ fullName }} </p>
        <p class="Self-Display__email"> {{ self.email}}</p>
    </div>
    <div class="Self-Display__description"> {{self.description }} </div>
</template>

<script lang="ts">
    import type { Contact } from '@/types/model'
    import type { PropType } from 'vue'

    export default {
        props: {
            self: {
                type: Object as PropType<Contact>,
                required: true
            }
        },
        computed: {
            fullName() {
                return `${this.self.firstName} ${this.self.lastName}`;
            }
        }
    }

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