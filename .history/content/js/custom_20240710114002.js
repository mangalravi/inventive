document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabs = document.querySelectorAll(".tab");

  function showTab(event, tabId) {
    // Remove active class from all tab links and tabs
    tabLinks.forEach((link) => link.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add active class to the clicked/hovered tab link and corresponding tab
    event.target.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  }

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      showTab(event, event.target.dataset.tab);
    });
    link.addEventListener("mouseover", function (event) {
      showTab(event, event.target.dataset.tab);
    });
  });

  // Initialize first tab as active
  tabLinks[0].classList.add("active");
  tabs[0].classList.add("active");
});
