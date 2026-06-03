function validatePhone() {

    let phone = document.getElementById("phone").value;

    if (phone.length !== 10) {
        alert("Phone number must contain 10 digits");
    }
}

function showFee() {

    let event = document.getElementById("eventType").value;
    let fee = document.getElementById("fee");

    if (event === "Music")
        fee.innerHTML = "Fee: ₹100";

    else if (event === "Sports")
        fee.innerHTML = "Fee: ₹150";

    else if (event === "Food")
        fee.innerHTML = "Fee: ₹200";
}

function submitForm() {

    document.getElementById("result").innerHTML =
        "Registration Successful!";
}

function enlargeImage(img) {

    if (img.style.width === "400px") {
        img.style.width = "200px";
    } else {
        img.style.width = "400px";
    }

}

function countChars() {

    let text =
        document.getElementById("feedback").value;

    document.getElementById("count").innerHTML =
        text.length;
}

function videoReady() {

    document.getElementById("videoStatus").innerHTML =
        "Video ready to play";
}

window.onbeforeunload = function () {

    return "Are you sure you want to leave?";
};

function savePreference() {

    let event =
        document.getElementById("eventType").value;

    localStorage.setItem(
        "preferredEvent",
        event
    );

    alert("Preference Saved");
}

window.onload = function () {

    let saved =
        localStorage.getItem("preferredEvent");

    if (saved) {
        document.getElementById("eventType").value =
            saved;
    }
};

function clearStorage() {

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}

function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                document.getElementById(
                    "location"
                ).innerHTML =
                    "Latitude: "
                    + position.coords.latitude
                    + "<br>Longitude: "
                    + position.coords.longitude;
            },

            function (error) {

                alert("Location access denied");
            },

            {
                enableHighAccuracy: true,
                timeout: 5000
            }
        );
    }
}