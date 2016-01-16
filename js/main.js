// JavaScript Document
const this_index = 1;
var status = '';
$(window).load(function main() {
	
	$('#load_pad').delay(200).fadeOut(300);
	
	switch(slider_index)
	{
		case 0: status = 'WELCOME!'; break;
		case 1: status = 'FAVORITE LANGUAGE'; break;
		case 2: status = 'PROFILE';
	}
	$('#inner').html(status);
	$('body').keydown(function(){
		switch(slider_index)
		{
			case 0: status = 'WELCOME!'; break;
			case 1: status = 'MY FAVORITE LANGUAGE'; break;
			case 2: status = 'PROFILE';
		}
		$('#inner').html(status);
	});
	
	$('#contents_box').hover(function(){
		menu_on_off = 0;
	},
	function(){
		menu_on_off = 1;
	});
});