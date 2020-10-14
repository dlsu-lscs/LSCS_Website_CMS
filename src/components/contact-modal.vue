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
                            data-netlify="true"
                            data-netlify-recaptcha="true"
                        >
                            <div class="field">
                                <label>Name</label>
                                <input type="text" name="name" />
                            </div>
                            <div class="field">
                                <label>Subject</label>
                                <input type="text" name="subject" />
                            </div>
                            <div class="field">
                                <label>Email</label>
                                <input type="text" name="email" />
                            </div>
                            <div class="field">
                                <label>Message</label>
                                <textarea class="opensans" name="message" rows="3"></textarea>
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
        }
    },
}
</script>

<style scope>

</style>