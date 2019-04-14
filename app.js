// from data.js
let tableData = data;

// YOUR CODE HERE!
//use d3 and start with a VAR 
let tbody = d3.select("tbody");


//now we need to create a function to build a table 
function buildTable(data){
    //1st step is to clear out existing data with an empty data cell 
    tbody.html("");

    data.forEach((dataRow) => {
        console.table(dataRow);
        //now that we have the loop, we want to append it to a table row ("tr")
        let row = tbody.append("tr");

        console.log(Object.values(dataRow));

        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });


    })
}

//Need to have a function that will be called when the button is clicked. 
//Call the variable above
function handleClick(){ /// <== Function declaration 
    d3.event.preventDefault();

    let data = d3.select('#datetime').propertyy('value');
    let filterData = tableData;

    //Check if a date was entered. Filter the data using that date. 
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date); 
    }
//now rebuild the table witht the filtered data 
    buildTable(filterData);
}

buildTable(tableData);

//target the event //need to look for the filter-btn 
//have to target the event within the d3
d3.SelectAll('#filter-btn').on('click', handleClick)
