let footer_new;

footer_new = ``;




document.write(footer_new);

function subscribeMail() {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email = document.getElementById("mail").value;
    if (email == '' || !emailPattern.test(email)) {

        document.getElementById("subMsg").innerHTML = "Please enter your email";

        return false;
    }

    $.ajax({
        url: '/subscribeData.jsp',
        type: "POST",
        data: {
            email: email
        },
        complete: function() {}
    }).done(function(data) {

        document.getElementById("subMsg").innerHTML = data;

        document.getElementById("mail").value = "";


    }).fail(function(xhr, textStatus, errorThrown) {
        console.error("Error: " + errorThrown);
    });
}


/*----------------back-top-----------------------------------*/
jQuery(document).ready(function() {

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 50) {
            jQuery('#back-to-top').fadeIn();
        } else {
            jQuery('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    jQuery('#back-to-top').click(function() {
        jQuery('#back-to-top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    jQuery('#back-to-top').tooltip('show');
});