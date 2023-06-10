// Get all the .map-tag elements
const mapTags = document.querySelectorAll(".map-tag");

// Loop through each .map-tag element
mapTags.forEach((mapTag) => {
  // Get the circle element inside the current .map-tag element
  const circle = mapTag.querySelector("circle");

  // Add event listener for mouseenter (cursor entering the .map-tag element)
  mapTag.addEventListener("mouseenter", () => {
    // Add a CSS class to toggle the fill color
    circle.classList.add("hovered");
  });

  // Add event listener for mouseleave (cursor leaving the .map-tag element)
  mapTag.addEventListener("mouseleave", () => {
    // Remove the CSS class to revert the fill color
    circle.classList.remove("hovered");
  });
});
