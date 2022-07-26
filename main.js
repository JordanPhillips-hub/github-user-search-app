'use strict';

const root = document.documentElement;
const theme = 'theme';
const dataTheme = 'data-theme';
const themeSwitcherDark = document.getElementById('themeDark');
const themeSwitcherLight = document.getElementById('themeLight');
const search = document.getElementById('search');
const icons = document.querySelectorAll('.links__inner__content__img');

// Theme 
const currentTheme = localStorage.getItem(theme);

// Switch to dark theme
const toggleDark = () => {
  root.classList.add('dark');
  themeSwitcherDark.classList.add('hidden');
  themeSwitcherLight.classList.remove('hidden');
  search.style.backgroundColor = 'hsl(222, 41%, 20%)';
  icons.forEach(icon => {
    icon.classList.add('icon-light');
  });
}

// Switch to light theme
const toggleLight = () => {
  root.classList.remove('dark');
  search.style.backgroundColor = 'hsl(0, 0%, 100%)';
  themeSwitcherDark.classList.remove('hidden');
  themeSwitcherLight.classList.add('hidden');
  icons.forEach(icon => {
    icon.classList.remove('icon-light');
  });
}

themeSwitcherDark.addEventListener('click', toggleDark);
themeSwitcherLight.addEventListener('click', toggleLight);