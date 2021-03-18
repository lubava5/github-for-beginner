

//credit section .polzunok-1 horiz
$(".polzunok-1").slider({
	min: 1,
	max: 3,
	value: 1,
	range: "min",
	animate: "fast",
 	slide : function(event, ui) {    
 		$(".polzunok-container-1 .ui-slider .ui-slider-handle").text( ui.value);        
 }   
});

$(".polzunok-container-1 .ui-slider .ui-slider-handle").text($(".polzunok-1").slider('value'));


var opt = $(".polzunok-1").data().uiSlider.options;
min = opt.min,
raz = opt.max - min;
for (var i = 0; i <= raz; i++) {
	$(".polzunok-1").append($('<b>'+(min++)+'</b>').css('left',(i/raz*100)+'%'));
};
////.polzunok-2 vertical
$(".polzunok-2").slider({
	orientation:'vertical',
	min: 1,
	max: 3,
	value: 3,
	range: "max",
	animate: "fast",
 	slide : function(event, ui) {
		console.log(ui.value);
		 if(ui.value==1){
			$(".polzunok-container-2-vertical .ui-slider .ui-slider-handle").text('3');
		 }
		 if(ui.value==2){
		 	$(".polzunok-container-2-vertical .ui-slider .ui-slider-handle").text('2');
		 }
		 if(ui.value==3){
		 	$(".polzunok-container-2-vertical .ui-slider .ui-slider-handle").text('1');
		 }
 		//$(".polzunok-container-2-horiz .ui-slider .ui-slider-handle").text( ui.value);        
 }   
});

if($(".polzunok-2").slider("value" )==1){
	$(".polzunok-container-2-vertical .ui-slider .ui-slider-handle").text('3');
 }
 if($(".polzunok-2").slider("value" )==2){
	 $(".polzunok-container-2-vertical .ui-slider .ui-slider-handle").text('2');
 }
 if($(".polzunok-2").slider("value" )==3){
	 $(".polzunok-container-2-vertical .ui-slider .ui-slider-handle").text('1');
 }

 var opt = $(".polzunok-2").data().uiSlider.options;
 min = opt.min,
 raz = opt.max - min;
  for (var i = 0; i <= raz; i++) {
  	$(".polzunok-2").append($('<b>'+(opt.max--)+'</b>').css('bottom',(i/raz*100)+'%'));
  };


///
	$("#range" ).slider({
		range: 'min',
		min: 500000,
		max: 10000000,
		value: 3000000,
		step:500000,
		
		slide: function( event, ui ){
			//$('#rangeto').val(ui.value);
			$('#rangeto').val(new Intl.NumberFormat('ru-RU').format(ui.value));

			$('.form-rezult__rub').html((new Intl.NumberFormat('ru-RU').format(Math.round(ui.value/($( "#range2" ).slider( "value" )))))+' '+'<span class="fa fa-rub" aria-hidden="true"></span>')
		},	
	});
 	//$('#rangeto').val($( "#range" ).slider( "value" ));
	 $('#rangeto').val(new Intl.NumberFormat('ru-RU').format(($( "#range" ).slider( "value" ))));

/////
	 
	 $("#range2" ).slider({ 
		range: 'min',
		min: 1,
		max: 12,
		value: 3,
		step:1,
	
		slide: function( event, ui ){
			//$('#rangeto2').val(ui.value);
			$('#rangeto2').val(new Intl.NumberFormat('ru-RU').format(ui.value));

			$('.form-rezult__rub').html((new Intl.NumberFormat('ru-RU').format(Math.round(($( "#range" ).slider( "value" ))/ui.value)))+' '+'<span class="fa fa-rub" aria-hidden="true"></span>')
		},	
	});
 	//$('#rangeto2').val($( "#range" ).slider( "value" ));
	 $('#rangeto2').val(new Intl.NumberFormat('ru-RU').format(($( "#range2" ).slider( "value" ))));
	

	 $('.form-rezult__rub').html((new Intl.NumberFormat('ru-RU').format(Math.round(($( "#range" ).slider( "value" ))/($( "#range2" ).slider( "value" )))))+' '+'<i class="fa fa-rub" aria-hidden="true"></i>')

	 ///

	 




	 



//BURGER
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__col--align--right').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//SPOLLER
	const closeEveryItem=(container)=>{
		const unitContainer=container.find(".main__btn");
		unitContainer.removeClass("main__btn2");
	
	};
	const opacity=()=>{
		const unitContainer=$(".main__unit");
		//console.log(itemContainer)
		unitContainer.removeClass("main__active");
	
	};

	
	$('.main__btn').click(e=>{
		e.preventDefault();
		const $this=$(e.currentTarget);
		const target=$this.attr("data-item-id");
		//console.log(target);
		const reqBlock=$(`[data-main-id=${target}]`);
		//console.log(reqBlock);
		const container=$this.closest('.main__list');
		const elemButton=$this.closest('.main__btn');
		//const item=$(`[data-section-id=${target}]`);
		
	const tr=$this;

		if(elemButton.hasClass("main__btn2")){
			closeEveryItem(container);
			elemButton.addClass('main__btn2');

			opacity();
			reqBlock.addClass('main__active');

	
		}else{
			closeEveryItem(container);
			elemButton.addClass('main__btn2');

			opacity();
      reqBlock.addClass('main__active');
	
		}
	});

	//const unitContainer=$(".main__unit");
	
		const unitContainer=document.querySelectorAll(".main__unit");
		//console.log(unitContainer.length);
		//console.log(getComputedStyle(unitContainer[2]).height);
		
		
		let arr=[];
		unitContainer.forEach(function(item) {
			itemHeight=getComputedStyle(item);
			//console.log(item)
			 
			//console.log(parseFloat(itemHeight.height));
			 arr.push(parseFloat(itemHeight.height));
			 //console.log(arr);
			 //console.log(Math.max.apply(Math,arr));
			 //return h;
			
			 //console.log(unitContainer[2].style.height);
			 
		//});
	
		//item.style.minHeight=`${maxHeight}px`;
	
	//	unitHeight=(unitContainer.height());
		//console.log(unitHeight);
		
		})
		maxHeight=Math.max.apply(Math,arr);
		//console.log(maxHeight);
		unitContainer.forEach(function(item) {
			item.style.minHeight=`${maxHeight}px`;
		})

/////PLAYER

  let player;
	const playerContainer=$('.player');

	let eventsInit=()=>{
		$('.player__splash').click(e=>{
			
			$('.player__splash').css({
				'display':'none'
			});
			player.playVideo();
		})
	};

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
		//	height: heightBody(),
	//height: 660,
   // width: 320,
      videoId: 'wdeXiqMB7AI',
      events: {
        //'onReady': onPlayerReady,
       // 'onStateChange': onPlayerStateChange
      },
			playerVars: {
				controls: 1,
				disablekb: 0,
				showinfo: 0,
				rel: 0,
				autoplay: 0,
				modestbranding: 0
			}
    });
  }

	eventsInit();

	///UP
	$('.goto').click(function() {
		var el=$(this).attr('href').replace('#','');
		var offset=0;
	$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});
	return false;
});
	
 
 