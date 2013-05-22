var scrollTo, specialscroll;
scrollTo = function(targetY) {
  return window.location.href = "native:scrollTo('" + targetY + "')";
};
specialscroll = function() {
  var currentUnit, getUnit, move, scrollToUnit, scrollable, scroller, viewport_height;
  scrollable = $("#sections").eq(0);
  scroller = $("#scroller").eq(0);
  viewport_height = $(window).height();
  move = false;
  currentUnit = 0;
  $('.mainCopyright').click(function(evt) {
    /*
            	Fancybox 2.0.6 ( only if required... )
            */
    var $;
    (function(window, document, $, undefined_) {
      "use strict";
      var D, F, W, didUpdate, getScalar, getValue, isPercentage, isQuery, isScrollable, isString, isTouch;
      W = $(window);
      D = $(document);
      F = $.fancybox = function() {
        return F.open.apply(this, arguments);
      };
      didUpdate = false;
      isTouch = document.createTouch !== undefined;
      isQuery = function(obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
      };
      isString = function(str) {
        return str && $.type(str) === "string";
      };
      isPercentage = function(str) {
        return isString(str) && str.indexOf("%") > 0;
      };
      isScrollable = function(el) {
        return el && !(el.style.overflow && el.style.overflow === "hidden") && (el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight);
      };
      getScalar = function(value, dim) {
        if (dim && isPercentage(value)) {
          value = F.getViewport()[dim] / 100 * parseInt(value, 10);
        }
        return Math.ceil(value);
      };
      getValue = function(value, dim) {
        return getScalar(value, dim) + "px";
      };
      $.extend(F, {
        version: "2.0.6",
        defaults: {
          padding: 15,
          margin: 20,
          width: 800,
          height: 600,
          minWidth: 100,
          minHeight: 100,
          maxWidth: 9999,
          maxHeight: 9999,
          autoSize: true,
          autoHeight: true,
          autoWidth: true,
          autoResize: !isTouch,
          autoCenter: !isTouch,
          fitToView: true,
          aspectRatio: false,
          topRatio: 0.5,
          fixed: false,
          scrolling: "auto",
          wrapCSS: "",
          arrows: true,
          closeBtn: true,
          closeClick: false,
          nextClick: false,
          mouseWheel: true,
          autoPlay: false,
          playSpeed: 3000,
          preload: 3,
          modal: false,
          loop: true,
          ajax: {
            dataType: "html",
            headers: {
              "X-fancyBox": true
            }
          },
          iframe: {
            scrolling: "auto",
            preload: true
          },
          keys: {
            next: {
              13: "right",
              34: "down",
              39: "right",
              40: "down"
            },
            prev: {
              8: "left",
              33: "up",
              37: "left",
              38: "up"
            },
            close: [27],
            play: [32],
            toggle: [70]
          },
          index: 0,
          type: null,
          href: null,
          content: null,
          title: null,
          num: null,
          tpl: {
            wrap: "<div class=\"fancybox-wrap\"><div class=\"fancybox-skin\"><div class=\"fancybox-outer\"><div class=\"fancybox-inner\"></div></div></div></div>",
            image: "<img class=\"fancybox-image\" src=\"{href}\" alt=\"\" />",
            iframe: "<iframe id=\"fancybox-frame{rnd}\" name=\"fancybox-frame{rnd}\" class=\"fancybox-iframe\" frameborder=\"0\" vspace=\"0\" hspace=\"0\"" + ($.browser.msie ? " allowtransparency=\"true\"" : "") + "></iframe>",
            swf: "<object id=\"fancybox-swf{rnd}\" name=\"fancybox-swf{rnd}\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"100%\" height=\"100%\"><param name=\"wmode\" value=\"transparent\" /><param name=\"allowfullscreen\" value=\"true\" /><param name=\"allowscriptaccess\" value=\"always\" /><param name=\"movie\" value=\"{href}\" /><embed src=\"{href}\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" allowscriptaccess=\"always\" width=\"100%\" height=\"100%\" wmode=\"transparent\"></embed></object>",
            error: "<p class=\"fancybox-error\">The requested content cannot be loaded.<br/>Please try again later.</p>",
            closeBtn: "<div title=\"Close\" class=\"fancybox-item fancybox-close\"></div>",
            next: "<a title=\"Next\" class=\"fancybox-nav fancybox-next\"><span></span></a>",
            prev: "<a title=\"Previous\" class=\"fancybox-nav fancybox-prev\"><span></span></a>"
          },
          openEffect: "fade",
          openSpeed: 250,
          openEasing: "swing",
          openOpacity: true,
          openMethod: "zoomIn",
          closeEffect: "fade",
          closeSpeed: 250,
          closeEasing: "swing",
          closeOpacity: true,
          closeMethod: "zoomOut",
          nextEffect: "elastic",
          nextSpeed: 250,
          nextEasing: "swing",
          nextMethod: "changeIn",
          prevEffect: "elastic",
          prevSpeed: 250,
          prevEasing: "swing",
          prevMethod: "changeOut",
          helpers: {
            overlay: {
              speedIn: 0,
              speedOut: 250,
              opacity: 0.8,
              css: {
                cursor: "pointer"
              },
              closeClick: true
            },
            title: {
              type: "float"
            }
          },
          onCancel: $.noop,
          beforeLoad: $.noop,
          afterLoad: $.noop,
          beforeShow: $.noop,
          afterShow: $.noop,
          beforeChange: $.noop,
          beforeClose: $.noop,
          afterClose: $.noop
        },
        group: {},
        opts: {},
        coming: null,
        current: null,
        isActive: false,
        isOpen: false,
        isOpened: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
          timer: null,
          isActive: false
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(group, opts) {
          if (!group) {
            return;
          }
          opts = ($.isPlainObject(opts) ? opts : {});
          F.close(true);
          if (!$.isArray(group)) {
            group = (isQuery(group) ? $(group).get() : [group]);
          }
          $.each(group, function(i, element) {
            var content, href, hrefParts, obj, rez, selector, title, type;
            obj = {};
            href = void 0;
            title = void 0;
            content = void 0;
            type = void 0;
            rez = void 0;
            hrefParts = void 0;
            selector = void 0;
            if ($.type(element) === "object") {
              if (element.nodeType) {
                element = $(element);
              }
              if (isQuery(element)) {
                obj = {
                  href: element.attr("href"),
                  title: element.attr("title"),
                  num: element.attr("data-num"),
                  isDom: true,
                  element: element
                };
                if ($.metadata) {
                  $.extend(true, obj, element.metadata());
                }
              } else {
                obj = element;
              }
            }
            href = opts.href || obj.href || (isString(element) ? element : null);
            title = (opts.title !== undefined ? opts.title : obj.title || "");
            content = opts.content || obj.content;
            type = (content ? "html" : opts.type || obj.type);
            if (!type && obj.isDom) {
              type = element.data("fancybox-type");
              if (!type) {
                rez = element.prop("class").match(/fancybox\.(\w+)/);
                type = (rez ? rez[1] : null);
              }
            }
            if (isString(href)) {
              if (!type) {
                if (F.isImage(href)) {
                  type = "image";
                } else if (F.isSWF(href)) {
                  type = "swf";
                } else if (href.match(/^#/)) {
                  type = "inline";
                } else if (isString(element)) {
                  type = "html";
                  content = element;
                }
              }
              if (type === "ajax") {
                hrefParts = href.split(/\s+/, 2);
                href = hrefParts.shift();
                selector = hrefParts.shift();
              }
            }
            if (!content) {
              if (type === "inline") {
                if (href) {
                  content = $((isString(href) ? href.replace(/.*(?=#[^\s]+$)/, "") : href));
                } else {
                  if (obj.isDom) {
                    content = element;
                  }
                }
              } else if (type === "html") {
                content = href;
              } else if (!type && !href && obj.isDom) {
                type = "inline";
                content = element;
              }
            }
            $.extend(obj, {
              href: href,
              type: type,
              content: content,
              title: title,
              selector: selector
            });
            return group[i] = obj;
          });
          F.opts = $.extend(true, {}, F.defaults, opts);
          if (opts.keys !== undefined) {
            F.opts.keys = (opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false);
          }
          F.group = group;
          return F._start(F.opts.index || 0);
        },
        cancel: function() {
          var coming;
          coming = F.coming;
          if (!coming || false === F.trigger("onCancel")) {
            return;
          }
          F.hideLoading();
          if (coming.wrap) {
            coming.wrap.stop().trigger("onReset").remove();
          }
          F.coming = null;
          if (F.ajaxLoad) {
            F.ajaxLoad.abort();
          }
          F.ajaxLoad = null;
          if (F.imgPreload) {
            return F.imgPreload.onload = F.imgPreload.onerror = null;
          }
        },
        close: function(immediately) {
          F.cancel();
          if (!F.current || false === F.trigger("beforeClose")) {
            return;
          }
          F.unbindEvents();
          if (!F.isOpen || immediately === true) {
            $(".fancybox-wrap").stop().trigger("onReset").remove();
            return F._afterZoomOut();
          } else {
            F.isOpen = F.isOpened = false;
            $(".fancybox-item, .fancybox-nav").remove();
            F.wrap.stop(true).removeClass("fancybox-opened");
            if (F.wrap.css("position") === "fixed") {
              F.wrap.css(F._getPosition(true));
            }
            return F.transitions[F.current.closeMethod]();
          }
        },
        play: function(action) {
          var clear, set, start, stop;
          clear = function() {
            return clearTimeout(F.player.timer);
          };
          set = function() {
            clear();
            if (F.current && F.player.isActive) {
              return F.player.timer = setTimeout(F.next, F.current.playSpeed);
            }
          };
          stop = function() {
            clear();
            $("body").unbind(".player");
            F.player.isActive = false;
            return F.trigger("onPlayEnd");
          };
          start = function() {
            if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
              F.player.isActive = true;
              $("body").bind({
                "afterShow.player onUpdate.player": set,
                "onCancel.player beforeClose.player": stop,
                "beforeLoad.player": clear
              });
              set();
              return F.trigger("onPlayStart");
            }
          };
          if (action === true || (!F.player.isActive && action !== false)) {
            return start();
          } else {
            return stop();
          }
        },
        next: function(direction) {
          if (!isString(direction)) {
            direction = "down";
          }
          if (F.current) {
            return F.jumpto(F.current.index + 1, direction, "next");
          }
        },
        prev: function(direction) {
          if (!isString(direction)) {
            direction = "up";
          }
          if (F.current) {
            return F.jumpto(F.current.index - 1, direction, "prev");
          }
        },
        jumpto: function(index, direction, router) {
          var current;
          current = F.current;
          if (!current) {
            return;
          }
          index = parseInt(index, 10);
          F.direction = direction || (index > current.index ? "right" : "left");
          F.router = router || "jumpto";
          if (current.loop) {
            if (index < 0) {
              index = current.group.length + (index % current.group.length);
            }
            index = index % current.group.length;
          }
          if (current.group[index] !== undefined) {
            F.cancel();
            return F._start(index);
          }
        },
        reposition: function(e, onlyAbsolute) {
          var pos;
          pos = void 0;
          if (F.isOpen) {
            pos = F._getPosition(onlyAbsolute);
            if (e && e.type === "scroll") {
              delete pos.position;
              return F.wrap.stop(true, true).animate(pos, 200);
            } else {
              return F.wrap.css(pos);
            }
          }
        },
        update: function(e) {
          var anyway, scroll;
          anyway = !e || (e && e.type === "orientationchange");
          scroll = e && e.type === "scroll";
          if (anyway) {
            clearTimeout(didUpdate);
            didUpdate = null;
          }
          if (!F.isOpen || didUpdate) {
            return;
          }
          if (anyway && isTouch) {
            F.wrap.removeAttr("style").addClass("fancybox-tmp");
            F.trigger("onUpdate");
          }
          return didUpdate = setTimeout(function() {
            var current;
            current = F.current;
            didUpdate = null;
            if (!current) {
              return;
            }
            F.wrap.removeClass("fancybox-tmp");
            if ((current.autoResize && !scroll) || anyway) {
              F._setDimension();
              F.trigger("onUpdate");
            }
            if ((current.autoCenter && !(scroll && current.canShrink)) || anyway) {
              F.reposition(e);
            }
            return F.trigger("onUpdate", (anyway ? 20 : 200));
          });
        },
        toggle: function(action) {
          if (F.isOpen) {
            F.current.fitToView = ($.type(action) === "boolean" ? action : !F.current.fitToView);
            return F.update();
          }
        },
        hideLoading: function() {
          D.unbind("keypress.fb");
          return $("#fancybox-loading").remove();
        },
        showLoading: function() {
          var el, viewport;
          el = void 0;
          viewport = void 0;
          F.hideLoading();
          D.bind("keypress.fb", function(e) {
            if ((e.which || e.keyCode) === 27) {
              e.preventDefault();
              return F.cancel();
            }
          });
          el = $("<div id=\"fancybox-loading\"><div></div></div>").click(F.cancel).appendTo("body");
          if (F.coming && !F.coming.fixed) {
            viewport = F.getViewport();
            return el.css({
              position: "absolute",
              top: (viewport.h * 0.5) + viewport.y,
              left: (viewport.w * 0.5) + viewport.x
            });
          }
        },
        getViewport: function() {
          return {
            x: W.scrollLeft(),
            y: W.scrollTop(),
            w: (isTouch && window.innerWidth ? window.innerWidth : W.width()),
            h: (isTouch && window.innerHeight ? window.innerHeight : W.height())
          };
        },
        unbindEvents: function() {
          if (F.wrap) {
            F.wrap.unbind(".fb");
          }
          D.unbind(".fb");
          return W.unbind(".fb");
        },
        bindEvents: function() {
          var current, keys;
          current = F.current;
          keys = void 0;
          if (!current) {
            return;
          }
          W.bind("resize.fb orientationchange.fb" + (current.autoCenter && !current.fixed ? " scroll.fb" : ""), F.update);
          keys = current.keys;
          if (keys) {
            D.bind("keydown.fb", function(e) {
              var code, target;
              code = e.which || e.keyCode;
              target = e.target || e.srcElement;
              if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is("[contenteditable]")))) {
                return $.each(keys, function(i, val) {
                  if (current.group.length > 1 && val[code] !== undefined) {
                    F[i](val[code]);
                    e.preventDefault();
                    return false;
                  }
                  if ($.inArray(code, val) > -1) {
                    F[i]();
                    e.preventDefault();
                    return false;
                  }
                });
              }
            });
          }
          if ($.fn.mousewheel && current.mouseWheel) {
            return F.wrap.bind("mousewheel.fb", function(e, delta, deltaX, deltaY) {
              var canScroll, parent, target;
              target = e.target || null;
              parent = $(target);
              canScroll = false;
              while (parent.length) {
                if (canScroll || parent.is(".fancybox-skin") || parent.is(".fancybox-wrap")) {
                  break;
                }
                canScroll = isScrollable(parent[0]);
                parent = $(parent).parent();
              }
              if (delta !== 0 && !canScroll) {
                if (F.group.length > 1 && !current.canShrink) {
                  if (deltaY > 0 || deltaX > 0) {
                    F.prev((deltaY > 0 ? "up" : "left"));
                  } else {
                    if (deltaY < 0 || deltaX < 0) {
                      F.next((deltaY < 0 ? "down" : "right"));
                    }
                  }
                  return e.preventDefault();
                } else {
                  if (F.wrap.css("position") === "fixed") {
                    return e.preventDefault();
                  }
                }
              }
            });
          }
        },
        trigger: function(event, o) {
          var obj, ret;
          ret = void 0;
          obj = o || F[($.inArray(event, ["onCancel", "beforeLoad", "afterLoad"]) > -1 ? "coming" : "current")];
          if (!obj) {
            return;
          }
          if ($.isFunction(obj[event])) {
            ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
          }
          if (ret === false) {
            return false;
          }
          if (obj.helpers) {
            $.each(obj.helpers, function(helper, opts) {
              if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                return F.helpers[helper][event](opts, obj);
              }
            });
          }
          return $.event.trigger(event + ".fb");
        },
        isImage: function(str) {
          return isString(str) && str.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i);
        },
        isSWF: function(str) {
          return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function(index) {
          var coming, href, margin, obj, type;
          coming = {};
          obj = F.group[index] || null;
          href = void 0;
          type = void 0;
          margin = void 0;
          if (!obj) {
            return false;
          }
          coming = $.extend(true, {}, F.opts, obj);
          margin = coming.margin;
          if ($.type(margin) === "number") {
            coming.margin = [margin, margin, margin, margin];
          }
          if (coming.modal) {
            $.extend(true, coming, {
              closeBtn: false,
              closeClick: false,
              nextClick: false,
              arrows: false,
              mouseWheel: false,
              keys: null,
              helpers: {
                overlay: {
                  css: {
                    cursor: "auto"
                  },
                  closeClick: false
                }
              }
            });
          }
          if (coming.autoSize) {
            coming.autoWidth = coming.autoHeight = true;
          }
          if (coming.width === "auto") {
            coming.autoWidth = true;
          }
          if (coming.height === "auto") {
            coming.autoHeight = true;
          }
          coming.group = F.group;
          coming.index = index;
          F.coming = coming;
          if (false === F.trigger("beforeLoad")) {
            F.coming = null;
            return;
          }
          type = coming.type;
          href = coming.href;
          if (!type) {
            F.coming = null;
            if (F.current && F.router && F.router !== "jumpto") {
              F.current.index = index;
              return F[F.router](F.direction);
            }
            return false;
          }
          F.isActive = true;
          if (type === "image" || type === "swf") {
            coming.autoHeight = coming.autoWidth = false;
            coming.scrolling = "visible";
          }
          if (type === "image") {
            coming.aspectRatio = true;
          }
          if (type === "iframe" && isTouch) {
            coming.scrolling = "scroll";
          }
          coming.wrap = $(coming.tpl.wrap).addClass("fancybox-" + (isTouch ? "mobile" : "desktop") + " fancybox-type-" + type + " fancybox-tmp " + coming.wrapCSS).appendTo("body");
          $.extend(coming, {
            skin: $(".fancybox-skin", coming.wrap).css("padding", getValue(coming.padding)),
            outer: $(".fancybox-outer", coming.wrap),
            inner: $(".fancybox-inner", coming.wrap)
          });
          if (type === "inline" || type === "html") {
            if (!coming.content || !coming.content.length) {
              return F._error("content");
            }
          } else {
            if (!href) {
              return F._error("href");
            }
          }
          if (type === "image") {
            return F._loadImage();
          } else if (type === "ajax") {
            return F._loadAjax();
          } else if (type === "iframe") {
            return F._loadIframe();
          } else {
            return F._afterLoad();
          }
        },
        _error: function(type) {
          $.extend(F.coming, {
            type: "html",
            autoWidth: true,
            autoHeight: true,
            minWidth: 0,
            minHeight: 0,
            scrolling: "no",
            hasError: type,
            content: F.coming.tpl.error
          });
          return F._afterLoad();
        },
        _loadImage: function() {
          var img;
          img = F.imgPreload = new Image();
          img.onload = function() {
            this.onload = this.onerror = null;
            F.coming.width = this.width;
            F.coming.height = this.height;
            return F._afterLoad();
          };
          img.onerror = function() {
            this.onload = this.onerror = null;
            return F._error("image");
          };
          img.src = F.coming.href;
          if (img.complete === undefined || !img.complete) {
            return F.showLoading();
          }
        },
        _loadAjax: function() {
          var coming;
          coming = F.coming;
          F.showLoading();
          return F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
            url: coming.href,
            error: function(jqXHR, textStatus) {
              if (F.coming && textStatus !== "abort") {
                return F._error("ajax", jqXHR);
              } else {
                return F.hideLoading();
              }
            },
            success: function(data, textStatus) {
              if (textStatus === "success") {
                coming.content = data;
                return F._afterLoad();
              }
            }
          }));
        },
        _loadIframe: function() {
          var coming, iframe;
          coming = F.coming;
          iframe = $(coming.tpl.iframe.replace("{rnd}", new Date().getTime())).attr("scrolling", (isTouch ? "auto" : coming.iframe.scrolling)).attr("src", coming.href);
          $(coming.wrap).bind("onReset", function() {
            try {
              return iframe.hide().parent().empty();
            } catch (_e) {}
          });
          if (coming.iframe.preload) {
            F.showLoading();
            iframe.bind("load", function() {
              $(this).unbind().bind("load.fb", F.update).data("ready", 1);
              F.coming.wrap.removeClass("fancybox-tmp").show();
              return F._afterLoad();
            });
          }
          coming.content = iframe.appendTo(coming.inner);
          if (!coming.iframe.preload) {
            return F._afterLoad();
          }
        },
        _preloadImages: function() {
          var cnt, current, group, i, item, len, _results;
          group = F.group;
          current = F.current;
          len = group.length;
          cnt = (current.preload ? Math.min(current.preload, len - 1) : 0);
          item = void 0;
          i = void 0;
          i = 1;
          _results = [];
          while (i <= cnt) {
            item = group[(current.index + i) % len];
            if (item.type === "image" && item.href) {
              new (Image().src = item.href);
            }
            _results.push(i += 1);
          }
          return _results;
        },
        _afterLoad: function() {
          var coming, content, current, previous, scrolling, type;
          coming = F.coming;
          previous = F.current;
          current = void 0;
          content = void 0;
          type = void 0;
          scrolling = void 0;
          F.hideLoading();
          if (!coming || false === F.trigger("afterLoad", coming, previous)) {
            F.coming.wrap.stop().trigger("onReset").remove();
            F.coming = null;
            return;
          }
          if (previous) {
            F.trigger("beforeChange", previous);
          }
          F.unbindEvents();
          if (F.isOpened) {
            $(".fancybox-item, .fancybox-nav").remove();
            previous.wrap.stop(true).removeClass("fancybox-opened");
            F.transitions[previous.prevMethod]();
          } else {
            $(".fancybox-wrap").not(coming.wrap).stop().trigger("onReset").remove();
          }
          current = coming;
          content = coming.content;
          type = coming.type;
          scrolling = coming.scrolling;
          $.extend(F, {
            wrap: current.wrap,
            skin: current.skin,
            outer: current.outer,
            inner: current.inner,
            current: current
          });
          switch (type) {
            case "inline":
            case "ajax":
            case "html":
              if (current.selector) {
                content = $("<div>").html(content).find(current.selector);
              } else if (isQuery(content)) {
                content = content.show().detach();
                $(current.wrap).bind("onReset", function() {
                  return $(this).find(".fancybox-inner").children().appendTo("body").hide();
                });
              }
              break;
            case "image":
              content = current.tpl.image.replace("{href}", current.href);
              break;
            case "swf":
              content = current.tpl.swf.replace(/\{rnd\}/g, new Date().getTime()).replace(/\{href\}/g, current.href);
          }
          if (!(current.type === "iframe" && current.iframe.preload)) {
            current.inner.append(content);
          }
          F.trigger("beforeShow");
          F._setDimension();
          current.pos = $.extend({}, current.dim, F._getPosition(true));
          current.inner.css("overflow", (scrolling === "yes" ? "scroll" : (scrolling === "no" ? "hidden" : scrolling)));
          current.wrap.removeClass("fancybox-tmp");
          F.isOpen = false;
          F.coming = null;
          F.bindEvents();
          F.transitions[(F.isOpened ? current.nextMethod : current.openMethod)]();
          return F._preloadImages();
        },
        _setDimension: function() {
          var body, canExpand, canShrink, current, hMargin, hPadding, hSpace, height, height_, iframe, inner, margin, maxHeight, maxHeight_, maxWidth, maxWidth_, minHeight, minWidth, origHeight, origMaxHeight, origMaxWidth, origWidth, ratio, scrollOut, scrolling, skin, steps, viewport, wMargin, wPadding, wSpace, width, width_, wrap;
          viewport = F.getViewport();
          steps = 0;
          canShrink = false;
          canExpand = false;
          wrap = F.wrap;
          skin = F.skin;
          inner = F.inner;
          current = F.current;
          width = current.width;
          height = current.height;
          minWidth = current.minWidth;
          minHeight = current.minHeight;
          maxWidth = current.maxWidth;
          maxHeight = current.maxHeight;
          scrolling = current.scrolling;
          scrollOut = current.scrollOutside;
          margin = current.margin;
          wMargin = margin[1] + margin[3];
          hMargin = margin[0] + margin[2];
          wPadding = void 0;
          hPadding = void 0;
          wSpace = void 0;
          hSpace = void 0;
          origWidth = void 0;
          origHeight = void 0;
          origMaxWidth = void 0;
          origMaxHeight = void 0;
          ratio = void 0;
          width_ = void 0;
          height_ = void 0;
          maxWidth_ = void 0;
          maxHeight_ = void 0;
          iframe = void 0;
          body = void 0;
          wrap.add(skin).add(inner).width("auto").height("auto");
          wPadding = skin.outerWidth(true) - skin.width();
          hPadding = skin.outerHeight(true) - skin.height();
          wSpace = wMargin + wPadding;
          hSpace = hMargin + hPadding;
          origWidth = (isPercentage(width) ? (viewport.w - wSpace) * parseFloat(width) / 100 : width);
          origHeight = (isPercentage(height) ? (viewport.h - hSpace) * parseFloat(height) / 100 : height);
          if (current.type === "iframe") {
            iframe = current.content;
            if (current.autoHeight && iframe.data("ready") === 1) {
              try {
                if (iframe[0].contentWindow.document.location) {
                  inner.width(origWidth).height(9999);
                  body = iframe.contents().find("body");
                  if (scrollOut) {
                    body.css("overflow-x", "hidden");
                  }
                  origHeight = body.height();
                }
              } catch (_e) {}
            }
          } else if (current.autoWidth || current.autoHeight) {
            inner.addClass("fancybox-tmp");
            if (current.autoWidth) {
              origWidth = inner.width();
            }
            if (current.autoHeight) {
              origHeight = inner.height();
            }
            inner.removeClass("fancybox-tmp");
          }
          width = getScalar(origWidth);
          height = getScalar(origHeight);
          ratio = origWidth / origHeight;
          minWidth = getScalar((isPercentage(minWidth) ? getScalar(minWidth, "w") - wSpace : minWidth));
          maxWidth = getScalar((isPercentage(maxWidth) ? getScalar(maxWidth, "w") - wSpace : maxWidth));
          minHeight = getScalar((isPercentage(minHeight) ? getScalar(minHeight, "h") - hSpace : minHeight));
          maxHeight = getScalar((isPercentage(maxHeight) ? getScalar(maxHeight, "h") - hSpace : maxHeight));
          origMaxWidth = maxWidth;
          origMaxHeight = maxHeight;
          maxWidth_ = viewport.w - wMargin;
          maxHeight_ = viewport.h - hMargin;
          if (current.aspectRatio) {
            if (width > maxWidth) {
              width = maxWidth;
              height = width / ratio;
            }
            if (height > maxHeight) {
              height = maxHeight;
              width = height * ratio;
            }
            if (width < minWidth) {
              width = minWidth;
              height = width / ratio;
            }
            if (height < minHeight) {
              height = minHeight;
              width = height * ratio;
            }
          } else {
            width = Math.max(minWidth, Math.min(width, maxWidth));
            height = Math.max(minHeight, Math.min(height, maxHeight));
          }
          if (current.fitToView) {
            maxWidth = Math.min(viewport.w - wSpace, maxWidth);
            maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            inner.width(getScalar(width)).height(getScalar(height));
            wrap.width(getScalar(width + wPadding));
            width_ = wrap.width();
            height_ = wrap.height();
            if (current.aspectRatio) {
              while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                if (steps++ > 19) {
                  break;
                }
                height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                width = height * ratio;
                if (width < minWidth) {
                  width = minWidth;
                  height = width / ratio;
                }
                inner.width(getScalar(width)).height(getScalar(height));
                wrap.width(getScalar(width + wPadding));
                width_ = wrap.width();
                height_ = wrap.height();
              }
            } else {
              width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
              height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
            }
          }
          if (scrollOut && scrolling === "auto" && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
            width += scrollOut;
          }
          inner.width(getScalar(width)).height(getScalar(height));
          wrap.width(getScalar(width + wPadding));
          width_ = wrap.width();
          height_ = wrap.height();
          canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
          canExpand = (current.aspectRatio ? width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight : (width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));
          $.extend(current, {
            dim: {
              width: getValue(width_),
              height: getValue(height_)
            },
            origWidth: origWidth,
            origHeight: origHeight,
            canShrink: canShrink,
            canExpand: canExpand,
            wPadding: wPadding,
            hPadding: hPadding,
            wrapSpace: height_ - skin.outerHeight(true),
            skinSpace: skin.height() - height
          });
          if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
            return inner.height("auto");
          }
        },
        _getPosition: function(onlyAbsolute) {
          var current, height, margin, rez, viewport, width;
          current = F.current;
          viewport = F.getViewport();
          margin = current.margin;
          width = F.wrap.width() + margin[1] + margin[3];
          height = F.wrap.height() + margin[0] + margin[2];
          rez = {
            position: "absolute",
            top: margin[0] + viewport.y,
            left: margin[3] + viewport.x
          };
          if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
            rez = {
              position: "fixed",
              top: margin[0],
              left: margin[3]
            };
          }
          rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
          rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * 0.5)));
          return rez;
        },
        _afterZoomIn: function() {
          var current;
          current = F.current;
          if (!current) {
            return;
          }
          F.isOpen = F.isOpened = true;
          F.wrap.addClass("fancybox-opened").css("overflow", "visible");
          F.trigger("afterShow");
          F.reposition();
          if (current.closeClick || current.nextClick) {
            F.inner.css("cursor", "pointer").bind("click.fb", function(e) {
              if (!$(e.target).is("a") && !$(e.target).parent().is("a")) {
                return F[(current.closeClick ? "close" : "next")]();
              }
            });
          }
          if (current.closeBtn) {
            $(current.tpl.closeBtn).appendTo(F.skin).bind("click.fb", F.close);
          }
          if (current.arrows && F.group.length > 1) {
            if (current.loop || current.index > 0) {
              $(current.tpl.prev).appendTo(F.outer).bind("click.fb", F.prev);
            }
            if (current.loop || current.index < F.group.length - 1) {
              $(current.tpl.next).appendTo(F.outer).bind("click.fb", F.next);
            }
          }
          if (F.opts.autoPlay && !F.player.isActive) {
            F.opts.autoPlay = false;
            return F.play();
          }
        },
        _afterZoomOut: function() {
          var current;
          current = F.current;
          F.wrap.trigger("onReset").remove();
          $.extend(F, {
            group: {},
            opts: {},
            current: null,
            isActive: false,
            isOpened: false,
            isOpen: false,
            router: false,
            wrap: null,
            skin: null,
            outer: null,
            inner: null
          });
          return F.trigger("afterClose", current);
        }
      });
      F.transitions = {
        getOrigPosition: function() {
          var current, element, hPadding, height, orig, pos, viewport, wPadding, width;
          current = F.current;
          element = current.element;
          orig = $(current.orig);
          pos = {};
          width = 50;
          height = 50;
          hPadding = current.hPadding;
          wPadding = current.wPadding;
          viewport = void 0;
          if (!orig.length && current.isDom && element.is(":visible")) {
            orig = element.find("img:first");
            if (!orig.length) {
              orig = element;
            }
          }
          if (orig.length) {
            pos = orig.offset();
            if (orig.is("img")) {
              width = orig.outerWidth();
              height = orig.outerHeight();
            }
          } else {
            viewport = F.getViewport();
            pos.top = viewport.y + (viewport.h - height) * 0.5;
            pos.left = viewport.x + (viewport.w - width) * 0.5;
          }
          pos = {
            top: getValue(pos.top - hPadding * 0.5),
            left: getValue(pos.left - wPadding * 0.5),
            width: getValue(width + wPadding),
            height: getValue(height + hPadding)
          };
          return pos;
        },
        step: function(now, fx) {
          var current, padding, prop, ratio, skinSpace, value, wrapSpace;
          ratio = void 0;
          padding = void 0;
          value = void 0;
          prop = fx.prop;
          current = F.current;
          wrapSpace = current.wrapSpace;
          skinSpace = current.skinSpace;
          if (prop === "width" || prop === "height") {
            ratio = (now - fx.start) / (fx.end - fx.start);
            if (fx.start > fx.end) {
              ratio = 1 - ratio;
            }
            padding = (prop === "width" ? current.wPadding : current.hPadding);
            value = now - padding;
            F.skin[prop](getScalar((prop === "width" ? value : value - (wrapSpace * ratio))));
            return F.inner[prop](getScalar((prop === "width" ? value : value - (wrapSpace * ratio) - (skinSpace * ratio))));
          }
        },
        zoomIn: function() {
          var current, effect, elastic, endPos, startPos, wrap;
          wrap = F.wrap;
          current = F.current;
          startPos = current.pos;
          effect = current.openEffect;
          elastic = effect === "elastic";
          endPos = $.extend({
            opacity: 1
          }, startPos);
          delete endPos.position;
          if (elastic) {
            startPos = this.getOrigPosition();
            if (current.openOpacity) {
              startPos.opacity = 0.1;
            }
          } else {
            if (effect === "fade") {
              startPos.opacity = 0.1;
            }
          }
          return wrap.css(startPos).animate(endPos, {
            duration: (effect === "none" ? 0 : current.openSpeed),
            easing: current.openEasing,
            step: (elastic ? this.step : null),
            complete: F._afterZoomIn
          });
        },
        zoomOut: function() {
          var current, effect, elastic, endPos, wrap;
          wrap = F.wrap;
          current = F.current;
          effect = current.closeEffect;
          elastic = effect === "elastic";
          endPos = {
            opacity: 0.1
          };
          if (elastic) {
            endPos = this.getOrigPosition();
            if (current.closeOpacity) {
              endPos.opacity = 0.1;
            }
          }
          return wrap.animate(endPos, {
            duration: (effect === "none" ? 0 : current.closeSpeed),
            easing: current.closeEasing,
            step: (elastic ? this.step : null),
            complete: F._afterZoomOut
          });
        },
        changeIn: function() {
          var current, direction, distance, effect, endPos, field, startPos, wrap;
          wrap = F.wrap;
          current = F.current;
          effect = current.nextEffect;
          startPos = current.pos;
          endPos = {
            opacity: 1
          };
          direction = F.direction;
          distance = 200;
          field = void 0;
          startPos.opacity = 0.1;
          if (effect === "elastic") {
            field = (direction === "down" || direction === "up" ? "top" : "left");
            if (direction === "down" || direction === "right") {
              startPos[field] = getValue(parseInt(startPos[field], 10) - distance);
              endPos[field] = "+=" + distance + "px";
            } else {
              startPos[field] = getValue(parseInt(startPos[field], 10) + distance);
              endPos[field] = "-=" + distance + "px";
            }
          }
          return wrap.css(startPos).animate(endPos, {
            duration: (effect === "none" ? 0 : current.nextSpeed),
            easing: current.nextEasing,
            complete: function() {
              return setTimeout(F._afterZoomIn, 10);
            }
          });
        },
        changeOut: function() {
          var current, direction, distance, effect, endPos, wrap;
          wrap = F.wrap;
          current = F.current;
          effect = current.prevEffect;
          endPos = {
            opacity: 0.1
          };
          direction = F.direction;
          distance = 200;
          if (effect === "elastic") {
            endPos[(direction === "down" || direction === "up" ? "top" : "left")] = (direction === "up" || direction === "left" ? "-" : "+") + "=" + distance + "px";
          }
          return wrap.animate(endPos, {
            duration: (effect === "none" ? 0 : current.prevSpeed),
            easing: current.prevEasing,
            complete: function() {
              return $(this).trigger("onReset").remove();
            }
          });
        }
      };
      F.helpers.overlay = {
        overlay: null,
        update: function() {
          var offsetWidth, scrollWidth, width;
          width = void 0;
          scrollWidth = void 0;
          offsetWidth = void 0;
          this.overlay.width("100%").height("100%");
          if ($.browser.msie || isTouch) {
            scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
            offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
            width = (scrollWidth < offsetWidth ? W.width() : scrollWidth);
          } else {
            width = D.width();
          }
          return this.overlay.width(width).height(D.height());
        },
        beforeShow: function(opts) {
          var overlay;
          overlay = void 0;
          if (this.overlay) {
            return;
          }
          opts = $.extend(true, {}, F.defaults.helpers.overlay, opts);
          overlay = this.overlay = $("<div id=\"fancybox-overlay\"></div>").css(opts.css).appendTo("body").bind("mousewheel", function(e) {
            if (!F.wrap || (F.wrap.css("position") === "fixed" || F.wrap.is(":animated"))) {
              return e.preventDefault();
            }
          });
          if (opts.closeClick) {
            overlay.bind("click.fb", F.close);
          }
          if (F.opts.fixed && !isTouch) {
            overlay.addClass("overlay-fixed");
          } else {
            this.update();
            this.onUpdate = function() {
              return this.update();
            };
          }
          return overlay.fadeTo(opts.speedIn, opts.opacity);
        },
        afterClose: function(opts) {
          if (this.overlay) {
            this.overlay.fadeOut(opts.speedOut || 0, function() {
              return $(this).remove();
            });
          }
          return this.overlay = null;
        }
      };
      F.helpers.title = {
        beforeShow: function(opts) {
          var num, text, title, type;
          text = F.current.title;
          num = F.current.num;
          type = opts.type;
          title = void 0;
          if (text) {
            title = $("<div class=\"fancybox-title fancybox-title-" + type + "-wrap\">" + "<span class=\"identifier\">" + num + "</span> " + text + "</div>").appendTo("body");
            if (type === "float") {
              title.width(title.width()).wrapInner("<span class=\"child\"></span>");
              F.current.margin[2] += Math.abs(parseInt(title.css("margin-bottom"), 10));
            }
            return title.appendTo((type === "over" ? F.inner : (type === "outside" ? F.wrap : F.skin)));
          }
        }
      };
      $.fn.fancybox = function(options) {
        var index, run, selector, that;
        index = void 0;
        that = $(this);
        selector = this.selector || "";
        run = function(e) {
          var idx, relType, relVal, what;
          what = this;
          idx = index;
          relType = void 0;
          relVal = void 0;
          if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !$(what).is(".fancybox-wrap")) {
            relType = options.groupAttr || "data-fancybox-group";
            relVal = $(what).attr(relType);
            if (!relVal) {
              relType = "rel";
              relVal = what[relType];
            }
            if (relVal && relVal !== "" && relVal !== "nofollow") {
              what = (selector.length ? $(selector) : that);
              what = what.filter("[" + relType + "=\"" + relVal + "\"]");
              idx = what.index(this);
            }
            options.index = idx;
            if (F.open(what, options) !== false) {
              return e.preventDefault();
            }
          }
        };
        options = options || {};
        index = options.index || 0;
        if (!selector || options.live === false) {
          that.unbind("click.fb-start").bind("click.fb-start", run);
        } else {
          D.undelegate(selector, "click.fb-start").delegate(selector, "click.fb-start", run);
        }
        return this;
      };
      if (!$.scrollbarWidth) {
        $.scrollbarWidth = function() {
          var child, parent, width;
          parent = void 0;
          child = void 0;
          width = void 0;
          parent = $("<div style=\"width:50px;height:50px;overflow:auto\"><div/></div>").appendTo("body");
          child = parent.children();
          width = child.innerWidth() - child.height(99).innerWidth();
          parent.remove();
          return width;
        };
      }
      return D.ready(function() {
        F.defaults.scrollOutside = $.scrollbarWidth();
        return F.defaults.fixed = $.support.fixedPosition || !(($.browser.msie && $.browser.version <= 6) || isTouch);
      });
    })(window, document, jQuery);
    evt.preventDefault();
    if ($ === void 0) {
      $ = jQuery;
    }
    return jQuery.fancybox({
      content: $('.copyrightPage').html(),
      openEffect: 'elastic',
      closeEffect: 'elastic',
      orig: $(this)
    });
  });
  getUnit = function(clientY) {
    var height;
    height = $(scroller).height() / $('li', scroller).length;
    return Math.floor(clientY / height);
  };
  scrollToUnit = function(index) {
    var the_top, to, unit;
    unit = $(".section.unit, .section.special", scrollable).eq(index);
    $('li', scroller).removeClass('active');
    $('li', scroller).eq(index).addClass('active');
    if (unit) {
      the_top = unit.position();
      to = the_top.top;
      return scrollTo(to - addScrollTop);
    }
  };
  $(document).bind("touchend touchstart touchmove click", function(event) {
    var clientX, clientY;
    clientY = event.clientY;
    if (!clientY) {
      if (event.originalEvent.touches[0]) {
        clientY = event.originalEvent.touches[0].clientY;
      } else {
        clientY = event.originalEvent.changedTouches[0].clientY;
      }
    }
    clientX = event.clientX;
    if (!clientX) {
      if (event.originalEvent.touches[0]) {
        clientX = event.originalEvent.touches[0].clientX;
      } else {
        clientX = event.originalEvent.changedTouches[0].clientX;
      }
    }
    if ((event.type === "touchstart") || (event.type === "click")) {
      if (clientX >= scroller.position().left && clientX <= scroller.position().left + scroller.width()) {
        currentUnit = getUnit(clientY);
        return scrollToUnit(currentUnit);
      }
    } else if (event.type === "touchmove") {
      if (clientX >= scroller.position().left && clientX <= scroller.position().left + scroller.width()) {
        event.preventDefault();
        if (currentUnit !== getUnit(clientY)) {
          currentUnit = getUnit(clientY);
          return scrollToUnit(currentUnit);
        }
      }
    } else {
      if (clientX >= scroller.position().left && clientX <= scroller.position().left + scroller.width()) {
        return event.preventDefault();
      }
    }
    /*
        $("li", scroller).bind "touchend touchstart touchmove click", (event) ->
            clientY = event.clientY
    
            unless clientY
                if event.originalEvent.touches[0]
                    clientY = event.originalEvent.touches[0].clientY
                else
                    clientY = event.originalEvent.changedTouches[0].clientY
            clientX = event.clientX
    
            unless clientX
                if event.originalEvent.touches[0]
                    clientX = event.originalEvent.touches[0].clientX
                else
                    clientX = event.originalEvent.changedTouches[0].clientX
                    
            index = $(this).index() + 2
            to = 0
            
            #      
            if index == 0
                to = $('.intro', scroller).eq(0).position().top
            else
                to = $('li').eq(index).position().top
            #
            
            to = $('li', scrollable).eq(index).position().top
            
            to -= addScrollTop
                    
            if jQuery(document).scrollTo
                jQuery(document).scrollTo(to)
            else
                $(document).scrollTo(to)
            
            console.log(to)
                    
            */
  });
  $(scrollable).bind("touchstart mouseover touchmove touchend scroll", function(event) {
    var $, closest, closest_element;
    if ($ === void 0) {
      $ = jQuery;
    }
    closest = -1;
    closest_element = '';
    $('.section.unit').map(function(index, element) {
      var element_top, top, x;
      element_top = $(element).position().top;
      top = $(document).scrollTop();
      x = Math.abs(top - element_top);
      if (x >= 0) {
        if (closest < 0) {
          closest = x;
        }
        if (x < closest) {
          closest = x;
          return closest_element = $(element);
        }
      }
    });
    $('.section.unit').removeClass('closest');
    return $(closest_element).addClass('closest');
  });
  /*
          Scroller live highlight, easier than dealing with css:active
      */
  /*
      previousScrollLine = -1
      
      setInterval ( ->
          document_scrollTop = $(document).scrollTop()
          document_scrollBottom = $(document).scrollTop() + $(window).height()
          document_scrollMiddle = $(document).scrollTop() + ($(window).height() / 2)
          document_scrollLevelLine = document_scrollBottom # higlight the nearest to the bottom
          
          if previousScrollLine is document_scrollLevelLine
              return false
          else
              previousScrollLine = document_scrollLevelLine
          
          intro = $(".intro", scrollable).eq(0)
          intro_top = intro.position().top
          
          if document_scrollLevelLine >= intro_top
              height = $(document).height() - intro_top
              ratio = (document_scrollLevelLine - intro_top) / height
              ratio = 0    if ratio < 0
              ratio = 1    if ratio > 1
              x = ratio * $(scroller).height()
              
              $("li", scroller).map (index, element) ->
                  b = undefined
                  h = undefined
                  p = undefined
                  p = $(element).position().top
                  h = $(element).height()
                  b = p + h
                  if x > p and x < b
                      $("li", scroller).removeClass "active"
                      $(element).addClass "active"
          else
              $("li", scroller).removeClass "active"
              $(".intro", scroller).addClass "active"
              console.log "default"
      ), 100
      */
  $(".unit > li > a").bind("touchstart touchmove touchend", function(event) {
    switch (event.type) {
      case "touchstart":
        return move = false;
      case "touchmove":
        return move = true;
      case "touchend":
        if (move) {
          event.preventDefault();
          return event.stopPropagation();
        }
    }
  });
  $(".unit > .openSection, .unit > .content", scrollable).click(function(event) {
    var $, dataid, element, the_top;
    event.preventDefault();
    if ($ === void 0) {
      $ = jQuery;
    }
    element = $(this).parent();
    the_top = $(element).position();
    /*if jQuery(document).scrollTop() != the_top.top - addScrollTop
        if jQuery(document).scrollTo
            jQuery(document).scrollTo(the_top.top - addScrollTop, 1000)
        else
            $(document).scrollTo(the_top.top - addScrollTop, 1000)*/
    $("body").animate({
      scrollTop: the_top.top - addScrollTop
    }, 1000);
    dataid = element.attr('data-id');
    if (element.hasClass("open")) {
      /*$("ul", element).animate {height: '0'}, "slow"
      
      $(element).animate {height: '172px'}, {
          duration:"slow"
          step: () ->
              $(element).css "overflow", "visible"
          complete: () ->
              $(element).css "overflow", "visible"
      
              element.removeClass "open"
              $('li[data-id=' + dataid + ']', scroller).removeClass('active')
      }*/
      element.removeClass("open");
      return $('li[data-id=' + dataid + ']', scroller).removeClass('active');
    } else {
      element.addClass("open");
      $('li', scroller).removeClass('active');
      return $('li[data-id=' + dataid + ']', scroller).addClass('active');
      /*$("ul", element).animate {height: '350px'}, "slow"
      $(element).animate {height: '532px'}, {
          duration:"slow"
          step: () ->
              $(element).css "overflow", "visible"
          complete: () ->
              $(element).css "overflow", "visible"
      }*/
    }
  });
  $('.openCopyright').bind("click", function(event) {
    var $;
    if ($ === void 0) {
      $ = jQuery;
    }
    return $('.toc_copyright', $(this).parent()).each(function(index, elem) {
      if ($(elem).css('display') !== 'none') {
        return $(elem).hide();
      } else {
        return $(elem).show();
      }
    });
  });
  return $('.section.back a').bind("click", function(event) {
    event.preventDefault();
    return scrollTo(0);
  });
};