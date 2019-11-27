// from data.js
var tableData = data;

// YOUR CODE HERE!

function display(data){
    
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach(function(info) {
        var row = tbody.append("tr");
        Object.entries(info).forEach(function([key, value]) {
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
display(tableData);

var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    display(filteredData);
});
