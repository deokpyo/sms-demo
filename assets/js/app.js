require('dotenv').config();
function onSendClick() {
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("message").value;
    var apiKey = process.env.apiKey;
    if (phone && message) {
        console.log("SMS Requested");
        var param = {
            key: apiKey,
            message: msg,
            to: phone
        }
        $.get("https://production.turbo360-vector.com/sms-demo-6xh5gi/sms", param, function (res) {
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