function createCustomElement({
  tag,
  dataAttributes = {},
  textContent = "",
  classList = [],
}) {
  if (!Array.isArray(classList)) {
    console.error("Invalid classList:", classList);
    classList = [];
  }

  const element = document.createElement(tag);
  Object.entries(dataAttributes).forEach(([key, value]) => {
    element.setAttribute(`data-${key}`, value);
  });

  element.textContent = textContent;
  classList.forEach((cls) => element.classList.add(cls));
  return element;
}
function dropdown(dropdownButtonId, containerId) {
  const dropdownButton = document.getElementById(dropdownButtonId);
  const container = document.getElementById(containerId);
  dropdownButton.addEventListener("click", () => {
    container.classList.toggle("visible");
    dropdownButton.classList.toggle("hide");
    if (container.classList.contains("visible")) {
      container.setAttribute("display", "block");
    } else {
      container.setAttribute("display", "none");
    }
    if (dropdownButton.classList.contains("hide")) {
      dropdownButton.textContent = "hide";
    } else {
      dropdownButton.textContent = "show";
    }
  });
}
module.exports = { dropdown, createCustomElement };
