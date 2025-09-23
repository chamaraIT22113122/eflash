'use strict';

// Header search for all pages
document.addEventListener('DOMContentLoaded', function() {
  var searchForm = document.getElementById('header-search-form');
  var searchInput = document.getElementById('header-search-input');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var query = searchInput.value.trim().toLowerCase();
      if (!query) return;
      // Simple page search: match against known pages
      var pages = [
        {name: 'Home', url: 'index.html#home'},
        {name: 'About', url: 'index.html#about'},
        {name: 'Portfolio', url: 'Portfolio.html'},
        {name: 'Shop', url: 'shop.html'},
        {name: 'Contact', url: 'index.html#contact'}
      ];
      var found = pages.find(function(page) {
        return page.name.toLowerCase().includes(query);
      });
      if (found) {
        window.location.href = found.url;
      } else {
        alert('No matching page found.');
      }
    });
  }
});

// Header search for all pages
document.addEventListener('DOMContentLoaded', function() {
  var searchForm = document.getElementById('header-search-form');
  var searchInput = document.getElementById('header-search-input');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var query = searchInput.value.trim().toLowerCase();
      if (!query) return;
      // Simple page search: match against known pages
      var pages = [
        {name: 'Home', url: 'index.html'},
        {name: 'About', url: 'index.html#about'},
        {name: 'Portfolio', url: 'Portfolio.html'},
        {name: 'Shop', url: 'shop.html'},
        {name: 'Contact', url: 'index.html#contact'}
      ];
      var found = pages.find(function(page) {
        return page.name.toLowerCase().includes(query);
      });
      if (found) {
        window.location.href = found.url;
      } else {
        alert('No matching page found.');
      }
    });
  }
});

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

