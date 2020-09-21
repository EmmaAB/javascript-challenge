// from data.js
var sightings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Use d3 to update each cell's text with
// // sightings values (datetime, city, state, country, shape, duration, comments)

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
