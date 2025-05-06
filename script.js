function showTab(index) {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }
    tabs[index].style.display = 'block';
  }

function togglePanel(btn) {
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  }

  const slideshow = document.getElementById("slideshow");
  const slides = slideshow.getElementsByClassName("slides");
  let slideIndex = 0;
  let intervalId = null;

  function showNextSlide() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
  }

  function startSlideshow() {
    intervalId = setInterval(showNextSlide, 1000); // change every 1 second
  }

  function stopSlideshow() {
    clearInterval(intervalId);
  }

  slideshow.addEventListener("mouseenter", startSlideshow);
  slideshow.addEventListener("mouseleave", stopSlideshow);


  
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");

  // Real-time email validation
  emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email === "") {
      emailFeedback.textContent = "Email is required.";
    } else if (!emailPattern.test(email)) {
      emailFeedback.textContent = "Invalid email format.";
    } else {
      emailFeedback.textContent = "Valid email.";
      emailFeedback.classList.add("valid");
    }
  });

  // Real-time password validation
  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    if (password.length < 8) {
      passwordFeedback.textContent = "Password must be at least 8 characters.";
    } else {
      passwordFeedback.textContent = "Password looks good.";
      passwordFeedback.classList.add("valid");
    }
  });

  // Final validation on form submit
  function validateForm() {
    let valid = true;
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Email validation
    if (email === "") {
      emailFeedback.textContent = "Email is required.";
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      emailFeedback.textContent = "Invalid email format.";
      valid = false;
    }

    // Password validation
    if (password.length < 8) {
      passwordFeedback.textContent = "Password must be at least 8 characters.";
      valid = false;
    }

    return valid;
  }

  const btn = document.getElementById("btn");
  const text = document.getElementById("sentence");

  btn.addEventListener("mouseenter", () => {
    text.style.color = "blue"; // Change text color on hover
  });

  btn.addEventListener("mouseleave", () => {
    text.style.color = "black"; // Revert to original color
  });


    btn.addEventListener("dblclick", () => {
    text.style.color = "blue";           // Change text color
    text.style.fontSize = "30px";       // Increase font size
    });