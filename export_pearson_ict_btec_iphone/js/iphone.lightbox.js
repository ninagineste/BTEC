var Lightbox;
Lightbox = (function() {
  function Lightbox($) {
    var single_selector_clickable, stopEvent;
    stopEvent = function(event) {
      event.stopPropagation();
      return event.preventDefault();
    };
    single_selector_clickable = '*[data-type=xref] [data-ref=true]:not([data-type="Key_terms"]):not([data-type="Pearson_Page"]):not([data-type="Pearson_Unit"]):not([data-type="Slideshow"]),*[data-type=xref] ref:not([data-type="Key_terms"]):not([data-type="Pearson_Page"]):not([data-type="Pearson_Unit"]):not([data-type="Slideshow"])';
    jQuery(single_selector_clickable).bind("click", function() {
      var elem, elemfid, htmlCode, newLocation, result;
      elem = this;
      if (elem.nodeName.toLowerCase() === "span" || elem.nodeName.toLowerCase() === "ref") {
        elemfid = $(elem).attr('data-elemfid');
        elem = $('*[data-fid="' + elemfid + '"] *[data-ref=true],*[data-fid="' + elemfid + '"] ref');
        if (elem[0] == null) {
          elem = $('*[data-fid="' + elemfid + '"]');
        }
      }
      if (jQuery('.table-num', elem)[0] != null) {
        htmlCode = jQuery('table', elem).html();
        newLocation = "native:openTable(\'" + htmlCode + "\')";
        return window.location.href = newLocation;
      } else {
        result = {};
        result.linkImg = jQuery("img[data-replace-value]", elem).attr("data-replace-value");
        result.title = jQuery(elem).attr("title");
        result.copyright = jQuery(elem).attr("data-copyright");
        newLocation = "native:openImage('" + JSON.stringify(result) + "')";
        return window.location.href = newLocation;
      }
    });
    jQuery('.Slideshow_fullscreen').each(function() {
      return jQuery('.fancybox', this).bind('click', function() {
        var g, images, newLocation, result;
        g = $(this).parents('.Slideshow_fullscreen');
        result = {};
        result.title = $(this).text();
        result.type = $(this).parent().attr('data-type');
        result.images = [];
        images = {};
        images.title = $(this).attr('title');
        images.img = $(this).attr('href');
        images.copyright = $(this).attr('data-copyright');
        result.images.push(images);
        $('.pcontent .fancybox', g).each(function() {
          var o;
          o = {};
          o.img = $(this).attr('href');
          o.title = $(this).attr('title');
          o.copyright = $(this).attr('data-copyright');
          return result.images.push(o);
        });
        newLocation = 'native:openSlideShow(\'' + JSON.stringify(result) + '\')';
        window.location.href = newLocation;
        return false;
      });
    });
    jQuery('*[data-type="xref"] [data-ref=true][data-type="Slideshow"],*[data-type="xref"] ref[data-type="Slideshow"]').bind("click", function() {
      var elem;
      elem = jQuery(this).attr('data-elemfid');
      return jQuery(jQuery("*[data-fid='" + elem + "'] .fancybox")[0]).click();
    });
  }
  return Lightbox;
})();