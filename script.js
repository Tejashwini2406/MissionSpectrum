document.getElementById("submit").addEventListener("click", function () {
    const passcode = document.getElementById("passcode").value;
    const accessGrantedAudio = new Audio("accessgranted.mp3");
    const accessDeniedAudio = new Audio("accessdenied.mp3");
    const validPasscodes = ["wx3nf0", "ax3p6h", "1zp5qm", "ld1k0o", "k0m1sv"]; // Replace with your valid passcodes
    const maxAttempts = 3;
    let attempts = parseInt(localStorage.getItem("attempts") || "0");

    if (attempts >= maxAttempts) {
        alert("Maximum attempts reached!");
        accessDeniedAudio.play();
        return;
    }

    if (validPasscodes.includes(passcode)) {
        alert("Access Granted!");
        accessGrantedAudio.play();
        
        // Redirect after 5 seconds
        setTimeout(() => {
            window.location.href = "C:\\Users\\nitis\\Desktop\\MissionSpectrumWebsite\\circuit.html";
        }, 5000); // 5000 milliseconds = 5 seconds

    } else {
        attempts++;
        localStorage.setItem("attempts", attempts.toString());
        alert(`Access Denied! Attempts left: ${maxAttempts - attempts}`);
        accessDeniedAudio.play();

        // If attempts reach max, reset after alert
        if (attempts >= maxAttempts) {
            localStorage.removeItem("attempts");
        }
    }
});
