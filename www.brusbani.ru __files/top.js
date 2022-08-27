// JavaScript Document
jQuery(function() {
  jQuery(window).scroll(function() {
    if(jQuery(this).scrollTop() > 500) {
      jQuery('#toTop').fadeIn();  
    } else {
      jQuery('#toTop').fadeOut();
    }
  });
 
  jQuery('#toTop').click(function() {
    jQuery('body,html').animate({scrollTop:0},800);
  }); 

  MagicSlideshowOptions = {
    onBeforeSlideChange: function({slideShowId, currentIndex, nextIndex}) {
      var $img = jQuery('#' + slideShowId).find('img[data-image2]').eq(currentIndex);
      var $next_img = jQuery('#' + slideShowId).find('img[data-image2]').eq(nextIndex);
      var src = $next_img.attr('src');
      if (typeof src == typeof undefined || src == false) {
        var loader = $img.parents('.mss-slide').find('.mss-loader');
        if (loader.length) {
          loader = $img.parents('.mss-slide').append('<div class="mss-loader" style="display:none;visibility:hidden;"></div>');
        }
        loader.show().css('visibility', 'visible');
      }
    },
    onAfterSlideChange: function({slideShowId, prevIndex, currentIndex}) {
      var $img = jQuery('#' + slideShowId).find('img[data-image2]').eq(currentIndex);
      
      $img.parents('.mss-slide').find('.mss-loader').fadeOut('slow');

      var src = $img.attr('src');
      if (typeof src == typeof undefined || src == false) {
        $img.attr('src', $img.attr('data-image2'));
      }
      var $img_next = jQuery('#' + slideShowId).find('img[data-image2]').eq(currentIndex + 1);
      if ($img_next.length) {
        var src = $img_next.attr('src');
        if (typeof src == typeof undefined || src == false) {
          $img_next.attr('src', $img_next.attr('data-image2'));
        }
        //jQuery('body').append('<img style="display:none;" src="' + $img_next.attr('data-image2') + '"/>');
      }

      var $img = jQuery('#' + slideShowId).find('img[data-image]').eq(currentIndex);
      var nextIndex = currentIndex + 1;
      var $img_next = jQuery('#' + slideShowId).find('img[data-image]').eq(nextIndex);
      if ($img_next.length) {
        var next_src = $img_next.attr('src');
        if (typeof next_src == typeof undefined || next_src == false) {
          //$img_next.attr('src', $img_next.attr('data-image'));
          jQuery('.mss-slide-' + nextIndex).attr('style', 'background: url(' + $img.attr('data-image') + ') 0 0 / 100% 100% no-repeat ;');
        }
      }

/*      if ($img_next.length && !jQuery("#" + slideShowId + "_" + nextIndex).length) {
        var $downloadingImage = jQuery("<img id='" + slideShowId + "_" + nextIndex + "'>");
        $downloadingImage.attr("src", $img_next.attr('data-image'));
        jQuery('body').append($downloadingImage);
      }*/

    },

  }

});

