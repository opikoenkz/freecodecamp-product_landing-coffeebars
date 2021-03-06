/*----- Navbar Hamburger -----*/
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".navbar-menu");
const menuItem = document.querySelectorAll(".nav-link");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

/*----- Modal-Content -----*/
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  let captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
