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
      const isOpen = accordionItem.classList.contains("active");

      // Close all accordion items
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active");
        const content = item.querySelector(".accordion-content");
        content.style.maxHeight = null;
      });

      if (!isOpen) {
        // Open the clicked accordion item
        accordionItem.classList.add("active");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
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

// document.addEventListener("DOMContentLoaded", function () {
//   const parentMenus = document.querySelectorAll(".parent-menu");

//   parentMenus.forEach((parentMenu) => {
//     const submenu = parentMenu.querySelector(".submenu");
//     const submenu1 = parentMenu.querySelector(".submenu1");

//     parentMenu.addEventListener("click", function (event) {
//       if (window.innerWidth <= 991) {
//         event.preventDefault();

//         // Toggle display for submenu
//         if (submenu) {
//           if (submenu.style.display === "block") {
//             submenu.style.display = "none";
//           } else {
//             submenu.style.display = "block";
//           }
//         }

//         if (submenu1 && parentMenu.classList.contains("prodli")) {
//           if (submenu1.style.display === "block") {
//             submenu1.style.display = "none";
//           } else {
//             submenu1.style.display = "block";
//           }
//         }
//       }
//     });
//   });
// });

$(document).ready(function () {
  function toggleSubmenu() {
    if ($(window).width() < 992) {
      $(".parent-menu").off("mouseenter mouseleave");
      $(".parent-menu").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active").siblings().removeClass("active");
        $(this).find(".submenu").slideToggle();
        $(this).find(".submenu1").slideToggle();
      });
    } else {
      $(".parent-menu").off("click");
      $(".parent-menu").hover(
        function () {
          $(this).find(".submenu").slideDown();
        },
        function () {
          $(this).find(".submenu").slideUp();
        }
      );
    }
  }

  // Initial call
  toggleSubmenu();

  // Call again on window resize
  $(window).resize(function () {
    toggleSubmenu();
  });
});
