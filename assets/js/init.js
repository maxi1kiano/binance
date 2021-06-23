$(function() {
    // -- restart progressbar every 60s
    setInterval(function() {         
      $('#in').removeClass('progress-bar-in').animate({'nothing':null}, 1, function () {
        $(this).addClass('progress-bar-in');
      }); 
     }, 60000);  
  });