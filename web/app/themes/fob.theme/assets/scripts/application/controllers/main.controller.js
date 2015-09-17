// app.js
(function() {
    'use strict';

    angular
        .module('fobapp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$http'];

    function mainCtrl($http) {

    	/* jshint validthis: true */
    	var model = this;

    	$http.get('wp-json/posts?type[]=fiche')
    		
    		.success(function(data) {
    			model.fiches = data;
    			}
    		)
    		
    		.error(function(data, status) {
				  console.error('Repos error', status, data);
					}
				);
    }

})();