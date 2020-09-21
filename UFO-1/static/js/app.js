// from data.js
var sightings = data;

//Reference the table body
var tbody = d3.select("tbody");

data.forEach(function(sightings) {
  console.log(sightings);
  var row = tbody.append("tr");

  Object.entries(sightings).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO sightings object
    var cell = row.append("td");
    cell.text(value);
  });
});

// // Select the button
 var button = d3.select("#filter-btn");

// // // Select the form
var form = d3.select("form");

// // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  //Define filteredData
 var filteredData = sightings.map(sighting => sighting)

//  //Spread Operator
//  var filteredData = [...sightings]

if(inputValue){
    filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
}
 
tbody.html("")

filteredData.forEach(function(sighting) {
  console.log(sighting);

  //Add rows for filtered data sightings
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the filtered UFO sightings object
    var cell = row.append("td");
    cell.text(value);
  });
});
}



