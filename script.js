// dropdown

function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// toggle

const navSlide = () => {
  const show = document.querySelector(".toggle");
  const navList = document.querySelector(".navbar-list");

  show.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    show.classList.toggle("toggle-show");
  });
};

navSlide();

// refresh page after submit form

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
