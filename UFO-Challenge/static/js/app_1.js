// Module 11 follow along online material
// s.11.24 building storyboard

// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select("tbody");

// create the dynamic table
function buildTable(data) {
    // first, to clear existing data
    tbody.html("");
    // loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // create a variable that append a row to the table body
        let row = tbody.append("tr");
        // loop through each field in the datarow
        Object.values(dataRow).forEach((val) => {
            // create a variable to append row to html table
            let cell = row.append("td");
            // add the text value of the object to the cell
            cell.text(val);
            }
        );
    });
 };


// add filter 
function handleClick() {
    // select the first value that matche'#datetime' and sotre its value to variable date
    let date = d3.select("#datetime").property("value");
    // add default filter and save it to a new variable
    let filteredData = tableData;
    // check if date is present,
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        
        // rebuild the table using the filtered data
        buildTable(filteredData);
    };   
};

// telling d3 to execute handleClick() when button with id=filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);
// create a basic table filled with row upon row of unfiltered data
buildTable(tableData);

