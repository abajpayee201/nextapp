$(document).ready(function() {
    $('#mobile').on('input', function(event) {
        let input = $(this).val();
        input = input.replace(/\D/g, '');
        input = input.slice(0, 10);
        $(this).val(input);
    });
});

function getMobile() {

    var otp = document.getElementById('otp4').value;

    if (otp == "") {
        document.getElementById('otp1').focus();
        return false;
    } else {
        $(".show-block").removeClass("d-none");
        $(".hide-block").addClass("d-none");
        // Set the value of mobile to the value of mobile1
        //document.getElementById('mobile').value = mobile1Value;

    }
}

function sendOtp(retry) {
    var regex = /^[6-9]\d{9}$/;
    mobileNumber = document.getElementById("mobile").value;

    if (mobileNumber == "" || !regex.test(mobileNumber)) {
        return false;
    } else {

        $.post('/sendOTP.jsp', {
            act: 'mSend',
            retry: retry,
            countryCode: 91,
            mobileNumber: mobileNumber
        }).done(function(data) {
            const obj = JSON.parse(data);
            eotp = obj.eOTP;
            // console.log(data);
            data = JSON.parse(data);
            if (data.mSend == 1) {
                emailOTP = data.eOTP;

                document.getElementById("eOtp").value = emailOTP;
                var form = document.getElementById("clForm");
                form.action = "/register.jsp";
                form.submit();
            } else {
                //  alert('There is a problem with your mobile number.');
            }
        }).fail(function(e) {
            console.log(e);
        });
    }

}

function verifyOtp() {

    const otpFields = document.getElementsByName('otps');

    //   console.log("Number of otpFields:", otpFields.length); 


    let otpValues = [];

    // Loop through each OTP input field
    for (let i = 0; i < otpFields.length; i++) {

        otpValues.push(otpFields[i].value);
    }
    const enteredOtp = otpValues.join('');

    // console.log("OTP Values:", enteredOtp); 

    otp = enteredOtp;
    var emailOTP = document.getElementById("otp").value;
    if (otp == emailOTP) {
        //alert("OTP VARIFY");
        document.getElementById("msg1").innerHTML = "OTP Verified".fontcolor("green");
        document.getElementById("btn").disabled = false;
    } else {
        //alert("OTP NOT VARIFY");
        document.getElementById("msg1").innerHTML = "OTP Not Verified".fontcolor("red");
        //  $('#otp').focus();
        document.getElementById("btn").disabled = true;
    }
}

// input only number



//To get all states names

$(document).ready(function() {
    //Perform Ajax request.
    $.ajax({
        url: '/GetAllStateName.jsp',
        type: 'get',
        success: function(data) {
            //If the success function is execute,
            //then the Ajax request was successful.
            //Add the data we received in our Ajax
            //request to the "content" div.
            $('#stateIdContact').html(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            var errorMsg = 'Ajax request failed: ' + xhr.responseText;
            $('#stateIdContact').html(errorMsg);
        }
    });
});

//To get all city and center names

function getData(thisVar, dataReq) {
    //alert("thisVar----"+thisVar+  "dataReq----"+dataReq);
    if (document.clForm.cl_prod_group.value == "") {
        alert("Please select Your program fist");
        document.clForm.cl_prod_group.focus()
        return false;
    } else if (document.clForm.cl_prod_group.value == "CR" || dataReq == "city1") {
        if (thisVar.value != '' && thisVar.value != '0') { //alert(thisVar.value);
            $.ajax({
                url: '/GetCityName.jsp',
                type: "GET",
                data: {
                    id: thisVar.value,
                    dataReq: dataReq
                },
                complete: function() {}
            }).done(function(responseData) {
                //alert("responseData-------"+responseData);
                var cities = '',
                    city = '',
                    htmlContent = '<option value="">Select ' + (dataReq.charAt(0) + dataReq.slice(1)).replace("city1", "city") + '</option>';
                cities = JSON.parse(responseData);
                if (cities.length) {

                    $.each(cities, function(i, v) {
                        city = v;
                        htmlContent += '<option value="' + city.id + '">' + city.name.replace(/:/g, ' ') + '</option>';
                    });
                    //if (dataReq == 'city')
                    //htmlContent += '<option value="0">Other</option>';
                    $('#' + dataReq).html(htmlContent).removeClass('d-none');
                    $('#' + dataReq).attr('required', 'required');

                } else {
                    $('#' + dataReq).addClass('d-none');
                    $('#' + dataReq).removeAttr('required');
                }
            }).fail(function(e) {
                console.log(e);
            });
        } else {
            $('#center').addClass('d-none');
        }
    }


}




function showHide() {
    // alert();
    var value = $("#cl_prod_group").val();
    if (value == "CR") {
        $('#city').addClass('d-none');
        $('#city').removeAttr('required');
        $('#pincode').addClass('d-none');
        $('#pincode').removeAttr('required');
        $('#stateIdContact').removeClass('d-none');
        $('#stateIdContact').attr('required', 'required');
        $('#city').val('');
        $('#pincode').val('');
        $('input[name="centerFlag"]').val('yes');
        $('input[name="leadsquared"]').val('no');
    } else {
        $('#city1').addClass('d-none');
        $('#center').addClass('d-none');
        $('#stateIdContact').addClass('d-none');
        $('#stateIdContact').removeAttr('required');
        $('#center').removeAttr('required');



        $('#city1').removeAttr('required');

        $('#stateIdContact').val('');

        $('#city').removeClass('d-none');
        $('#city').attr('required', 'required');


        $('#city').val('');
        $('#pincode').removeClass('d-none');
        $('#pincode').attr('required', 'required');
        $('input[name="centerFlag"]').val('no');
        $('input[name="leadsquared"]').val('yes');
    }
}

function hideInputs() {
    $('#center').addClass('d-none');
    $('#center').removeAttr('required');

    $('#city1').val('');
    $('#center').val('');
}