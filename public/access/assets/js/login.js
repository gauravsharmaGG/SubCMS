/*
 * MoonCake v1.1 - Login JS
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
	
	var LoginScreen = function() { }

	LoginScreen.prototype = {

		init: function() {
			this.transitionFn = this['_fade'];

			if(this.support( 'Transform', 'TransformOrigin', 'Transition' )) {
				$( '#login-inner' )
					.addClass('rotating')
					.css( 'height', $( '#login-inner .login-inner-form.active:first' ).outerHeight() )
					.find('.login-inner-form').each($.proxy(function(i, form) {
						this._addRotation( form, parseInt($(form).data('angle'), 10) );
					}, this));

				this.transitionFn = this['_rotate'];
			}

			$( '#login-buttons .btn' ).each($.proxy(function(i, btn) {
				var target = $($(btn).data( 'target' ));

				if( target && target.length ) {
					$(btn).toggleClass('disabled', $(target).is('.active'))
						.on('click', $.proxy(this._clickHandler, this));
				}
			}, this));

			return this;
		}, 

		_clickHandler: function(e) {
			var btn = $(e.currentTarget), 
				target = $(btn.data( 'target' ));

			if( !btn.is('.disabled') ) {
				this.transitionFn.call(this, target);
				$( '#login-buttons .btn' ).not(btn.addClass('disabled')).removeClass('disabled');
			}

			e.preventDefault();
		}, 

		_rotate: function(target) {
			$( '#login-inner' )
				.addClass( 'active' )
				.find( '.login-inner-form' )
				.removeClass( 'active' );

			if((h = target.addClass( 'active' ).outerHeight()) !== $( '#login-inner' ).height()) {
				$( '#login-inner' ).css({ height: h });
			}

			this._addRotation( '#login-circle', -parseInt(target.data('angle'), 10) );
		}, 

		_fade: function(target) {
			$( '.login-inner-form.active' ).fadeOut( 'normal', function() {
				target.addClass( 'active' ).fadeIn();
				$(this).removeClass( 'active' );
			});
		},  

		_addRotation: function( el, deg ) {
			var r = 'rotate(' + deg + 'deg)';
			$(el).css({ '-webkit-transform': r, '-moz-transform': r, '-ms-transform': r, '-o-transform': r, 'transform': r });
		}, 

		support: function() {
			var vendorPrefixes = "O Ms Webkit Moz".split( ' ' ),	
				i = vendorPrefixes.length, support = true, 
				divStyle = document.createElement('div').style;

			while( i-- ) {
				for(var a = 0, support = true; a < arguments.length; a++) {
					support = (vendorPrefixes[ i ] + arguments[ a ] in divStyle);
				}

				if( support ) return true;
			}

			return false;
		}
	};

	$.loginScreen = new LoginScreen();

	$( document ).ready( function( e ) {

		$.loginScreen.init();

		// Style checkboxes and radios
		$.fn.uniform && $(':radio.uniform, :checkbox.uniform').uniform();

		// IE Placeholder
		$.fn.placeholder && $('[placeholder]').placeholder();
	});

	
}) (jQuery, window, document);
