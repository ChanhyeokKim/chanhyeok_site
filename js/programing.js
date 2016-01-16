// JavaScript Document
const this_index = 2;
var status = '';
$(window).load(function main() {
	
	$('#load_pad').delay(200).fadeOut(300);
	status = 'PROGRAMING LANGUAGE';
	$('#inner').html(status);
	
});
$(document).ready(function(e) {
	var pro_index;
	for(var i=1; i<4; ++i)
	{
		$('#pro_struc' + i).hover(
		function inner() 
		{
			$(this).css({
				'border':'solid rgba(255,255,255,1) 4px',
				'width':'175px',
				'height':'175px'
			});
		},
		function out() 
		{
			$(this).css({
				'border':'solid rgba(255,255,255,0) 4px',
				'width':'130px',
				'height':'130px'
			});
		});
	}
	$('#pro_struc1').click(function a(){
		pro_index = 0;
	});
	$('#pro_struc2').click(function b(){
		pro_index = 1;
	});
	$('#pro_struc3').click(function c(){
		pro_index = 2;
	});
	$('#pro_struc1,#pro_struc2,#pro_struc3').click(function going(){
		var margins = pro_index * -getHeight('#pro_menu');
		$('#pro_content').animate({
			top: margins
		},400);
	});
	
	$('.content_box').hover(function(){
		menu_on_off = 0;
	},
	function(){
		menu_on_off = 1;
	});
	
});