// LJFD Scripted Functions //

// Activate Navigation Bar Control //
// ------------------------------- //
$(document).ready(function()
  {
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
