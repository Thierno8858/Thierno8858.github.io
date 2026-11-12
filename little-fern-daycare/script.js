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

// Display the toddler schedule when the page loads as a sort of default
showSchedule(toddlerSchedule);


const tourForm = document.querySelector("#tour-form");
tourForm.addEventListener("submit", function(event) {
  event.preventDefault();
  document.querySelector("#confirmation").textContent =
    "Thanks! This is a proof of concept, so your request was not sent.";
  tourForm.reset();
});
