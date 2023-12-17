import Collapse from "./collapse";

const collapseContainers = document.querySelectorAll(".collapse");
collapseContainers.forEach((container) => {
  const collapse = new Collapse(container);
  collapse.init();
});
