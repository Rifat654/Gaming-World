// ============ Responsive  navbar section start=============//

let icon = document.querySelector(".hambar");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("ShowData");

  if (ul.className == "ShowData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// ============ Responsive  navbar section end=============//
// ============ Text Type Animation start=============//

const typed = new Typed(".auto-type", {
  strings: ["Creativity", "Ambition", "Destiny"], // Consistent capitalization
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// ============ Text Type Animation end=============//
