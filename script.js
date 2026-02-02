document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Get user input
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    // 2. Validate input
    if (birthdate === "") {
        alert("Please select your birthdate.");
        return;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return;
    }

    // 3. Extract day, month, year
    const date = new Date(birthdate);
    let DD = date.getDate();
    let MM = date.getMonth() + 1; // months start from 0
    let YY = date.getFullYear();

    // 3a. Adjust month & year for Jan/Feb (Zeller-style)
    if (MM < 3) {
        MM += 12;
        YY -= 1;
    }

    // 4. Zeller’s Congruence formula
    const K = YY % 100;          // year within century
    const J = Math.floor(YY / 100); // zero-based century

    const h = (DD + Math.floor((13 * (MM + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + (5 * J)) % 7;

    // Zeller’s formula gives: 0=Saturday, 1=Sunday, 2=Monday, ...
    const index = (h + 6) % 7; // shift so 0=Sunday, 1=Monday, ...

    // 5. Akan names arrays
    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const maleNames = [
        "Kwasi", "Kwadwo", "Kwabena",
        "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    const femaleNames = [
        "Akosua", "Adwoa", "Abenaa",
        "Akua", "Yaa", "Afua", "Ama"
    ];

    // 6. Pick Akan name
    const akanName = gender === "male" ? maleNames[index] : femaleNames[index];

    // 7. Display result
    document.getElementById("result").innerHTML =
        `You were born on <strong>${days[index]}</strong>.<br>
        Your Akan name is <strong>${akanName}</strong>.`;
});
