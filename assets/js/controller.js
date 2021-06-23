var app = angular.module('App', []);
app.controller("AppCtrl", function($scope, $http, $interval) {

	var req = {
	  method: 'GET',		
	  headers : { 'Accept': 'application/json' },
	  url: 'https://api.binance.com/api/v1/klines',
	  params: { symbol: 'BTCUSDT', interval: '1m', limit: 1 }
	}	
    
	$scope.save = function () {
	  $http(req)
	  .then(
		   function successCallback(response) {
		     console.log(new Date().toLocaleString());		     	    
	         $scope.price = response.data[0][1];	      
		   }, 
		   function errorCallback(response) {
		     console.log('ERROR');
		     console.log(response);	        
	  });		 
    }
  
    // -- interval 60s
    $scope.save();
    $interval(function(){ $scope.save(); }, 60000);
});

// -- [DEBUG]
//alert("widthxheight=" + screen.width + "x" + screen.height);
//console.log("widthxheight=" + window.innerWidth + "X" + window.innerHeight);