<template>
    <div id="contact_modal">
        <modal name="contact-modal"
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
                            <div class="field">
                                <label>Name</label>
                                <input type="text" name="name" v-model="formData.name" />
                            </div>
                            <div class="field">
                                <label>Subject</label>
                                <input type="text" name="subject" v-model="formData.subject" />
                            </div>
                            <div class="field">
                                <label>Email</label>
                                <input type="text" name="email" v-model="formData.email" />
                            </div>
                            <div class="field">
                                <label>Message</label>
                                <textarea class="opensans" name="message" rows="3" v-model="formData.message"></textarea>
                            </div>

                            <div class="ui header actions">
                                <div @click="hide" class="ui negative button">
                                    <i class="times icon"></i>
                                    Cancel
                                </div>
                                <div data-netlify-recaptcha="true"></div>
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
    </div>
</template>

<script>
export default {
    methods: {
        show() {
            this.$modal.show('contact-modal')
        },

        hide() {
            this.$modal.hide('contact-modal')
        },

        // NETLIFY FORMS
        encode(data) {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&')
        },

        handleSubmit(e) {
            fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: this.encode({
                        'form-name': e.target.getAttribute('name'),
                        ...this.formData,
                    }),
                })
                .then((data) => {
                    console.log(data)
                    alert('GOOD')
                })
                .catch(error => alert(error))
        },

        data() {
            return {
                formData: {},
            }
        }
    },
}
</script>

<style scope>

</style>