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
                    $('.bxslider').html('<div class="slide col-sm-12"><h3>Ingredients:</h3>'+ingredientsList+'</div>');
                    for(i=0;i<slides.length;i++){
                        var content = trim(slides[i]);
                        if(content!=''){
                            var html = '<div class="slide col-sm-12">';
                            html += content;
                            html += '</div>';
                            $('.bxslider').append(html);
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
                    for(i=0;i<json.length;i++){
                        var html = '<div class="slide col-sm-6">';
                        html += '<a href="cook.php?i='+json[i]["id"]+'">';
                        html += json[i]["title"];
                        html += '</a>';
                        html += '</div>';
                        $('.bxchooser').append(html);
                    }
                    oThis.initChooser();
                });
                
                
                $(window).resize(function(){
                    oThis.getSizes();
                    oApp.chooser.reloadSlider({
                        controls:false,
                        minSlides: 1,
                        maxSlides: 3,
                        moveSlides: 1,
                        slideWidth: oThis.slideWidth
                    });
                });
            break;
            case "courses":
                $('.courses-page-container > div').bind('click',oThis.courseClick).bind('tap',oThis.courseClick);
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
    }
};


$(document).ready(function(){
   oApp.init();
});