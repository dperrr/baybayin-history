// Habi ng Wika Main Script
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")
  const closeIcon = document.getElementById("close-icon")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  let isMenuOpen = false

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden")
      menuIcon.classList.add("hidden")
      closeIcon.classList.remove("hidden")
    } else {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    }
  })

  // Close mobile menu when clicking on nav links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    })
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  const navbar = document.querySelector("nav")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 50) {
      navbar.style.backgroundColor = "rgba(var(--background), 0.95)"
    } else {
      navbar.style.backgroundColor = "rgba(var(--background), 0.95)"
    }

    lastScrollY = currentScrollY
  })

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)


  document.querySelectorAll(".bg-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})


document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("[include-html]").forEach(el => {
    fetch(el.getAttribute("include-html"))
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => console.error("Include failed: ", err));
  });
});
