const tabs = document.querySelectorAll('.nav__tab');

const activeTab = 'email';

function handleTabContent(tabName) {
  exports.activeTab = tabName;
  const tabContents = Array.from(
    document.getElementsByClassName('tab-content'),
  );
  tabContents.forEach((content) => {
    content.style.display = 'none';
  });
  document.querySelector(`.${tabName}`).style.display = 'block';
}

function openTab(event) {
  tabs.forEach((tab) => tab.classList.remove('nav__tab--active'));
  event.target.classList.add('nav__tab--active');
  const errors = document.querySelector('.form__errors');
  errors.style.display = 'none';
  const tabName = event.target.name;
  handleTabContent(tabName);
}

handleTabContent(activeTab);
tabs.forEach((tab) => tab.addEventListener('click', openTab));
