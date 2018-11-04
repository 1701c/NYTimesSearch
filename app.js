var term = '';
var numRecords;
var startYear;
var endYear;


$(document).ready(function () {
  $('#searchButton').click(function () {
    term = $('#searchTerm').val();
    numRecords = $('#records').val();
    startYear = $('#startYear').val();
    endYear = $('#endYear').val();
    
    console.log(term + ' ' + numRecords + ' ' + startYear + ' ' + endYear);

    // call to backend search function goes here
  })

  $('#clearButton').click(function () {

    // code to clear searchboxes goes here

  })
});