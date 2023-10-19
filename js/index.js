// configration slider
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  loop:true,
   
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
});

// nav control 
var navLinks = document.querySelectorAll(".nav-link");
function toggleActive(event) {
  navLinks.forEach(function (navLink) {
    navLink.classList.remove("active");
  });

  event.target.classList.add("active");
}

// Add event listeners to the nav-links

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", toggleActive);
});

// filter projects
let ul = document.querySelectorAll(".projects .container .navigat ul li");
let item = document.querySelectorAll(".projects .container .content .item");
ul.forEach(function (e) {
  e.onclick = function () {
    ul.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.toggle("active");
    let data = e.dataset.type;
  
    item.forEach(function (it) {
      if (!it.classList.contains(data)) {
        it.style.cssText = "transform: scale(0,0)";
        setTimeout(() => {
          it.style.cssText = "display:none";
        }, 400);
      } else {
        it.style.cssText = "display:block";
        setTimeout(() => {
          it.style.cssText = "transform:scale(1,1)";
        }, 100);
      }
    });
  };
});




// increment  number when user come to this section number
document.addEventListener("DOMContentLoaded", function () {
  const numberElements = document.querySelectorAll(".box span");
  
  const options = {
    threshold: 0.2, // Adjust the threshold as needed
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetNumber = parseFloat(target.dataset.target); // Use parseFloat to handle decimal numbers
        let currentValue = 0;
        const increment = targetNumber / 100; // Adjust the increment value as needed
  
        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetNumber) {
            target.textContent = targetNumber; // Show the final value exactly
            clearInterval(interval);
          } else {
            target.textContent = currentValue.toFixed(1); // Show numbers with one decimal place
          }
        }, 20); // Adjust the interval delay as needed
        
        observer.unobserve(target);
      }
    });
  }, options);
  
  numberElements.forEach((element) => {
    observer.observe(element);
  });
});




// applay animation for element
document.addEventListener("DOMContentLoaded", function () {
  const animatedTextElements = document.querySelectorAll(".animated-text");

  const options = {
    threshold: 0.5, // Adjust the threshold as needed
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, options);

  animatedTextElements.forEach((element) => {
    observer.observe(element);
  });
});
