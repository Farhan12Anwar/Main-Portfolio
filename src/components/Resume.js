// JavaScript code for tracking the selected section
var selectedSection = 'home';

function showContent(component) {
  // Get all content divs
  var contentDivs = document.getElementsByClassName("content");

  // Hide all content divs
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }

  // Show selected content div
  document.getElementById(component).style.display = "block";

  // Remove active class from all components
  var components = document.getElementsByClassName("component");
  for (var i = 0; i < components.length; i++) {
    components[i].classList.remove("active");
  }

  // Add active class to selected component
  document.getElementById(component + "-link").classList.add("active");

  // Update selected section variable
  selectedSection = component;
}

// Function to get the currently selected section
function getSelectedSection() {
  return selectedSection;
}
