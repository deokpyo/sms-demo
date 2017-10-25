function onSendClick() {
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("message").value;
    if (phone && message) {
        console.log("SMS Requested");
        var param = {
            message: msg,
            to: phone
        }
        $.get("/vectors/sms", param, function (res) {
            if (res.confirmation === "success") {
                alert("Message has been sent!");
            } else {
                alert(res.message);
            }
        })
    } else {
        alert("Please fill out both fields");
    }
}