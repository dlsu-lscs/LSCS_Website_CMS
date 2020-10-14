<template>
    <div id="contact_modal">
        <modal v-show="showModal" name="contact-modal"
            height="auto"
            :minHeight="500"
            :maxHeight="700"
            :scrollable="true"
        >
            <div class="ui divided grid">
                <div class="row"
                    :style="{
                        padding: '2.5rem'
                    }"
                >
                    <div class="eight wide column">
                        <div class="ui header">
                            Contact us
                            <g-image class="ui image" src="~/assets/img/macky.png" width="50"/>
                        </div>
                        <b>
                            <div><i class="icon facebook f blue"> </i> /LaSalleComputerSociety</div>
                            <div><i class="icon twitter blue"> </i> /dlsu_LSCS</div>
                            <div><i class="icon instagram violet"> </i> /dlsu_lscs</div>
                            <div><i class="icon youtube red"> </i> /LaSalleComputerSociety</div>
                        </b>
                    </div>
                    <div class="eight wide column">
                        <form id="contact_us_form" class="ui form"
                            name="contact"
                            method="POST"
                            v-on:submit.prevent="handleSubmit"
                            action="/success/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                        <input type="hidden" name="form-name" value="contact" />
                            <p hidden>
                                <label>
                                Don’t fill this out: <input name="bot-field" />
                                </label>
                            </p>
                            <div class="ui field" :class="{ error: invalidName }">
                                <label>Name</label>
                                <input type="text" name="name" v-model="name"
                                    @keypress="invalidName = false"/>
                            </div>
                            <div class="ui field" :class="{ error: invalidSubject }">
                                <label>Subject</label>
                                <input type="text" name="subject" v-model="subject"
                                    @keypress="invalidSubject = false"/>
                            </div>
                            <div class="ui field" :class="{ error: invalidEmail }">
                                <label>Email</label>
                                <input type="text" name="email" v-model="email"
                                    @keypress="invalidEmail = false"/>
                            </div>
                            <div class="ui field" :class="{ error: invalidMessage }">
                                <label>Message</label>
                                <textarea class="opensans" name="message" rows="3"
                                    v-model="message"
                                    @keypress="invalidMessage = false"></textarea>
                            </div>

                            <div class="ui header actions">
                                <div @click="hide" class="ui negative button">
                                    <i class="times icon"></i>
                                    Cancel
                                </div>
                                <button type="submit" class="ui positive button">
                                    <i class="paper plane icon"></i>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </modal>

        <modal v-show="showSuccess" name="success" :shiftY="1" height="auto" :width="400">
            <div :style="{
                textAlign: 'center',
                padding: '1.5rem 2rem',
                fontSize: '20px',
            }">
                <p>Your message has been sent to us</p>
                <!-- <span @click="$modal.hide('success')">close</span> -->
            </div>
        </modal>

        <modal v-show="showError" name="error" height="auto" :width="400">
            <div :style="{
                textAlign: 'center',
                padding: '1.5rem 2rem',
                fontSize: '20px',
            }">
                <p>Something went wrong</p>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            invalidName: false,
            subject: '',
            invalidSubject: false,
            email: '',
            invalidEmail: false,
            message: '',
            invalidMessage: false,
            showModal: false,
            showSuccess: false,
            showError: false,
        }
    },

    methods: {
        show() {
            this.showModal = true
            this.$modal.show('contact-modal')
        },

        hide() {
            this.$modal.hide('contact-modal')
        },

        alertSuccess() {
            this.showSuccess = true
            this.$modal.show('success')
        },

        alertError() {
            this.showError = true
            this.$modal.show('error')
        },

        // NETLIFY FORMS
        encode(data) {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&')
        },

        handleSubmit(e) {
            // Validation
            let error = false

            if (!this.name.trim()) {
                this.invalidName = true
                error = true
            }

            if (!this.subject.trim()) {
                this.invalidSubject = true
                error = true
            }

            let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig
            if (!this.email.trim()) {
                this.invalidEmail = true
                error = true
            } else if (!emailRegex.test(this.email)) {
                this.invalidEmail = true
                error = true
            }

            if (!this.message.trim()) {
                this.invalidMessage = true
                error = true
            }

            if (error) {
                return
            }

            fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: this.encode({
                        'form-name': e.target.getAttribute('name'),
                        name: this.name,
                        subject: this.subject,
                        email: this.email,
                        message: this.message,
                    }),
                })
                .then(() => {
                    this.alertSuccess()
                    this.hide()
                })
                .catch(err => {
                    this.alertError()
                })
        },
    },
}
</script>

<style scope>
/* .alert {
    width: 200px;
    height: 200px;
} */
</style>