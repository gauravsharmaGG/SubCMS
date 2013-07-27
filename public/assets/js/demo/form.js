/*
 * MoonCake v1.1 - Form Demo JS
 *
 * This file is part of MoonCake, an Admin template build for sale at ThemeForest.
 * For questions, suggestions or support request, please mail me at maimairel@yahoo.com
 *
 * Development Started:
 * July 28, 2012
 * Last Update:
 * October 10, 2012
 *
 */

;(function( $, window, document, undefined ) {
			
	var demos = {
	};

	$(window).load(function() { });
	
	$(document).ready(function() {
		
		// When all page resources has finished loading
		
		if($.fn.select2) {
			
			var opts = [
				{}, 
				{ minimumInputLength: 3 }, 
				{ tags: ['Sport', 'Gadget', 'Politics'] }
			];

			$.each(opts, function(i, o) {
				$('.select2-select-0' + i).select2(o);
			});			
		}
		
		if( $.fn.picklist ) {
			
			$( '#picklist-ex' ).picklist({
				addAllLabel: '<i class="icon-caret-right"></i><i class="icon-caret-right"></i>', 
				addLabel: '<i class="icon-caret-right"></i>', 
				removeAllLabel: '<i class="icon-caret-left"></i><i class="icon-caret-left"></i>', 
				removeLabel: '<i class="icon-caret-left"></i>'
			});
		}

		if( $.fn.autocomplete ) {
			var d = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
			$('#autocomplete-ex').autocomplete({ source: d });
		}

		if( $.fn.spinner ) {

			var opts = [
				{},
				{places: 2, step : 0.25},
				{prefix : '$', places: 2, step: 0.1}
			];
		
			$.each(opts, function(i, o) {
				$("#spinner-" + (i + 1)).spinner(o);
			});
		}
	});
	
}) (jQuery, window, document);