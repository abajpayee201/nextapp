
const $source = document.querySelector('#source');
const $sourcem = document.querySelector('#sourcem');

const typeHandler = function(e) {
    var query = e.target.value.trim();
    $('#myUL').empty();
    $('#myULm').empty();
    if (query.length > 3) {
        $.ajax({
            url: '/rest/search/title?q=' + query,
            type: 'GET', // form submit method get/post
            dataType: 'JSON',
            success: function(result) {
                $('#myUL').empty();
                $('#myULm').empty();

                var json = result;
                var count = json.length - 1;
                var i = 0;
                while (i <= count) {
                    var URL = json[i].url;
                    var Title = json[i].title;
                    newElement(URL, Title);
                    i++;
                }
            }
        });
    }
}
$source.addEventListener('input', typeHandler) // register for oninput
$source.addEventListener('propertychange', typeHandler) // for IE8
$sourcem.addEventListener('input', typeHandler) // register for oninput
$sourcem.addEventListener('propertychange', typeHandler) // for IE8


function newElement(URL, Title) {
    $("#dd .dropdown").append('<li><a href="' + URL + '">' + Title + '</a></li>');
    $("#ddm .dropdown").append('<li><a href="' + URL + '">' + Title + '</a></li>');

}
// -----------------

// navbar toogle js

document.querySelectorAll(".dropdown-toggle").forEach(function(dropdownToggle) {
    dropdownToggle.onclick = function(event) {
        if (event.target === dropdownToggle) {
            this.classList.toggle("rotate");
        }
    };
});

document.body.onclick = function(event) {
    var dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    if (!event.target.matches('.dropdown-toggle')) {
        dropdownToggles.forEach(function(dropdownToggle) {
            dropdownToggle.classList.remove("rotate");
        });
    }
};

//   --------------------
// -------------------------

(function($) {
    $(document).ready(function() {
        $('ul.dropdown-menu [data-bs-toggle=dropdown]').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });

})($);

//   ------------------

jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 300) {
        jQuery(".header-region").addClass("change");
    } else {
        jQuery(".header-region").removeClass("change");
    }
});


try {
    document.querySelector('#btn-search').on('click', function() {
        document.querySelector('#search').classList.toggle('show-search');
    });
} catch (err) {}