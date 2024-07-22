document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabs = document.querySelectorAll(".tab");
  let activeTab = tabLinks[0]; // Initialize with the first tab link

  function showTab(event, tabId) {
    // Remove active class from current active tab link and tab
    if (activeTab) {
      activeTab.classList.remove("active");
      const activeContent = document.getElementById(activeTab.dataset.tab);
      activeContent.classList.remove("active");
    }

    // Set the new active tab link and tab
    const targetElement = event.target.closest(".tab-link");
    targetElement.classList.add("active");
    document.getElementById(tabId).classList.add("active");

    // Update the activeTab to the newly active tab link
    activeTab = targetElement;
  }

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      showTab(event, event.target.closest(".tab-link").dataset.tab);
    });
    link.addEventListener("mouseover", function (event) {
      showTab(event, event.target.closest(".tab-link").dataset.tab);
    });
  });

  // Initialize first tab as active
  tabLinks[0].classList.add("active");
  tabs[0].classList.add("active");
});

//slider
const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesOffsetBefore: 50, // Adjust this value to set the left space

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
