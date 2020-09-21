// from data.js
var sightings = data;

// // Select the button
 var button = d3.select("#button");

// // Select the form
 var form = d3.select("#datetime");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime.form-control");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(sightings);

//   var filteredData = people.filter(person => person.bloodType === inputValue);

//   console.log(filteredData);

// var tbody = d3.select("tbody");
// console.log(data);

// data.forEach(function(sightings) {
//   console.log(sightings);
//   var row = tbody.append("tr");
//   Object.entries(sightings).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the UFO sightings object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
