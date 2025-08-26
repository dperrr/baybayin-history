// navbar.js
function initNavbar() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")
  const closeIcon = document.getElementById("close-icon")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  const navbar = document.querySelector("nav")

  if (!mobileMenuBtn || !navbar) {
    console.warn("Navbar elements not found. Did you load the HTML?");
    return;
  }

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

  // Close menu when clicking nav links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    })
  })

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  })

  // Scroll background effect
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

  // Card fade-in
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
}
