'use strict';

const root = document.documentElement;
const theme = 'theme';
const dataTheme = 'data-theme';
const themeSwitcherDark = document.querySelector('.theme__toggle--dark');
const themeSwitcherLight = document.querySelector('.theme__toggle--light');
const light = 'light';
const dark = 'dark';

// Theme 
const currentTheme = localStorage.getItem(theme);