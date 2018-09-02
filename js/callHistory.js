// LJFD Scripted Functions //

// Activate Navigation Bar Control //
// ------------------------------- //
$(document).ready(function()
  {
  // ----------------------- //
  // Load Call History Table //
  // ----------------------- //
     var tEMS = 0;
     var tFire = 0;
     var calltotal = 0;
     var displayYr = 0;

     console.log("callHistory Code");
//      $('#ch-current').toggle();
//      $('#ch-previous').toggle();

     $.getJSON('data/call-history.txt',
  		function(data)
  		{
        console.log("Year " + displayYr + ": " + data[displayYr].Year);
  			$('#callHistory').html('<div class="row">' +
          '<span class="col-xs-3 chCell chHead call-date">' + data[displayYr].Year + '</span>' +
  				'<span class="col-xs-3 chCell chHead ems-calls">EMS</span>' +
  				'<span class="col-xs-3 chCell chHead fire-calls">FIRE</span>' +
  				'<span class="col-xs-3 chCell chHead call-total">TOTAL</span>' +
          '</div>');

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

  					$('#callHistory').append('<div class="row">' +
              '<span class="col-xs-3 chCell call-date">' + calldata.Month + '</span>' +
  						'<span class="col-xs-3 chCell ems-calls">' + calldata.EMS + '</span>' +
  						'<span class="col-xs-3 chCell fire-calls">' + calldata.Fire + '</span>' +
  						'<span class="col-xs-3 chCell call-total">' + calltotal + '</span>' +
              '</div>');
  				});

        calltotal = tEMS + tFire;
        $('#callHistory').append('<div class="row">' +
          '<span class="col-xs-3 chCell chHead call-date">Total</span>' +
  			  '<span class="col-xs-3 chCell chHead ems-calls">' + tEMS + '</span>' +
  			  '<span class="col-xs-3 chCell chHead fire-calls">' + tFire + '</span>' +
  			  '<span class="col-xs-3 chCell chHead call-total">' + calltotal + '</span>' +
          '</div>');
  		});
  }
);
