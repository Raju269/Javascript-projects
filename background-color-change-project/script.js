const parent = document.getElementById("parent");

parent.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = e.target.style.backgroundColor;
  }
});
