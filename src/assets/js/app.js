/* SCROLL SPY */
var offset_scroll = 56;
$("#email_add").hide();
function scrollspy(event) {
    if (this.pathname == window.location.pathname && this.hash !== "") {
        var offset = $(this.hash).offset().top - offset_scroll
        $('html, body').animate({
            scrollTop: offset
        }, 300, () => {
            event.stopPropagation()
            window.location.hash = this.hash;
        });
    }
}

$("a").on('click', scrollspy);

$((event) => {
    var hash = window.location.hash

    if (hash && hash !== "") {
        var offset = $(hash).offset().top - offset_scroll
        $('html, body').animate({
            scrollTop: offset
        }, 300, () => {
            window.location.hash = hash;
        });
    }
});


/* NAVIGATION SCROLL */
var last_scroll_top = 0

$(window).on("scroll", scroll_limit)

function scroll_limit() {
    var current_scroll_top = $(this).scrollTop()

    if (current_scroll_top >= 50) {
        $("#navigation.scroll").removeClass("scroll")
        $(".inline.dropdown").addClass("inverted")
    } else {
        $("#navigation").addClass("scroll")
        $(".inline.dropdown.inverted").removeClass("inverted")
    }
}

scroll_limit()

/* CONTACT US MODAL */
$('.contact_us_button').on("click", () => {
    event.stopPropagation()
    event.preventDefault()
    $('#contact_us_modal')
        .modal({
            onApprove: () => {
                $("#contact_us_form").submit();
                return false
            }
        })
        .modal('show')
})

/* SEMANTIC MENu */
$('.ui.dropdown').dropdown({
    direction: 'downward'
});