// STEP 2: Select the elements
const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const emailInput = document.getElementById("emailInput");
const cityInput = document.getElementById("cityInput");
const bioInput = document.getElementById("bioInput");
const resetBtn = document.getElementById("resetBtn");

const avatar = document.getElementById("avatar");
const cardName = document.getElementById("cardName");
const cardRole = document.getElementById("cardRole");
const cardEmail = document.getElementById("cardEmail");
const cardCity = document.getElementById("cardCity");
const cardBio = document.getElementById("cardBio");

// STEP 6: Default values
const defaults = {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  city: "Your City",
  bio: "Your bio will appear here."
};

// STEP 4 & 5: Update the card
function updateCard() {
  const name = nameInput.value.trim();

  cardName.textContent = name || defaults.name;
  cardRole.textContent = roleInput.value.trim() || defaults.role;
  cardEmail.textContent = emailInput.value.trim() || defaults.email;
  cardCity.textContent = cityInput.value.trim() || defaults.city;
  cardBio.textContent = bioInput.value.trim() || defaults.bio;

  // Avatar: first letter of the name
  avatar.textContent = name ? name[0].toUpperCase() : "?";
}

// STEP 3: Listen to events
const inputs = [nameInput, roleInput, emailInput, cityInput, bioInput];

inputs.forEach(input => {
  input.addEventListener("input", updateCard);
});

// STEP 7: Reset button
resetBtn.addEventListener("click", () => {
  inputs.forEach(input => (input.value = ""));
  updateCard();
});