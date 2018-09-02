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

// ---------------- //
// Load Main Footer //
// ---------------- //
     $.get('include/main-footer.html', '',
	   function(data)
	   {
	     $('span#main-footer').html(data);
	   }
	   , 'html'
     );
  }
);
