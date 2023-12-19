import likeImg from "../img/heart.png";

export default class Liker {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.btn = this.element.querySelector(".liker__btn");

    this.likeBtnEventListener(this.btn);
  }

  likeBtnEventListener(btn) {
    btn.addEventListener("click", () => {
      this.createHeart();
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 4 + 1);
  }

  createHeart() {
    const like = document.createElement("img");
    like.src = likeImg;
    like.classList.add("like");

    const randomNumber = this.randomNumber();
    like.style.animation = `like-${randomNumber} 500ms ease-out`;

    this.btn.appendChild(like);
    like.addEventListener("animationend", () => like.remove());
  }
}
