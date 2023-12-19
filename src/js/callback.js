export default class Callback {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.btn = this.element.querySelector(".callback__btn");

    this.showFormBtnEventListener(this.btn);
  }

  showFormBtnEventListener(btn) {
    btn.addEventListener("click", () => {
      this.createForm(btn);
      btn.classList.add("disappear");
    });
  }

  createForm(btn) {
    if (this.element.querySelector(".callback__form")) {
      this.element.querySelector(".callback__form").remove();
    }

    const form = document.createElement("form");
    form.classList.add("callback__form");

    const title = document.createElement("h2");
    title.classList.add("callback__title");
    title.textContent = "Напишите нам";

    const input = document.createElement("textarea");
    input.classList.add("callback__input");

    const submit = document.createElement("button");
    submit.classList.add("callback__form-button");
    submit.textContent = "Отправить";

    const close = document.createElement("button");
    close.classList.add("callback__close");
    close.type = "button";
    close.textContent = "x";

    form.classList.add("open");

    this.btn.after(form);
    form.append(title);
    form.append(input);
    form.append(submit);
    form.append(close);

    form.style.right =
      this.btn.getBoundingClientRect().right - this.btn.offsetWidth + "px";
    form.style.bottom =
      this.btn.getBoundingClientRect().bottom -
      this.btn.offsetHeight / 2 +
      "px";

    close.addEventListener("click", () => {
      form.classList.remove("open");
      form.classList.add("close");
      form.addEventListener("animationend", () => {
        form.remove();
      });

      btn.classList.remove("disappear");
    });
  }
}
