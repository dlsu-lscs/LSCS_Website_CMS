<template>
    <div id="contact_us_modal" class="ui tiny modal active">
        <div class="ui header">
            Contact us
            <g-image class="ui image" src="~/assets/img/macky.png" width="50"/>
        </div>
        <div class="scrolling content">
            <!-- @if (Session::exists('errors'))
            <div class="ui red message"> 
                <ul>
                    @foreach($errors -> all() as $error)
                    <li> {{$error}}  </li>
                    @endforeach
                </ul>
            </div>
            @endif -->
            <!-- <form id="contact_us_form" method="POST" action="{{route('contact')}}" class="ui form">
                @csrf()
                <div class="field">
                    <label>Name</label>
                    <input type="text" name="name">
                </div>
                <div class="field">
                    <label>Subject</label>
                    <input type="text" name="subject">
                </div>
                <div class="field">
                    <label>Email</label>
                    <input type="text" name="email">
                </div>
                <div class="field">
                    <label>Message</label>
                    <textarea class="opensans" name="message" rows="3"> </textarea>
                </div>
                <input type="text" name="email_add" id="email_add">
            </form> -->
        </div>
        <div class="actions">
            <div class="ui negative button">
                <i class="times icon"></i>
                Cancel
            </div>
            <div class="ui positive button">
                <i class="paper plane icon"></i>
                Submit
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>