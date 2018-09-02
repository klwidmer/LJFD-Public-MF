// LJFD Scripted Functions //

// Activate Navigation Bar Control //
// ------------------------------- //
$(document).ready(function()
  {
// ---------------------------------------------------------------------------- //
// Get Safety Sheets from JSON file [safety-sheets.txt] and Display Information //
// ---------------------------------------------------------------------------- //
	var safetySheet;

	$.getJSON('data/safety-sheets.txt',
		function(data)
		{
				$('#indoorHeader').html('<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h4>INDOOR SAFETY</h4></div></div>');
				$.each(data.indoors, function(row, value)
					{
						if (value.display == 'Y' || value.display == 'y') {displayIndoor(value)}
						if (value.display == 'F' || value.display == 'f') {displayFeatured(value)}
					});
				$('#outdoorHeader').html('<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h4>OUTDOOR SAFETY</h4></div></div>');
				$.each(data.outdoors, function(row, value)
					{
						if (value.display == 'Y' || value.display == 'y') {displayOutdoor(value)}
						if (value.display == 'F' || value.display == 'f') {displayFeatured(value)}
					});
		});
});

function displayIndoor(dsdata)
{
	$('#indoorSheets').append('<div class="col-xs12 col-sm-6 col-md-6 col-lg-6">' +
								'<div class="card">' +
								'<div class="card-body">' +
								'<h4><a href="' + dsdata.url + '" target="_blank" class="alert-link">' + dsdata.title + '</a></h4>' +
								'<p class="card-text">' + dsdata.description + '</p>' +
								'</div></div></div>')
}

function displayOutdoor(dsdata)
{
	$('#outdoorSheets').append('<div class="col-xs12 col-sm-6 col-md-6 col-lg-6">' +
								'<div class="card">' +
								'<div class="card-body">' +
								'<h4><a href="' + dsdata.url + '" target="_blank" class="alert-link">' + dsdata.title + '</a></h4>' +
								'<p class="card-text">' + dsdata.description + '</p>' +
								'</div></div></div>')
}

function displayFeatured(dsdata)
{
	$('#featuredSheet').html('<div class="row">' +
								'<div class="col-xs12 col-sm-12 col-md-12 col-lg-12 alert alert-dark">' +
								'<div class="card">' +
								'<div class="card-body">' +
								'<h3><a href="' + dsdata.url + '" target="_blank" class="alert-link">' + dsdata.title + '</a></h3>' +
								'<p class="card-text">' + dsdata.description + '</p>' +
								'</div></div></div></div>')
}
