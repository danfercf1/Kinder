/*
 * QueryLoader v2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  2.1
 * Last update: 11-1-2011
 *
 */
(function($) {
    var qLimages = new Array;
    var qLdone = 0;

    var qLimageContainer = "";
    var qLoverlay = "";
    var qLbar = "";
    var qLpercentage = "";
    var qLimageCounter = 0;

    var qLoptions = {
        onComplete: function () {},
        backgroundColor: "#000",
        barColor: "#3366FF",
        barHeight: 1,
        percentage: false,
        deepSearch: true,
        completeAnimation: "fade",
        onLoadComplete: function () {
            if (qLoptions.completeAnimation == "grow") {
                $(qLbar).stop().animate({
                    top: "0%",
                    height: "0px"
                }, 500, function () {
                    qLoptions.onComplete();
                    
                });
            } else {
                
                    //$('#qLoverlay').remove();
                    /*jQuery('#qLoverlay').css('display','none');
                    jQuery('#qLbar').css('display','none');*/
                    qLoptions.onComplete();
                
            }
        }
    }

    var afterEach = function () {
        createPreloadContainer();
        //jQuery('#qLoverlay').css('display','block');
        createOverlayLoader();
    }

    var createPreloadContainer = function() {
        qLimageContainer = $("<div></div>").appendTo("body").css({
            display: "block",
            width: 0,
            height: 0,
            overflow: "hidden"
        });
        for (var i = 0; qLimages.length > i; i++) {
            $.ajax({
                url: qLimages[i],
                type: 'HEAD',
                success: function(data) {
                    qLimageCounter++;
                    addImageForPreload(this['url']);
                }
            });
        }
    }

    var addImageForPreload = function(url) {
        var image = $("<img />").attr("src", url).bind("load", function () {
            completeImageLoading();
        }).appendTo(qLimageContainer);
    }

    var completeImageLoading = function () {
        qLdone++;
        
        jQuery('body').css('overflow-y','hidden');
        
        var percentage = (qLdone / qLimageCounter) * 100;
        
        if(percentage >= 10 && percentage < 20){
            jQuery('#nubes').append('<a class="nube10"></a>');
            jQuery('.preloader_avion').css({'left':'7%','top':'43%'});
        }
        
        if(percentage >= 20 && percentage < 30){
            jQuery('#nubes').append('<a class="nube20"></a>');
            jQuery('.preloader_avion').css({'left':'16%','top':'40%'});
        }
        
        if(percentage >= 30 && percentage < 40){
            jQuery('#nubes').append('<a class="nube30"></a>');
            jQuery('.preloader_avion').css({'left':'25%','top':'40%'});
        }
        if(percentage >= 40 && percentage < 50){
            jQuery('#nubes').append('<a class="nube40"></a>');
            jQuery('.preloader_avion').css({'left':'34%','top':'39%'});
        }
        if(percentage >= 50 && percentage < 60){
            jQuery('#nubes').append('<a class="nube50"></a>');
            jQuery('.preloader_avion').css({'left':'43%','top':'39%'});
        }
        if(percentage >= 60 && percentage < 70){
            jQuery('#nubes').append('<a class="nube60"></a>');
            jQuery('.preloader_avion').css({'left':'52%','top':'39%'});
        }
        if(percentage >= 70 && percentage < 80){
            jQuery('#nubes').append('<a class="nube70"></a>');
            jQuery('.preloader_avion').css({'left':'61%','top':'40%'});
        }
        if(percentage >= 80 && percentage < 90){
            jQuery('#nubes').append('<a class="nube80"></a>');
            jQuery('.preloader_avion').css({'left':'70%','top':'40%'});
        }
        if(percentage >= 90 && percentage < 100){
            jQuery('#nubes').append('<a id="nube90" class="nube90"></a>');
            jQuery('.preloader_avion').css({'left':'79%','top':'40%'});
        }
        if(percentage == 100){
            jQuery('#nubes').append('<a class="nube100"></a>');
            jQuery('.preloader_avion').css({'left':'88%','top':'41%'});
        }
        
        $(qLbar).stop().animate({
            width: percentage + "%",
            
        }, 200);

        if (qLoptions.percentage == true) {
            $(qLpercentage).text(Math.ceil(percentage) + "%");
        }

        if (qLdone == qLimageCounter) {
            destroyQueryLoader();
        }
    }

    var destroyQueryLoader = function () {
        $(qLimageContainer).remove();
        /*jQuery('#qLoverlay').css('display','none');
        jQuery('#qLbar').css('display','none');*/
        //jQuery('#contenedor').css({'display':'block'});
        qLoptions.onLoadComplete();
    }

    var createOverlayLoader = function () {
        
        /*jQuery('#qLoverlay').css({
             'background-image': 'url("./images/preload/preload1.jpg")',
             'background-repeat': 'no-repeat',
             'background-position': 'center center',
             'display': 'block',
             'height': '100%',
             'left': '0',
             'position': 'fixed',
             'top': '0',
             'width': '100%',
             'z-index': '666999',
             'overflow': 'hidden'
        });*/
        jQuery('#qLoverlay').css({'display':'block'});
        
        //jQuery('#contenedor').css({'display':'none'});
        
        qLbar = $("<div id='qLbar'></div>").css({
            height: qLoptions.barHeight + "px",
            marginTop: "-" + (qLoptions.barHeight / 2) + "px",
            backgroundColor: qLoptions.barColor,
            width: "0%",
            position: "absolute",
            top: "50%"
        }).appendTo('#qLoverlay');
        if (qLoptions.percentage == true) {
            qLpercentage = $("<div id='qLpercentage'></div>").text("0%").css({
                height: "40px",
                width: "100px",
                position: "absolute",
                fontSize: "3em",
                top: "50%",
                left: "50%",
                marginTop: "-" + (59 + qLoptions.barHeight) + "px",
                textAlign: "center",
                marginLeft: "-50px",
                color: qLoptions.barColor
            }).appendTo('#qLoverlay');
        }
    }

    var findImageInElement = function (element) {
        var url = "";

        if ($(element).css("background-image") != "none") {
            var url = $(element).css("background-image");
        } else if (typeof($(element).attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
            var url = $(element).attr("src");
        }

        if (url.indexOf("gradient") == -1) {
            url = url.replace(/url\(\"/g, "");
            url = url.replace(/url\(/g, "");
            url = url.replace(/\"\)/g, "");
            url = url.replace(/\)/g, "");

            var urls = url.split(", ");

            for (var i = 0; i < urls.length; i++) {
                if (urls[i].length > 0) {
                    var extra = "";
                    if ($.browser.msie && $.browser.version < 9) {
                        extra = "?" + Math.floor(Math.random() * 3000);
                    }
                    qLimages.push(urls[i] + extra);
                }
            }
        }
    }

    $.fn.queryLoader2 = function(options) {
        if(options) {
            $.extend(qLoptions, options );
        }

        this.each(function() {
            findImageInElement(this);
            if (qLoptions.deepSearch == true) {
                $(this).find("*:not(script)").each(function() {
                    findImageInElement(this);
                });
            }
        });

        afterEach();

        return this;
    };

})(jQuery);