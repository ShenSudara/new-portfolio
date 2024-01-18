//* Main Header
//*Show and Hide menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Show Menu
if (navMenu && navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide Menu
if (navMenu && navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Mobile Menu When Link is Clicked
const navLinks = document.querySelectorAll(".nav-link");
if (navLinks) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show-menu");
    });
  });
}

// *Skills Section
// Show Hide Skills List
const skillsContent = document.getElementsByClassName("skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");

skillsHeader.forEach((skill) => {
  skill.addEventListener("click", (event) => {
    if (skill.parentNode.className == "skills-content skills-open") {
      skill.parentNode.className = "skills-content skills-close";
    } else {
      for (let i = 0; i < skillsContent.length; i++) {
        skill.parentNode.className = "skills-content skills-close";
      }

      if (skill.parentNode.className == "skills-content skills-close") {
        skill.parentNode.classList = "skills-content skills-open";
      }
    }
  });
});

// *Qualification Section
const tabs = document.querySelectorAll(".qualification-btn");
const tabsContent = document.querySelectorAll(".qualification-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach((tab) => tab.classList.remove("qualification-btn-active"));

    tab.classList.add("qualification-btn-active");

    tabsContent.forEach((tabContent) => {
      if (tab.dataset.content == tabContent.dataset.content) {
        tabContent.classList.add("qualification-content-active");
      } else {
        tabContent.classList.remove("qualification-content-active");
      }
    });
  });
});

// Service Section
// Popup the next window
const modalInfos = document.querySelectorAll(".service-info");
const servicesBtns = document.querySelectorAll(".service-btn");
const modalCloseBtns = document.querySelectorAll(".service-info-close");

servicesBtns.forEach((serviceBtn, i) => {
  serviceBtn.addEventListener("click", (event) => {
    modalInfos[i].classList.add("service-modal-active");
  });
});

// Close the open window
modalCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modalInfos.forEach((modalInfo) =>
      modalInfo.classList.remove("service-modal-active")
    );
  });
});

//Portfolio Section - Slider
// Initialize the swiper js for custom mode
let portfolioSwiper = new Swiper(".portfolio-container", {
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-portfolio",
    clickable: true,
  },
});

// Certifications Sections
// Initialize the swiper js for card animation
var certificateSwiper = new Swiper(".certifications-container", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-certifications",
    clickable: true,
  },
});

const sections = document.querySelectorAll("section[id]");

// when scrolling change the active link
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((currentSection) => {
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - 50;
    const sectionIcon = document.querySelector(
      ".nav-menu a[href='#" + currentSection.getAttribute("id") + "']"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionIcon.classList.add("nav-link-active");
    } else {
      sectionIcon.classList.remove("nav-link-active");
    }
  });
});

// change the header style after end of the home section
// add scroll-up icon after end of the home section
const header = document.getElementById("header");
const scrollUp = document.getElementById("scroll-up");
const homeSection = document.querySelector("#home");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > homeSection.offsetTop + homeSection.offsetHeight) {
    header.classList.add("scrolled-header");
    scrollUp.classList.add("scroll-up-active");
  } else {
    header.classList.remove("scrolled-header");
    scrollUp.classList.remove("scroll-up-active");
  }
});

// Dark or Light Theme
const themeBtn = document.getElementById("change-theme");
const darkTheme = "dark-theme";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("fa-moon") ? "fa-moon" : "fa-sun";

// Automatic Theme Change
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  if (selectedIcon == "fa-moon") {
    themeBtn.classList.toggle("fa-sun", false);
    themeBtn.classList.add("fa-moon");
  } else {
    themeBtn.classList.toggle("fa-moon");
    themeBtn.classList.add("fa-sun");
  }
}

// Manual Theme Change
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  if (themeBtn.classList.contains("fa-moon")) {
    themeBtn.classList.replace("fa-moon", "fa-sun");
  } else {
    themeBtn.classList.replace("fa-sun", "fa-moon");
  }

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Custom Scroll Bar
const scrollBar = document.getElementById("scroll-bar");
window.addEventListener("scroll", () => {
  const verticalHeight = document.body.scrollHeight;
  scrollBar.style.height = (window.scrollY * 100) / verticalHeight + 8 + "%";
});
