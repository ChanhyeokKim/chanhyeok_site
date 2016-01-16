// JavaScript Document
/*
	var section_height = '100%' - $('#footer').css('height');
	$('#section').css('height', section_height);
	var h1_height = $('#section h1').css('height') / 2;
	var section_h1_top =(section_height / 2) - h1_height ;
	$('#section h1').css('top', section_h1_top);*/
var slider_index = 0;
var slider_ud_index = 0;
var slider_check = 0;
var menu_on_off = 1;

function getWidth(object)
{
	return parseInt($(object).css('width'));
}

function getHeight(object)
{
	return parseInt($(object).css('height'));
}

$(window).load(function() {
	$('#load_pad').delay(200).fadeOut(300);
	$('.contents:nth-child(1) .visiber').html('MAIN');
	$('.contents:nth-child(2) .visiber').html('Lorem Ipsum');
	$('.contents:nth-child(3) .visiber').html('MUSICIAN');
	$('.contents:nth-child(4) .visiber').html('FAVORITE<br/>PROGRAMING LANGUAGE');
	$('#on_off > #in').html('MENU : OFF');
});
	
$(document).ready(function() {
	
	/* durational section_height */
	
	//$('#section').css('height', 'calc(100% - 80px)');

	/* slider keyin */

	$('body').keydown(function (event) {
		var nowTime = new Date().getTime();
		while(1){
			if(nowTime - slider_check > 400)
			{	
				if(event.keyCode == 39)
				{
					if(slider_index == 2) break;
					slider_index++;
				}	
				if(event.keyCode == 37)
				{
					if(slider_index == 0) break;
					slider_index--;
				}
				if(slider_index == 1)
				{
					if(event.keyCode == 40)
					{
						if(slider_ud_index == 2) break;
						slider_ud_index++;
					}
					if(event.keyCode == 38)
					{
						if(slider_ud_index == 0) break;
						slider_ud_index--;
					}
				}
				else if(slider_index != 1)
				{
					if(event.keyCode == 40) break;
					if(event.keyCode == 38) break;
				}
				/* Virtual midia Query */
				if(getWidth('body') < 750) var gotoX = slider_index * 750;
				else var gotoX = slider_index * getWidth('body');
				
				$('#slider').animate({
					marginLeft: -gotoX
				},650);
			
				if(slider_index == 1)
				{
					var gotoY = slider_ud_index * getHeight('#slider');
					
					$('#slider_ud').animate({
						marginTop: -gotoY
					},600);
				}
				slider_check = new Date().getTime();
			}break;
		}
	});
	
	/* output day */

	setInterval(function () {
		var d = new Date();
		var hour = d.getHours();
		if(hour < 10) hour = '0' + hour;
		var minute = d.getMinutes();
		if(minute < 10) minute = '0' + minute;
		var sec = d.getSeconds();
		if(sec < 10) sec = '0' + sec;
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		if(month < 10) month = '0' + month;
		var date = d.getDate();
		if(date < 10) date = '0' + date;
		var day = d.getDay();
		switch(day)
		{
			case 0 : day = 'Sun'; break;
			case 1 : day = 'Mon'; break;
			case 2 : day = 'Tue'; break;
			case 3 : day = 'Wed'; break;
			case 4 : day = 'Thu'; break;
			case 5 : day = 'Fri'; break;
			case 6 : day = 'Sat';
		}
		$('#clock > #in').html(year + '-' + month + '-' + date + '(' + day + ')' + '<br />' + hour + ':' + minute + ':' + sec);
	}, 1000);
	
	/* color filter */

	$('body').keydown(function (event) {
		switch(slider_index)
		{
			case 0: $('#head_filter,#foot_filter').css('background-color', 'rgba(0,0,0,0)'); break;
			case 1:
			switch(slider_ud_index)
			{
				case 0: $('#head_filter,#foot_filter').css('background-color', 'rgba(0,255,51,0.4)'); break;
				case 1: $('#head_filter,#foot_filter').css('background-color', 'rgba(0,0,0,0.4)'); break;
				case 2: $('#head_filter,#foot_filter').css('background-color', 'rgba(153,255,0,0.4)'); break;
			} break;
			case 2: $('#head_filter,#foot_filter').css('background-color', 'rgba(255,153,51,0.4)'); break;
		}
	});
	
	
	/* durational menu */
	
	var rotate = 0;
	var cancel = false;
	switch(this_index)
	{
		case 1: rotate = 0; break;
		case 2: rotate = 90; break;
		case 3: rotate = 180; break;
		case 4: rotate = 270;
	}
	var rotate_index = 0;
	var menuOn = 0;	
	$('#cover').click( function _return() {
		rotate_index = this_index;
		rotate = (this_index - 1) * 90;
		cancel = true;
		$('#menu').delay(300).css({
			'-webkit-transform':'rotate(' + rotate + 'deg)',
			'-ms-transform':'rotate(' + rotate + 'deg)',
			'-moz-transform':'rotate(' + rotate + 'deg)',
			'-o-transform':'rotate(' + rotate + 'deg)',
			'transform':'rotate(' + rotate + 'deg)'
		});
	});
	
	setInterval(function(){
		var now = new Date().getTime();
		switch(rotate%360)
		{
			case 0: rotate_index = 1; break;
			case 90: rotate_index = 2; break;
			case 180: rotate_index = 3; break;
			case 270: rotate_index = 4; break;
			case -90: rotate_index = 4; break;
			case -180: rotate_index = 3; break;
			case -270: rotate_index = 2;
		}
		if(now - menuOn > 1000 || cancel)
		{
			if(cancel) cancel = false;
			$('#menu').css({'opacity':'0','margin-top':'-150px'});
			$('#cover').css({'opacity':'0','display':'none'});
			if(rotate_index != this_index)
			{
				if(this_index == 1)
				{
					switch(rotate_index)
					{
						case 1: $(location).attr('href',"index.html"); break;
						case 2: $(location).attr('href',"html/programing.html"); break;
						case 3: $(location).attr('href',"html/music.html"); break;
						case 4: $(location).attr('href',"html/Lorem Ipsum.html"); break;
					}
				}
				else if(this_index != 1)
				{
					switch(rotate_index)
					{
						case 1: $(location).attr('href',"../index.html"); break;
						case 2: $(location).attr('href',"../html/programing.html"); break;
						case 3: $(location).attr('href',"../html/music.html"); break;
						case 4: $(location).attr('href',"../html/Lorem Ipsum.html"); break;
					}
				}
			}
		}
	}, 100);
	
	$(window).bind('mousewheel', function (e) {
		var e = e || window.event
		if(menu_on_off)
		{
			console.log('d')
			menuOn = new Date().getTime();
			$('#menu').css({'opacity':'1','margin-top':'0px'});
			$('#cover').css({'display':'block','opacity':'1'});
			if($('#menu').css('opacity') == 1)
			{
				if(e.originalEvent.wheelDelta > 0) rotate += 90;
				else if(e.originalEvent.wheelDelta < 0) rotate -= 90;
			}
			$('#menu').delay(300).css({
				'-webkit-transform':'rotate(' + rotate + 'deg)',
				'-ms-transform':'rotate(' + rotate + 'deg)',
				'-moz-transform':'rotate(' + rotate + 'deg)',
				'-o-transform':'rotate(' + rotate + 'deg)',
				'transform':'rotate(' + rotate + 'deg)'
			});
		}
	});

	/* Visible Guide Message */
	
	var onOff = 1;
	
	$('#guide,#cancel').click( function(){
		if(!onOff)
		{
			$('#popMessage').animate({
				opacity: 0
			},100);
			$('#cancel').css('display','none');
			onOff = 1;
		}
		else
		{
			$('#popMessage').animate({
				opacity: 1,
			},300);
			$('#cancel').css('display','block');
			onOff = 0;
		}
	});

});
