function trim (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
var oApp = {
    slider:null,
    containerWidth: null,
    slideWidth:null,
    chooser:null,
    page:$('body').data('page'),
    init: function(){
        var oThis = this;
        oThis.getSizes();
        oThis.setContainerSize();
        oThis.animateBG();
        switch(oThis.page){
            case 'index':
                oThis.initSlider();
            break;
            case "cook":
                var q = document.location.search.slice(3);
                $.getJSON('/search.php',{url:'http://kidcooking.ng.bluemix.net/api/recipe/'+q})
                .done(function(data){
                    var json = JSON.parse(data);
                    var recipe = json[0];
                    var slides = recipe.instructions.split('.');
                    var ingredients = recipe.original_ingredients;
                    var ingredientsList = '';
                    for(i=0;i<ingredients.length;i++){
                        ingredientsList += '<li>';
                        ingredientsList += ingredients[i];
                        ingredientsList += '</li>';
                    }
                    var html = '<div class="slide col-sm-12"><h3>Ingredients:</h3>';
                    html+=ingredientsList;
                    html += '<h4 class="text-primary">Ask your parents if you don\'t know!</h4>';
                    html+='</div>';
                    $('.bxslider').html(html);
                    // nutritions start
                    var expressions = [];
                    expressions[1] = 'happy';
                    expressions[2] = 'sick';
                    expressions[3] = 'slow';
                    expressions[4] = 'angry';
                    expressions[5] = 'happy';
                    
                    var nutritions = recipe.nutritional_values;
                    var nutritionList = '';
                    for(i=1;i<6;i++){
                        nutritionList += '<li>';
                        nutritionList += '<img class="nutrition_icon" src="../img/'+expressions[i]+'_nutrition.png" />';
                        var strAmount = nutritions[i].totalAmount.toString();
                        strAmount = strAmount.slice(0,6);
                        nutritionList += '<span class="nutrition_text">'+strAmount+' '+nutritions[i].unitOfMeasure+' '+nutritions[i].name+'</span>';
                        nutritionList += '</li>';
                    }
                    
                    nutritionList += '<br style="clear:both;" />';
                    nutritionList += '<br style="clear:both;" />';
                    nutritionList += '<div id="health_score"><span id="rating">Health: &nbsp;&nbsp;</span>';
                    nutritionList += '<img class="heart_icon" src="../img/heart_black.png" />';
                    nutritionList += '<img class="heart_icon" src="../img/heart_black.png" />';
                    nutritionList += '<img class="heart_icon" src="../img/heart_black.png" />';
                    nutritionList += '<img class="heart_icon" src="../img/heart_white.png" />';
                    nutritionList += '<img class="heart_icon" src="../img/heart_white.png" />';
                    nutritionList += '<br style="clear:both;" />';
                    nutritionList += '</div>';
                    nutritionList += '<br style="clear:both;" />';
                    
                    $('.bxslider').append('<div class="slide col-sm-12"><h3>Nutrition:</h3>'+nutritionList+'</div>');
// nutritions end
                    for(i=0;i<slides.length;i++){
                        var step = (i+1);
                        var content = trim(slides[i]);
                        if(content!=''){
                            var html = '<div class="slide col-sm-12">';
                            html += '<h1>Step '+step+'</h1>';
                            html += content;
                            html += '<br />';
                            html += '<br />';
                            html += '<img class="hamster" src="img/hamster.png" />';
                            html += '</div>';
                            $('.bxslider').append(html);
                            if(step===1){
                                var html = '<div class="slide col-sm-12">';
                                html += '<h1>Did you know?</h1>';
                                html += 'Ham is full of proteine and that makes you strong!';
                                html += '<br />';
                                html += '<br />';
                                html += '<center>';
                                html += '<img width="200px" src="img/icon_ham.png" />';
                                html += '</center>';
                                html += '</div>';
                                $('.bxslider').append(html);
                            }
                            if(step===2){
                                var html = '<div class="slide col-sm-12">';
                                html += '<h1>Did you know?</h1>';
                                html += 'Sugar is nice and sweet, but eating too much is unhealthy';
                                html += '<br />';
                                html += '<br />';
                                html += '<center>';
                                html += '<img width="200px" style="margin-top:-75px;" src="img/icon_sugar.png" />';
                                html += '</center>';
                                html += '</div>';
                                $('.bxslider').append(html);
                            }
                            if(step===5){
                                var html = '<div class="slide col-sm-12">';
                                html += '<h1>Did you know?</h1>';
                                html += 'Ovens are very hot, better put on your oven gloves!';
                                html += '<br />';
                                html += '<br />';
                                html += '<center>';
                                html += '<img width="200px" style="margin-top:-20px;" src="img/icon_oven.png" />';
                                html += '</center>';
                                html += '</div>';
                                $('.bxslider').append(html);
                            }
                        }
                    }
                    oThis.initSlider();
                    
                });
            break;
            
            case 'search':
                oThis.blockHeights();
            case "chooser":
                var q = document.location.search.slice(3);
                $.getJSON('/search.php',{url:'http://kidcooking.ng.bluemix.net/api/recipes/'+q})
                .done(function(data){
                    var json = JSON.parse(data);
                    $('.bxchooser').append('<h1>'+q+'</h1>');
                    for(i=0;i<8;i++){
                        if(json[i]==undefined){
                            json[i]={
                                id: (i+1),
                                title: 'recipe title '+(i+1)
                            };
                        }
                        var html = '<div class="media">';
                        html += '<a class="pull-left" href="cook.php?i='+json[i]["id"]+'">';
                        html += '<img width="100px" src="img/recipe'+i+'.jpg" class="media-object">';
                        html += '</a>';
                        html += '<div class="media-body">';
                        html += '<h4 class="media-heading">';
                        html += json[i]["title"];
                        html += '</h4>';
                        html += '</div>';
                        html += '</div>';
                        $('.bxchooser').append(html);
                    }
                    //oThis.initChooser();
                });
                
                
//                $(window).resize(function(){
//                    oThis.getSizes();
//                    oApp.chooser.reloadSlider({
//                        controls:false,
//                        minSlides: 1,
//                        maxSlides: 3,
//                        moveSlides: 1,
//                        slideWidth: oThis.slideWidth
//                    });
//                });
            break;
            case "courses":
                $('.courses-page-container > div.palette').bind('click',oThis.courseClick).bind('tap',oThis.courseClick);
            break;
            
            
                
        }
            
    },
    courseClick: function(){
        document.location.href='chooser.php?q='+$(this).data('q');
    },
    initSlider:function(){
        var oThis = this;
        oApp.slider = $('.bxslider').bxSlider({
            controls:false
        }); 
        $('a.next').click(function(e){
            e.preventDefault();
            oThis.slider.goToNextSlide();
        });
        $('a.back').click(function(e){
            e.preventDefault();
            oThis.slider.goToPrevSlide();
        });
    },
    initChooser: function(){
        var oThis = this;
        oApp.chooser = $('.bxchooser').bxSlider({
            controls:false,
            minSlides: 1,
            maxSlides: 3,
            moveSlides: 1,
            slideWidth: oThis.slideWidth
        });
    },
    getSizes: function(){
        var oThis = this;
        oThis.containerWidth = $('.container').outerWidth();
        oThis.slideWidth = oThis.containerWidth/3;
    },
    blockHeights:function(){
        $('.search-page-block-bonus').css({height:$('.search-page-block-search').outerHeight()});
    },
    setContainerSize: function(){
        var windowHeight = $(window).height();
        var navHeights = $('.headernav').height()+$('.footernav').height();
        var containerHeight = windowHeight - navHeights;
        $('.container').css({height:containerHeight});
    },
    animateBG: function(){
        if($('.bgAnimation').length){
            var imgWidth = $('.bgAnimation img').width();
            var imgHeight = $('.bgAnimation img').height();
//            $('.bgAnimation img').css({});
//            var containerHeight = $('.container').height();
//            $('.bgAnimation img').css({height:containerHeight});
            $('.bgAnimation').animate({top:-(imgHeight/2),left:-(imgWidth/2)},{duration:30000});
            
        }
    }
};


$(document).ready(function(){
   oApp.init();
});