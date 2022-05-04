<template>
    <div id="contact-me" class="Contact-Me-Display__header">
        Contact Me
    </div>
    <form ref="contactMeForm" class="Contact-Me-Display__form">
        <LabeledInput label="name" v-model="name">
            <input id="name" v-model="name">
        </LabeledInput>
        <LabeledInput label="email" v-model="email">
            <input id="email" v-model="email">
        </LabeledInput>
        <LabeledInput label="message" v-model="message">
            <textarea id="message" v-model="message" rows="10" cols="50"/>
        </LabeledInput>
        <button class="Contact-Me-Display__submit" @click.prevent="sendEmail">Submit</button>
    </form>

</template>
<script lang="ts">
    import LabeledInput from '@/components/shared/LabeledInput.vue'
    import { send } from 'emailjs-com'
    export default {
        components: {
            LabeledInput
        },
        data() {
            return {
                name: '',
                email: '',
                message: '',
            }
        },
        methods: {
            sendEmail() {
                try {
                    send('service_jnga4zs', 'template_5hzglhk', {
                        name: this.name,
                        email: this.email,
                        message: this.message
                    }, '-DOaxjzexiaT2Nbfd')
                } catch (e) {
                    console.error(e);
                }
                this.resetForm();
            },
            resetForm() {
                this.name = '';
                this.email = '';
                this.message = '';
            }
        }
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