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
