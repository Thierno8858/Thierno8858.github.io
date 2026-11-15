// Sample schedules for the two age groups
const toddlerSchedule = [
  "8:00 AM - Arrival and play",
  "8:30 AM - Breakfast",
  "9:00 AM - Songs and learning",
  "10:00 AM - Outside play",
  "11:30 AM - Lunch",
  "12:30 PM - Nap time",
  "3:00 PM - Activities and play",
  "4:30 PM - Pickup"
];

const preschoolSchedule = [
  "8:00 AM - Arrival and play",
  "8:30 AM - Breakfast",
  "9:00 AM - Stories and learning",
  "10:00 AM - Outside play",
  "11:30 AM - Lunch",
  "12:30 PM - Quiet time",
  "3:00 PM - Crafts and games",
  "4:30 PM - Pickup"
];

const scheduleList = document.querySelector("#schedule-list");

function showSchedule(schedule) {
  scheduleList.innerHTML = "";

  schedule.forEach(function(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    scheduleList.appendChild(listItem);
  });
}

document.querySelector("#toddler-btn").addEventListener("click", function() {
  showSchedule(toddlerSchedule);
});

document.querySelector("#preschool-btn").addEventListener("click", function() {
  showSchedule(preschoolSchedule);
});

// Display the toddler schedule when the page first loads
showSchedule(toddlerSchedule);

// Simple demonstration form; nothing is sent or saved
const tourForm = document.querySelector("#tour-form");

tourForm.addEventListener("submit", function(event) {
  event.preventDefault();

  document.querySelector("#confirmation").textContent =
    "Thank you for your interest in Little Fern Daycare!";

  tourForm.reset();
  characterCount.textContent = "0 / 200 characters";
});

// Show program information based on the selected age group
const ageGroup = document.querySelector("#age-group");
const availabilityResult = document.querySelector("#availability-result");

ageGroup.addEventListener("change", function() {
  if (ageGroup.value === "toddlers") {
    availabilityResult.textContent =
      "Toddler program: songs, sensory activities, and playtime. Contact us to ask about openings.";
  } else if (ageGroup.value === "preschool") {
    availabilityResult.textContent =
      "Preschool program: stories, crafts, and early learning. Contact us to ask about openings.";
  } else {
    availabilityResult.textContent = "";
  }
});

// Count characters while someone types a message
const message = document.querySelector("#message");
const characterCount = document.querySelector("#character-count");

message.addEventListener("input", function() {
  characterCount.textContent =
    message.value.length + " / 200 characters";
});
