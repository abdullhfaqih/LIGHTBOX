const miniImage = document.querySelectorAll(".thumbnail img");
const overlay = document.querySelector(".overlay");
const fullImage = document.querySelector(".full");
const close = document.querySelector(".close");

miniImage.forEach((img) => {
  img.addEventListener("click", (e) => {
    if (e.target.alt == "azizi shafa") {
      fullImage.setAttribute("src", "./img/full/zeefull.jpg");
      overlay.style.display = "flex";
    } else if (e.target.alt == "gita sekar") {
      fullImage.setAttribute("src", "./img/full/gitafull.jpg");
      overlay.style.display = "flex";
    } else if (e.target.alt == "shani indira") {
      fullImage.setAttribute("src", "./img/full/shanifull.jpg");
      overlay.style.display = "flex";
    }
  });
});

close.addEventListener("click", () => {
  overlay.classList.add("animasiKeluar");
  setTimeout(() => {
    overlay.classList.remove("animasiKeluar");
    overlay.style.display = "none";
  }, 500);
});
