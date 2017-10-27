function onSendClick() {
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("message").value;
    var apiKey = '4ef11c66-3e10-4a73-be2f-7e19d83d7a18';

    if (phone.length === 0) {
        alert("Please enter phone number to send the message.");
        return;
    }
    if (msg.length === 0) {
        alert("Please enter the message to send.");
        return;
    }

    var param = {
        key: apiKey,
        message: msg,
        to: phone,
        format: "jsonp"
    }

    $.ajax({
        url: "https://production.turbo360-vector.com/sms-demo-6xh5gi/sms",
        type: "GET",
        data: param,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
    }, function(res) {
        if (res.confirmation === "success") {
            alert("Message has been sent!");
        } else {
            alert(res.message);
        }
    });

    // $.get("https://production.turbo360-vector.com/sms-demo-6xh5gi/sms", param, function (res) {

    //     if (res.confirmation === "success") {
    //         alert("Message has been sent!");
    //     } else {
    //         alert(res.message);
    //     }
    // });
}