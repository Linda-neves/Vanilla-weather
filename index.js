function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-engine");
searchFormElement.addEventListener("submit", handleSearchSubmit);
