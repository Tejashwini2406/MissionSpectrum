document.getElementById("submit").addEventListener("click", function () {
    const passcode = document.getElementById("passcode").value;
    const accessGrantedAudio = new Audio("accessgranted.mp3");
    const accessDeniedAudio = new Audio("accessdenied.mp3");
    const validPasscodes = ["wx3nf0", "ax3p6h", "1zp5qm", "ld1k0o", "k0m1sv"]; 
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
        
        setTimeout(() => {
            window.location.href = "circuit.html";
        }, 5000);

    } else {
        attempts++;
        localStorage.setItem("attempts", attempts.toString());
        alert(`Access Denied! Attempts left: ${maxAttempts - attempts}`);
        accessDeniedAudio.play();
        if (attempts >= maxAttempts) {
            localStorage.removeItem("attempts");
        }
    }
});
