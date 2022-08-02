'use strict';

// Theme
const theme = 'theme';
const dataTheme = 'data-theme';
const root = document.documentElement;
const toggleDark = document.getElementById('toggleDark');
const toggleLight = document.getElementById('toggleLight');
const dark = 'dark';
const light = 'light';
const currentTheme = localStorage.getItem(theme);
const icons = document.querySelectorAll('.links__img');

const setDark = () => {
  toggleDark.classList.add('hidden');
  toggleLight.classList.remove('hidden');
  icons.forEach(icon => {
    icon.classList.add('icon-light');
  });
};

const setLight = () => {
  toggleLight.classList.add('hidden');
  toggleDark.classList.remove('hidden');
  icons.forEach(icon => {
    icon.classList.remove('icon-light');
  });
};

toggleDark.addEventListener('click', function () {
  root.setAttribute(dataTheme, dark);
  localStorage.setItem(theme, dark);
  setDark();
});

toggleLight.addEventListener('click', function () {
  root.setAttribute(dataTheme, light);
  localStorage.setItem(theme, light);
  setLight();
});

// Set current theme on page load
if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  if (root.dataset.theme.includes(dark)) {
    setDark();
  };
};

// Search user
const searchInput = document.getElementById('search');
const form = document.getElementById('form');
const searchButton = document.getElementById('searchBtn');
const profileImg = document.getElementById('profileImg');

form.addEventListener('submit', (e) => {
  // Prevent refresh
  e.preventDefault();

  // Get value from search input
  const searchValue = searchInput.value;

  // Remove space from search
  const originalName = searchValue.split(' ').join('');

  // Get api data
  fetch(`https://api.github.com/users/${originalName}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);

      // Display data
      // profileImg.setAttribute('src', data.avatar_url);
    })
    .catch((err) => {
      console.log(err);
    });
})
