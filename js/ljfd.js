// LJFD Scripted Functions //

// Activate Navigation Bar Control //
// ------------------------------- //
$(document).ready(function()
  {
// ------------------------------------------ //
// Load Header for Medium and Large View Port //
// ------------------------------------------ //
     $.get('include/main-header.html', '',
	   function(data)
	   {
	     $('span#main-header').html(data);
	   }
	   , 'html'
     );

// -------------------- //
// Load Main Navigation //
// -------------------- //
     $.get('include/main-nav.html', '',
	   function(data)
	   {
	     $('span#main-nav').html(data);
	   }
	   , 'html'
     );

// -------------------- //
// Load Main Footer //
// -------------------- //
     $.get('include/main-footer.html', '',
	   function(data)
	   {
	     $('span#main-footer').html(data);
	   }
	   , 'html'
     );
  
// ------------------------------------------ //
// Slider Configuration for Apparatus Gallery //
// ------------------------------------------ //
     $('.appGallery').bxSlider(
       {
         minSlides: 2,
  	     maxSlides: 2,
  	     slideWidth: 800,
  	     slideMargin: 30,
	     captions: true,
  	     auto: true,
  	     autoControls: true,
  	     pause: 4000
       }
     );
  }
);

// ----------------------- //
// Load Call History Table //
// ----------------------- //
function displayCallHistory(displayYr)
{
   var tEMS = 0;
   var tFire = 0;
   var calltotal = 0;

   $('#ch-current').toggle();
   $('#ch-previous').toggle();

   $.getJSON('data/call-history.txt', 
		function(data)
		{
			$('#ch-table').html('<tr><th class="call-date">' + data[displayYr].Year + '</th>' +
				'<th class="ems-calls">EMS</th>' +
				'<th class="fire-calls">FIRE</th>' +
				'<th class="call-total">TOTAL</th></tr>');

			$.each(data[displayYr].Calls, 
				function(row, calldata)
				{
					if (calldata.EMS == '-')
					{
						calldata.EMS = '0'
					};
					tEMS = tEMS + parseInt(calldata.EMS);
					if (calldata.Fire == '-')
					{
						calldata.Fire = '0'
					};
					tFire = tFire + parseInt(calldata.Fire);
					calltotal = parseInt(calldata.EMS) + parseInt(calldata.Fire);

					$('#ch-table').append('<tr><td class="call-date">' + calldata.Month + '</td>' +
						'<td class="ems-calls">' + calldata.EMS + '</td>' +
						'<td class="fire-calls">' + calldata.Fire + '</td>' +
						'<td class="call-total">' + calltotal + '</td></tr>');
				});
			
            calltotal = tEMS + tFire;
            $('#ch-table').append('<tr><th class="call-date">Total</th>' +
				'<th class="ems-calls">' + tEMS + '</th>' +
				'<th class="fire-calls">' + tFire + '</th>' +
				'<th class="call-total">' + calltotal + '</th></tr>');
		});
}
