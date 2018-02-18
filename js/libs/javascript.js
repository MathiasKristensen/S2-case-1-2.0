window.onscroll = function() {myFunction()};

function myFunction() 
{
    
    for(i=0; i<2000;i++ )
        {
              document.getElementById("yarn").style.transform = "rotate(5deg)";         
        }
    
    if (document.body.scrollLeft +1) 
    {
        console.log(scrollY);
        
        //document.getElementById("yarn").style.transform = "rotate(1deg)";
    }
    
    var vid = document.getElementById("dvideo");
    
    if (scrollY > 426)
        {
            vid.muted = true;
        }
    else
        {
            vid.muted = false;
        }
}


// -------------JAVASCRIPT TIL DOTS --------------- // 
 

;( function( window ) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function DotNav( el, options ) {
		this.nav = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	DotNav.prototype.options = {};

	DotNav.prototype._init = function() {
		// special case "dotstyle-hop"
		var hop = this.nav.parentNode.className.indexOf( 'dotstyle-hop' ) !== -1;

		var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;

		dots.forEach( function( dot, idx ) {
			dot.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				if( idx !== current ) {
					dots[ current ].className = '';

					// special case
					if( hop && idx < current ) {
						dot.className += ' current-from-right';
					}

					setTimeout( function() {
						dot.className += ' current';
						current = idx;
						if( typeof self.options.callback === 'function' ) {
							self.options.callback( current );
						}
					}, 25 );						
				}
			} );
		} );
	}

	// add to global namespace
	window.DotNav = DotNav;

})( window );


//------------------ JAVASCRIPT DOTS SLUT ---------------------//


// ------------------  Dots scroll ------------------------//


