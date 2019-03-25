$(function () {// When the document is ready I execute the function 
	var imgs = jQuery('.carousel-inner .carousel-item'); // Je récupère un array des éléments ".slider" situé dans "#banner" que je stock dans la variable imgs
	//console.log(imgs);
	//var imgAmount = imgs.length; 
	// console.log(imgAmount);

	 // j'applique à ma variable de nouvelles propriétés css grâce à ".css" -> .hide() me permet d'appliquer directement "display: none" sur tous les éléments de l'objet imgs. .get(0) me permet de cibler le 1er élément de mon objet. .show() applique display inline à tous les éléments de mon objet imgs.
	//$(imgs.css('position', 'absolute').hide());

	// window.setInterval(swapImages, 6000);
	var count = $(".carousel-inner").children().length;
	console.log(count);
        var random = Math.floor(Math.random()*count+1);
        $('.carousel-inner :nth-child(' + random + ')').addClass(
            'active'
        );
        console.log($('.carousel-inner :nth-child(' + random + ')').addClass(
            'active'
        ));
	// function swapImages() {
		
	//     var currentImg = $('.carousel-item').addClass('active');

	//     var $nextImg = $('.carousel-item').removeClass('active').eq(Math.floor(Math.random() * $('.carousel-item').removeClass('active').length));
	//         speed = 1500;
	//     // animation speed should be the same for both images so we have a smooth change
	//     currentImg.fadeOut(speed);
	//     $nextImg.fadeIn(speed);
	// }
});
