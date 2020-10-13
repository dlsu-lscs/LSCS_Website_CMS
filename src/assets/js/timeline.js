var dates_data = {
    "1997-1998": {
        order: 1,
        next: "2002-2003"
    },
    "2002-2003": {
        order: 2,
        next: "2006-2007",
        prev: "1997-1998"
    },
    "2006-2007": {
        order: 3,
        next: "2009-2010",
        prev: "2002-2003"
    },
    "2009-2010": {
        order: 4,
        next: "2013-2014",
        prev: "2006-2007"
    },
    "2013-2014": {
        order: 5,
        next: "2017-2018",
        prev: "2009-2010"
    },
    // "2017-2018": {
    //     order: 6,
    //     prev: "2013-2014"
    // }
}

var selected = $("#dates div.date.selected")
var id = selected.data("id")

function check_dates (id) {
    if (!id)
        return 

    $(".next-date").show()
    $(".prev-date").show()

    if (!dates_data[id].next) {
        $(".next-date").hide()
    }
    
    if (!dates_data[id].prev) {
        $(".prev-date").hide()
    }    
}

$(".date").on('click', event => {
    event.preventDefault()
    
    var target = $(event.target).closest("#dates div.date")

    if (selected.data("id") != target.data("id")) {

        var id = target.data("id")

        $(".date.selected").removeClass("selected")
        $(".event").removeClass("selected")
        selected = target;

        $(".event#" + id).addClass("selected")
        selected.addClass("selected")
        
        check_dates(id)
    }
})

$('.next-date').on('click', () => {
    var current_id = selected.data("id");
    var current_date = dates_data[current_id]
    var next_id = current_date.next
    
    if (next_id) {
        $(".date.selected").removeClass("selected")
        $(".event").removeClass("selected")

        selected = $(".date[data-id=" + next_id + "]");

        $(".event#" + next_id).addClass("selected")
        selected.addClass("selected")
    }

    check_dates(next_id)
})

$('.prev-date').on('click', () => {
    var current_id = selected.data("id");
    var current_date = dates_data[current_id]
    var prev_id = current_date.prev
    
    if (prev_id) {
        $(".date.selected").removeClass("selected")
        $(".event").removeClass("selected")

        selected = $(".date[data-id=" + prev_id + "]");

        $(".event#" + prev_id).addClass("selected")
        selected.addClass("selected")
    }

    check_dates(prev_id)
})

check_dates(id)