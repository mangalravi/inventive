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
    event.target.classList.add("active");
    document.getElementById(tabId).classList.add("active");

    // Update the activeTab to the newly active tab link
    activeTab = event.target;
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
