/*----------------contact read more read less-----------------------------------*/
function showFullData() {
    $('.moreless-button').click(function() {
        // Toggle the visibility of the associated content
        $(this).siblings('.moretext').slideToggle();

        // Toggle the text of the clicked button
        if ($(this).text() == "Read more") {
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }
    });

}

showFullData();



/*----------------load more-----------------------------------*/
$(document).ready(function() {

    let size_li = $("#myList li").length;

    let x = 3;
    $('#myList li:lt(' + x + ')').show();
    $('#loadMore').click(function() {
        x = (x + 3 <= size_li) ? x + 3 : size_li;
        $('#myList li:lt(' + x + ')').show();
        $('#showLess').show();
        if (x == size_li) {
            $('#loadMore').hide();
        }
    });
    $('#showLess').click(function() {
        x = (x - 3 < 0) ? 3 : x - 3;
        $('#myList li').not(':lt(' + x + ')').hide();
        $('#loadMore').show();
        $('#showLess').show();
        if (x == 3) {
            $('#showLess').hide();
        }
    });

});
/*----------------load more-----------------------------------*/

/*----------------youtube videos-----------------------------------*/

document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}
/*----------------youtube videos-----------------------------------*/

// slick slider function start

// add lead form script and css

let add_slick_slider_script = '<script src="/js/slick.min.js"></script>'
$('head').append(add_slick_slider_script);


$(document).ready(function() {
    // slick slider class regular4 function start

    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // slick slider class regular1 function end

    $(".regular1").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        arrows: false,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    vertical: true,
                    verticalSwiping: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    //   -------------

    $(".suces").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        arrows: false,
        centerPadding: "60px",

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });

    //   -----------------------

    $(".cousrs").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        arrows: true,
        centerMode: true,
        centerPadding: "120px",


        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },

        ],
    });


    //   --------------

    $(".regular-mentor").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
        ],
    });

    $(".regular-mentorss").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        pauseOnHover: true,
        autoplaySpeed: 5000,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
        ],
    });

    //   -----------------

    $(".choose-why").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        arrows: true,
        centerMode: true,
        centerPadding: "120px",

        responsive: [

            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
        ],
    });

    //   -----------------
});


// $(function () {
//   $(".demo5").easyTicker({
//     direction: "up",
//     visible: 2,
//     interval: 3500,
//     controls: {
//       up: ".btnUp",
//       down: ".btnDown",
//       toggle: ".btnToggle",
//     },
//   });
// });



jQuery(document).on('click', 'a.smothscroll[href^="#"]', function(event) {
    event.preventDefault();

    jQuery('html, body').animate({
        scrollTop: jQuery($.attr(this, 'href')).offset().top - 70
    }, 500);
});