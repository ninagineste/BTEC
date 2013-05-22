/*
 * Lightbox plug-in
 * @author Lola Valmont
 * @author Ulas Atila
 * @author Christophe Bragard
 * @version 3.0
 * @copyright Gutenberg Technology (http://gutenberg-technology.com)
*/
'use strict';
var Lightbox;
Lightbox = (function() {
  Lightbox.prototype.options = {
    debug: true,
    selector: '*[data-ref=true]:not([data-type="Key_terms"]):not([data-type="Pearson_Page"]):not([data-type="Pearson_Unit"]):not([data-type="content"]):not([data-type="Slideshow"]),ref:not([data-type="Key_terms"]):not([data-type="Pearson_Page"]):not([data-type="Pearson_Unit"]):not([data-type="content"]):not([data-type="Slideshow"])'
  };
  function Lightbox($) {
    var elemfid, getLightboxId;
    elemfid = null;
    getLightboxId = function(el) {
      var id;
      id = $(el.element).attr("data-elemfid");
      if (id == null) {
        id = $('*[data-elemfid]', el.element).attr("data-elemfid");
      }
      if (id == null) {
        id = $(el.element.parent()).attr("data-elemfid");
      }
      console.log("elemfid is " + id);
      return id;
    };
    $(this.options.selector).fancybox({
      'wrapCSS': "mylightbox",
      'openEffect': 'fade',
      'closeEffect': 'fade',
      'overlayShow': false,
      helpers: {
        title: {
          type: "inside"
        },
        overlay: {
          opacity: 0.5,
          css: {
            "background-color": "#000"
          }
        }
      },
      beforeLoad: function() {
        var clone, index, other_element, span, top;
        console.log("clicked fancy !");
        elemfid = getLightboxId(this);
        other_element = $("[data-fid='" + elemfid + "']").eq(0);
        if (($("[data-fid='" + elemfid + "']").parents(".Slideshow_fullscreen")[0])) {
          $("[data-fid='" + elemfid + "']").parents(".Slideshow_fullscreen").find(">:first-child").click();
          index = $('a', $("[data-fid='" + elemfid + "']").parents(".Slideshow_fullscreen")).index($("[data-fid='" + elemfid + "']"));
          if (index !== 0) {
            setTimeout(function() {
              return $.fancybox.jumpto(index);
            }, 500);
          }
          $.fancybox.update();
          return false;
        }
        if (other_element[0] == null) {
          top = $(document.getElementById('anchor_fid_' + elemfid)).prevAll('.html5')[0].offsetTop;
          document.documentElement.scrollTop = top;
          document.body.scrollTop = top;
          return false;
        }
        clone = other_element.clone();
        $(clone).attr('data-type', '');
        $('*[data-type=xref]', clone).attr('data-type', '');
        if ($('.table-num', clone).html() !== null) {
          span = $(document.createElement('span')).html($('.table-num', clone).html() + ": ");
          span.addClass('table-num');
        }
        $('.table-num', clone).hide();
        $('caption', clone).prepend(span);
        if ($('.fancybox-wrap .Image_Document').length === 0) {
          $('.fancybox-wrap .copyright').hide();
        } else {
          $('.fancybox-wrap .copyright').show();
        }
        $('img[data-replace-value]', clone).each(function() {
          if (this.getAttribute('data-replace-value')) {
            return $(this).each(function() {
              this.src = $(this).attr('data-replace-value');
              $(this).removeAttr('data-replace-value');
              return this.onload = function() {
                return $.fancybox.update();
              };
            });
          }
        });
        other_element = $('<div/>').append(clone);
        this.content = other_element.html();
        $(document.body).css("overflow", "hidden");
        if ($('.table', other_element)[0] != null) {
          this.title = $('.table', other_element).attr("title");
          return this.num = $('.table', other_element).attr("data-num");
        } else if ($(this.element).attr("title") === void 0 && $(this.element).attr("data-copyright") === void 0) {
          this.title = $("[data-ref=true],ref", other_element).attr("title");
          this.copyright = $("[data-ref=true],ref", other_element).attr("data-copyright");
          return this.num = $("[data-ref=true],ref", other_element).attr("data-num");
        }
      },
      afterShow: function() {
        $.fancybox.update();
        $('.fancybox-wrap .copyright').click(function(e) {
          e.preventDefault();
          e.stopPropagation();
          if ($(this).hasClass('copyright')) {
            $(this).toggleClass('open');
          } else {
            $(this).parents('.copyright').toggleClass('open');
          }
          return false;
        });
        if (typeof Search !== "undefined" && Search !== null) {
          return setTimeout(function() {
            return $('.fancybox-inner').scrollTop(Search.fbtop);
          }, 100);
        }
      },
      afterClose: function() {
        return $(document.body).css("overflow", "visible");
      }
    });
    /*
            second part - outside plug-in ?
            */
    $('*[data-ref=true][data-type="Slideshow"],ref[data-type="Slideshow"]').click(function() {
      var elem;
      elem = $(this).attr('data-elemfid');
      return $($("*[data-fid='" + elem + "'] .fancybox")[0]).click();
    });
    $('.Slideshow').each(function(index, slideshow) {
      return $(".fancybox", slideshow).attr('rel', $(slideshow).attr('data-fid')).fancybox({
        wrapCSS: "",
        openEffect: 'none',
        closeEffect: 'none',
        nextEffect: 'fade',
        prevEffect: 'fade',
        loop: false,
        helpers: {
          title: {
            type: "inside"
          },
          overlay: {
            opacity: 0.5,
            css: {
              "background-color": "#000"
            }
          }
        },
        beforeLoad: function() {},
        afterShow: function() {
          return $('.fancybox-wrap .btn_copyright').click(function() {
            event.preventDefault();
            event.stopPropagation();
            if ($(this).hasClass('copyright')) {
              return $(this).toggleClass('open');
            } else {
              return $(this).parents('.copyright').toggleClass('open');
            }
          });
        },
        afterClose: function() {}
      });
    });
  }
  return Lightbox;
})();