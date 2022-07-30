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
const icons = document.querySelectorAll('.links__inner__content__img');

const setDark = () => {
  toggleDark.classList.add('hidden');
  toggleLight.classList.remove('hidden');
  icons.forEach(icon => {
    icon.classList.add('icon--light');
  });
};

const setLight = () => {
  toggleLight.classList.add('hidden');
  toggleDark.classList.remove('hidden');
  icons.forEach(icon => {
    icon.classList.remove('icon--light');
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
