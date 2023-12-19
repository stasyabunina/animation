import Collapse from "./collapse";
import Liker from "./liker";
import Callback from "./callback";

const collapseContainers = document.querySelectorAll(".collapse");
collapseContainers.forEach((container) => {
  const collapse = new Collapse(container);
  collapse.init();
});

const likerContainer = document.querySelector(".liker");
const liker = new Liker(likerContainer);
liker.init();

const callbackContainer = document.querySelector(".callback");
const callback = new Callback(callbackContainer);
callback.init();
