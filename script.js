"use strict";
var _a;
// Toggle Skills Section visibility when button is clicked
(_a = document.getElementById("toggleSkills")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const skillsSection = document.getElementById("skillsSection");
    // Check if the skills section is currently hidden or shown
    if (skillsSection.style.display === "none") {
        // Show the skills section if hidden
        skillsSection.style.display = "block";
        this.textContent = "Hide Skills Section"; // Update button text
    }
    else {
        // Hide the skills section if visible
        skillsSection.style.display = "none";
        this.textContent = "Show Skills Section"; // Update button text
    }
});
