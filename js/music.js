// JavaScript Document

const this_index = 3;
var status = '';
var v_margin = 0;
var vv_margin = 15;
var box_margin = 0;
$(window).load(function main() {
	
	$('#load_pad').delay(200).fadeOut(300);
	status = 'MUSICIAN';
	$('#status > #inner').html(status);

});

	
$(document).ready(function(e) {
	
	setInterval(function(){
		
		var amount = parseInt(getWidth('.album_list') / 200);
		var over = getWidth('.album_list') % 200;
		var cont_width = over / amount;
		$('.album_container').css({
			'width': (cont_width + 200 - 1) + 'px'
		});
	}, 300);
	
	$('.album_content').hover(function(){
		menu_on_off = 0;
	},
	function(){
		menu_on_off = 1;
	});
	
	$('.album_container:nth-child(1) > #album').css({
		'background':'url(../Resource/image/music/album/leejuk/고독의의미.jpg)',
		'background-size':'cover'
	});
	
	$('.album_container:nth-child(2) > #album').css({
		'background':'url(../Resource/image/music/album/leejuk/2juk.jpg)',
		'background-size':'cover'
	});
	
	$('.album_container:nth-child(3) > #album').css({
		'background':'url(../Resource/image/music/album/leejuk/나무로만든노래.jpg)',
		'background-size':'cover'
	});
	
	$('.album_container:nth-child(4) > #album').css({
		'background':'url(../Resource/image/music/album/leejuk/사랑.jpg)',
		'background-size':'cover'
	});
	
	$('.album_container:nth-child(5) > #album').css({
		'background':'url(../Resource/image/music/album/maroon5/The_B-Side_Collection.jpg)',
		'background-size':'cover'
	});
	
	$('.album_container:nth-child(6) > #album').css({
		'background':'url(../Resource/image/music/album/maroon5/Maroon5_Overexposed.jpg)',
		'background-size':'cover'
	});
	
	$('.album_container:nth-child(7) > #album').css({
		'background':'url(../Resource/image/music/album/maroon5/Songs_About_Jane.jpg)',
		'background-size':'cover'
	});
	
	$('.album_container:nth-child(8) > #album').css({
		'background':'url(../Resource/image/music/album/maroon5/Call_And_Response_The_Remix_Album.jpg)',
		'background-size':'cover'
	});
	
	$('.album_container:nth-child(9) > #album').css({ 
		'background':'url(../Resource/image/music/album/maroon5/Hands%20All%20Over.jpg)',
		'background-size':'cover'
	});
	
	$('#top_senser').hover(function(){
		if(box_margin < 0)
		{
			v_margin += vv_margin;
		}
	},function(){
		v_margin = 0;
	});
	$('#bot_senser').hover(function(){
		if(box_margin > -(getHeight('#duration_box') - getHeight('#half_box')))
		{
			v_margin -= vv_margin;
		}
		//alert(getHeight('#duration_box') - getHeight('#half_box'));
	},function(){
		v_margin = 0;
		vv_margin = 15;
	});
	
	setInterval(function(){
		if(box_margin >= -(getHeight('#duration_box') - getHeight('#half_box')) && box_margin <= 0)
		{
			box_margin += v_margin;
			if(v_margin > 0) vv_margin += 5;
			else if(v_margin < 0) vv_margin -= 5;
		}
		if(box_margin <= -(getHeight('#duration_box') - getHeight('#half_box')))
		{
			box_margin = -(getHeight('#duration_box') - getHeight('#half_box'));
			v_margin = 0;
			vv_margin = 15;
		}
		else if(box_margin >= 0)
		{
			box_margin = 0;
			v_margin = 0;
			vv_margin = 15;
		}
		$('#duration_box').css('margin-top',box_margin + 'px');
	},100);
});