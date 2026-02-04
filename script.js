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

  // 3. Create date object
  const date = new Date(birthdate);

  // getDay(): 0 = Sunday, 1 = Monday, ... 6 = Saturday
  const index = date.getDay();

  // 4. Days of the week
  const days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  // 5. Akan names
  const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena",
    "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  const femaleNames = [
    "Akosua", "Adwoa", "Abenaa",
    "Akua", "Yaa", "Afua", "Ama"
  ];

  // 6. Select Akan name
  const akanName =
    gender === "male" ? maleNames[index] : femaleNames[index];

  // 7. Display result
  document.getElementById("result").innerHTML = `
    You were born on <strong>${days[index]}</strong>.<br>
    Your Akan name is <strong>${akanName}</strong>.
  `;
});
