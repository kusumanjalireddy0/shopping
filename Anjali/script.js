(function(){
    emailjs.init("gonchijashwitha@gmail.com"); // Replace with your EmailJS Public Key
})();

document.getElementById("appointment-form")
.addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.sendForm("gonchijashwitha@gmail.com", "YOUR_TEMPLATE_ID", this)
    .then(function(){
        document.getElementById("status").innerText = 
        "Appointment Booked Successfully!";
    }, function(error){
        document.getElementById("status").innerText = 
        "Failed to send appointment.";
    });
});