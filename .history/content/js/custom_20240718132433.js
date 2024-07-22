document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabs = document.querySelectorAll(".tab");
  let activeTab = tabLinks[0];

  function showTab(event, tabId) {
    if (activeTab) {
      activeTab.classList.remove("active");
      const activeContent = document.getElementById(activeTab.dataset.tab);
      activeContent.classList.remove("active");
    }

    const targetElement = event.target.closest(".tab-link");
    targetElement.classList.add("active");
    document.getElementById(tabId).classList.add("active");

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
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

$(document).ready(function () {
  var swiper = new Swiper(".swiper1", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    slidesPerView: 1,
    spaceBetween: 24,
    paginationClickable: true,
    breakpoints: {
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
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

//

document.addEventListener("DOMContentLoaded", function () {
  const parentMenus = document.querySelectorAll(".parent-menu");

  parentMenus.forEach((parentMenu) => {
    const submenu = parentMenu.querySelector(".submenu");
    const submenu1 = parentMenu.querySelector(".submenu1");

    parentMenu.addEventListener("click", function (event) {
      if (window.innerWidth <= 991) {
        event.preventDefault();

        // Toggle display for submenu
        if (submenu) {
          if (submenu.style.display === "block") {
            submenu.style.display = "none";
          } else {
            submenu.style.display = "block";
          }
        }

        // Toggle display for submenu1 if parentMenu has prodli class
        if (submenu1 && parentMenu.classList.contains("prodli")) {
          if (submenu1.style.display === "block") {
            submenu1.style.display = "none";
          } else {
            submenu1.style.display = "block";
          }
        }
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const parentMenus = document.querySelectorAll(".parent-menu");

//   // Helper function to close all submenus
//   function closeAllSubmenus() {
//     parentMenus.forEach((parentMenu) => {
//       const submenu = parentMenu.querySelector(".submenu");
//       const submenu1 = parentMenu.querySelector(".submenu1");
//       if (submenu) submenu.style.display = "none";
//       if (submenu1) submenu1.style.display = "none";
//     });
//   }

//   parentMenus.forEach((parentMenu) => {
//     const submenu = parentMenu.querySelector(".submenu");
//     const submenu1 = parentMenu.querySelector(".submenu1");

//     // Initially hide submenus
//     if (submenu) submenu.style.display = "none";
//     if (submenu1) submenu1.style.display = "none";

//     parentMenu.addEventListener("click", function (event) {
//       event.preventDefault();

//       // Close all submenus before opening the clicked one
//       closeAllSubmenus();

//       if (submenu)
//         submenu.style.display =
//           submenu.style.display === "block" ? "none" : "block";
//       if (submenu1)
//         submenu1.style.display =
//           submenu1.style.display === "block" ? "none" : "block";
//     });

//     if (submenu) {
//       submenu.addEventListener("click", function (event) {
//         event.stopPropagation();
//       });
//     }

//     if (submenu1) {
//       submenu1.addEventListener("click", function (event) {
//         event.stopPropagation();
//       });
//     }
//   });

//   // Close submenus when clicking outside
//   document.addEventListener("click", function (event) {
//     parentMenus.forEach((parentMenu) => {
//       const submenu = parentMenu.querySelector(".submenu");
//       const submenu1 = parentMenu.querySelector(".submenu1");
//       if (submenu && !parentMenu.contains(event.target)) {
//         submenu.style.display = "none";
//       }
//       if (submenu1 && !parentMenu.contains(event.target)) {
//         submenu1.style.display = "none";
//       }
//     });
//   });
// });
