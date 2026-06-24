document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("newsletterForm");
    const email = document.getElementById("newsletterEmail");
    const message = document.getElementById("newsletterMessage");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        if(email.value.trim()===""){

            message.style.color="#ff8080";
            message.textContent="Please enter your email.";

            return;

        }

        message.style.color="#7CFC00";
        message.textContent="🎉 Thank you for subscribing! You'll receive our latest travel deals and destination updates in your inbox.";

        form.reset();

    });

});