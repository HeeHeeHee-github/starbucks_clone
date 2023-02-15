// MAIN HEADER
// SEARCH BAR

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchBarEl = searchEl.querySelector("span");
let isFocused = false;

// searchEl.addEventListener("click", function () {
//   searchInputEl.focus();
// });

searchBarEl.addEventListener("click", function () {
  if (isFocused) {
    searchInputEl.blur();
    isFocused = false;
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});
