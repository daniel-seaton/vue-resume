<template>
    <form ref="contactMeForm" class="Contact-Me-Display__form" @submit.prevent="sendEmail">
        <LabeledInput label="name">
            <input id="name" v-model="name">
        </LabeledInput>
        <LabeledInput label="email">
            <input id="email" v-model="email">
        </LabeledInput>
        <LabeledInput label="message">
            <textarea id="message" v-model="message" rows="10" cols="50"/>
        </LabeledInput>
        <input type="submit" class="Contact-Me-Display__submit">
    </form>

</template>
<script lang="ts" setup>
    import LabeledInput from '@/components/shared/LabeledInput.vue'
    import { send } from 'emailjs-com'
    import {  ref } from 'vue';

    const name = ref('');
    const email = ref('');
    const message = ref('');

    function sendEmail() {
        try {
            send('service_jnga4zs', 'template_5hzglhk', {
                name: name.value,
                email: email.value,
                message: message.value
            }, '-DOaxjzexiaT2Nbfd')
        } catch (e) {
            console.error(e);
        }
        resetForm();
    }

    function resetForm() {
        name.value = ''
        email.value = '';
        message.value = '';
    }
</script>
<style lang="scss">
.Contact-Me-Display__header {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}

.Contact-Me-Display__form {
    display: flex;
    flex-direction: column;
}

.Contact-Me-Display__submit {
    width: 15%;
    margin-left: 50%;
}
</style>