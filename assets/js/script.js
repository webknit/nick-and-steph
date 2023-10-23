/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/

// JS EXAMPLE

var Base = Base || {};

Base.functionName = function()
{	
	var navBtn = $('.openNav');
	var nav = $('nav');

	function init()
	{
		navBtn.click(openMenu);
		$("img.lazy").lazyload();
	}

	function openMenu()
	{
		nav.slideToggle();
	}

	init();
};

// ON DOC READY
$(function()
{	
	new Base.functionName();
	
});

