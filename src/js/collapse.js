export default class Collapse {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.btn = this.element.querySelector(".collapse__btn");
    this.textContainer = this.element.querySelector(".collapse__container");
    this.text = this.element.querySelector(".collapse__text");
    this.copyBtn = this.element.querySelector(".collapse__copy");

    const textContainerHeight = this.textContainer.clientHeight;
    this.textContainer.style.maxHeight = "0px";

    this.collapseBtnEventListener(this.btn, textContainerHeight);
    this.copyBtnEventListener(this.copyBtn);
  }

  collapseBtnEventListener(btn, height) {
    btn.addEventListener("click", () => {
      if (
        this.textContainer.classList.contains("collapse__container--hidden")
      ) {
        this.textContainer.style.maxHeight = height + "px";
        this.textContainer.classList.remove("collapse__container--hidden");
        this.btn.classList.add("opened");
        this.copyBtn.classList.remove("hidden");
      } else {
        this.textContainer.style.maxHeight = "0px";
        this.textContainer.classList.add("collapse__container--hidden");
        this.btn.classList.remove("opened");
        this.copyBtn.classList.add("hidden");
      }

      this.copyBtn.textContent = "Copy";
    });
  }

  copyBtnEventListener(btn) {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(this.text.textContent);
      this.copyBtn.textContent = "Copied!";
    });
  }
}
