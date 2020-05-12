let search_input = document.getElementById('search');
let Items = document.getElementsByTagName('li');
let elements = [...Items]; //puts the list of items into an array

search_input.addEventListener("input", function() { 
  let searchValue = this.value.toUpperCase();
  elements.forEach(listElement => {
    let stringFound = listElement.innerText.toUpperCase().indexOf(searchValue) > -1;
    if (stringFound === false) {
      listElement.style.display = "none";
    } else {
      listElement.style.display = "block";
    }
  });
});
