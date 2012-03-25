/**********************************************************
********************** ImgReplacer ************************

Fork on GitHub:
		https://github.com/iliasiovis/ImgReplacer/

CC 2012 - Ilias Iovis | iliasiovis.com
***********************************************************
**********************************************************/


(function( $ ){
$.fn.imgreplacer = function(/*options*/) {

	//Defaults
	/*var defaults = {
	};

	//inherit from provided configuration
	var options = $.extend(defaults, options);*/
	
	var viewportWidth = $(window).width();
	var filePath;
	
	this.each(function(){
	
	if(viewportWidth <= 480){
		filePath = $(this).attr('data-480');
		
	} else if (viewportWidth >=481 && viewportWidth <= 767) {
		filePath = $(this).attr('data-767');
	} else {
		filePath = $(this).attr('data-fallback');
	}
		
		var className = $(this).attr('class');
		$(this).replaceWith("<img class='"+className+"' src='"+filePath+"' />");
	});
};
})( jQuery );