const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  item.style.transform = `translateX(${index * 100}%)`; // Initial staggered position
  item.style.transition = "transform 0.3s ease-in-out"; // Smooth transition effect

  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateX(0%)"; // Slide in on hover
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = `translateX(${index * 100}%)`; // Return to original position
  });
});

window.onload = function () {
  // Check if the user has already dismissed the popup or if the browser supports localStorage
  if (
    !localStorage.getItem("popupDismissed") &&
    typeof localStorage !== "undefined"
  ) {
    // Show the popup
    document.getElementById("app-popup").style.display = "flex";
  }
};

document.querySelector(".close-popup").addEventListener("click", () => {
  document.getElementById("app-popup").style.display = "none";
  localStorage.setItem("popupDismissed", true);
});

/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    // Change password to text
    if (input.type === "password") {
      // Switch to text
      input.type = "text";

      // Icon change
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      // Change to password
      input.type = "password";

      // Icon change
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

function togglePasswordVisibility(inputId) {
  const passwordInput = document.getElementById(inputId);
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
