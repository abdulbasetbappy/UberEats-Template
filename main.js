function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tabs-container .tab');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active-tab');
  });

  document.getElementById(tabId).classList.add('active');

  const activeTabButton = document.querySelector(`.tabs-container .tab[data-tab="${tabId}"]`);
  if (activeTabButton) {
    activeTabButton.classList.add('active-tab');
  }
}
