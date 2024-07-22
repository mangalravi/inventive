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

  tabLinks[0].classList.add("active");
  tabs[0].classList.add("active");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

$(document).ready(function () {
  // Initialize Swiper
  var swiper = new Swiper(".swiper1", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    paginationClickable: true,
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});

//accordien

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      const accordionContent = this.nextElementSibling;
      const isOpen = accordionContent.style.maxHeight;

      document.querySelectorAll(".accordion-content").forEach((content) => {
        content.style.maxHeight = null;
        content.parentElement.classList.remove("active");
      });

      if (!isOpen) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionItem.classList.add("active");
      }
    });
  });
});

(function ($) {
  "use strict";

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".nvbrhdr").addClass("bg-white");
    } else {
      $(".nvbrhdr").removeClass("bg-white");
    }
  });
  $(document).ready(function () {
    $("#line").click(function () {
      $("#line").hide();
      $("#cross").show();
      $(".collapse.navbar-collapse").addClass("expanded").slideDown();
      $(".exbtn").show();
    });

    $("#cross").click(function () {
      $("#cross").hide();
      $("#line").show();
      $(".collapse.navbar-collapse").removeClass("expanded").slideUp();
      $(".exbtn").hide();
    });
  });
})(jQuery);

// document.addEventListener("DOMContentLoaded", function () {
//   const parentMenus = document.querySelectorAll(".parent-menu.hvrmnu");

//   parentMenus.forEach((parentMenu) => {
//     const submenu = parentMenu.querySelector(".submenu1");

//     parentMenu.addEventListener("click", function (event) {
//       if (submenu.contains(event.target)) {
//         // Click is inside the submenu, stop propagation
//         event.stopPropagation();
//         return;
//       }

//       if (submenu) {
//         submenu.classList.toggle("open");
//       }
//     });
//   });

//   // Close submenu when clicking outside of .parent-menu.hvrmnu
//   document.addEventListener("click", function (event) {
//     parentMenus.forEach((parentMenu) => {
//       const submenu = parentMenu.querySelector(".submenu1");
//       if (submenu && !parentMenu.contains(event.target)) {
//         submenu.classList.remove("open");
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const parentMenus = document.querySelectorAll(".parent-menu.hvrmnu");

  parentMenus.forEach((parentMenu) => {
    const submenu = parentMenu.querySelector(".submenu1");
    const menuArrow = parentMenu.querySelector(".menu-arrow");

    // Initially hide submenu
    submenu.classList.remove("open");

    parentMenu.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Toggle submenu visibility
      submenu.classList.toggle("open");

      // Toggle icon rotation
      menuArrow.classList.toggle("rotate-icon");
    });

    // Handle clicks on .prodli to hide .submenu1
    const prodliItems = parentMenu.querySelectorAll(".prodli");
    prodliItems.forEach((prodli) => {
      prodli.addEventListener("click", function (event) {
        // Prevent submenu from toggling when clicking on .prodli
        event.stopPropagation();

        // Close the submenu if open
        if (submenu.classList.contains("open")) {
          submenu.classList.remove("open");
          menuArrow.classList.remove("rotate-icon");
        }
      });
    });
  });

  // Close submenu when clicking outside of .parent-menu.hvrmnu
  document.addEventListener("click", function (event) {
    parentMenus.forEach((parentMenu) => {
      const submenu = parentMenu.querySelector(".submenu1");
      if (submenu && !parentMenu.contains(event.target)) {
        submenu.classList.remove("open");
      }
    });
  });
});
