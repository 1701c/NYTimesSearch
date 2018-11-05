var term = '';
var numRecords;
var startYear;
var endYear;

var timesAPI = {
  requestData: function (term, numRecords, startYear, endYear) {
    console.log('requesting data');
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({'api-key': "d7702ba6246c41f19ef23e6ed45b0c05"});
    $.ajax({
      url: url,
      method: "GET"
    }) .then(function(response) {
      console.log(response);
      for (i = 0; i < response.length; i++)
        titleDiv = $("<h3>");
        urlDiv = $("<p>");
        authorDiv = $("<p>");
        yearDiv = $("<p>");
        // urlDiv.append(response.docs[i].web_url)
        console.log(response.docs[i]);
  }).fail(function(err) {
    throw err;
    });
  }
}

$(document).ready(function () {
  $('#searchButton').click(function () {
    term = $('#searchTerm').val();
    numRecords = $('#records').val();
    startYear = $('#startYear').val();
    endYear = $('#endYear').val();
    document.getElementById("form").reset();
    
    console.log(term + ' ' + numRecords + ' ' + startYear + ' ' + endYear);

    timesAPI.requestData(term, numRecords, startYear, endYear);
  })

  $('#clearButton').click(function () {
    console.log('click');
    $("#resultsBox").empty();
  })
});