import React from 'react';
// import '.App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import SingleCocktail from './pages/SingleCocktail';
import REACT_APP_API from '../src/.env';


// import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>

    </div>
  )
};
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff3c86e4cemsh5b9a0c3fcc37e8ap1e11f8jsn43859391059b',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

fetch(REACT_APP_API, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//shortens document.getEgetElementById
function element(id) {
  return document.getElementById(id);
}
let allSearchData = ""; //decleared to collect all search names

//gets each inputs data starting from second input
function getResults() {
  //gets value of input
  let search = element("search-input").value;
  allSearchData = ""; //clears data for each word typed

  hideSearchResults();
  clearSearchResults();
  clearSearchData(); //
  //starts searching from the second input
  if (search.length > 1) {
    let counter = 0; // counts to 10
    let cocktails="";
    for (let x of cocktails) {
      if (counter < 10) {
        //checks for similarities
        if (x.toLowerCase().includes(search.toLowerCase())) {
          //populates the suggestion div
          element("search-results").innerHTML +=
            "<div class='search-item' onclick='displayData(\"" +
            x +
            "\")'><p>" +
            x +
            "</p></div>";

          counter++;
        }
      }
      if (x.toLowerCase().includes(search.toLowerCase()))
        //saves all the realated names
        allSearchData += "<p>" + x + "</p>";
    }
    displaySearchResults();
  }
}
//displays the suggestion div
function displaySearchResults() {
  element("search-results").style.display = "block";
}
//clears the suggestion div
function clearSearchResults() {
  element("search-results").innerHTML = "";
}

//hides the suggestion div
function hideSearchResults() {
  element("search-results").style.display = "none";
}
//displays names when you click a suggestions
function displayData(SingleCocktail) {
  element("search-data").innerHTML = "<p>" + SingleCocktail + "</p>"
  hideSearchResults();

}
displayData();
//displays all related names to your search when you hit enter
function displayAllData(cocktails) {
  element("search-data").innerHTML = cocktails;
  hideSearchResults();
}
//clears names displayed from search result
function clearSearchData() {
  element("search-data").innerHTML = "";
}
//gets results after each input
element("search-input").oninput = function () {
  getResults();
};

element("search-input").addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (KeyboardEvent.charCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    displayAllData(allSearchData);
  }
});

export default App;
