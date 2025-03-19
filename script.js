document.addEventListener("DOMContentLoaded", function () {

    const yesRadio = document.getElementById("yes-option");
    const noRadio = document.getElementById("no-option");
    const checkbox = document.getElementById("agreeCheckbox");
    const ctaButton = document.getElementById("cta-button");

    if (!ctaButton) {
        console.error("CTA button NOT found in DOM!");
        return;
    }

    function updateCTAState() {
        // Check which elements exist and enable CTA accordingly
        if ((yesRadio && yesRadio.checked) || (noRadio && noRadio.checked) || (checkbox && checkbox.checked)) {
            ctaButton.disabled = false;
            ctaButton.classList.add("enabled");
        } else {
            ctaButton.disabled = true;
            ctaButton.classList.remove("enabled");
        }
    }

    // Add event listeners only if elements exist
    if (yesRadio) yesRadio.addEventListener("change", updateCTAState);
    if (noRadio) noRadio.addEventListener("change", updateCTAState);
    if (checkbox) checkbox.addEventListener("change", updateCTAState);

    // Button click event for redirection
    ctaButton.addEventListener("click", function () {
        if (!ctaButton.disabled) {
            if (yesRadio && yesRadio.checked) {
                window.location.href = "ifyes1.html";
            } else if (noRadio && noRadio.checked) {
                window.location.href = "ifno1.html";
            } else if (checkbox && checkbox.checked) {
                window.location.href = "ifno2.html";
            }
        }
    });
});





