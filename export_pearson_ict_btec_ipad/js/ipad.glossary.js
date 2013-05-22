/*
 * Glossary plug-in
 *
 * @author Christophe Bragard
 * @version 3.0
 * @copyright Gutenberg Technology (http://gutenberg-technology.com)
*/
'use strict';
var Glossary;
Glossary = (function() {
  Glossary.prototype.options = {
    selector: 'span[data-type=Key_terms],ref[data-type=Key_terms]'
  };
  function Glossary($) {
    var hideGlossary, showGlossary;
    $(this.options.selector).click(function(e) {
      var content, id;
      console.log("glossary clicked");
      e.stopPropagation();
      e.preventDefault();
      if ($(this).hasClass("open")) {
        return hideGlossary($(this));
      } else {
        id = $(this).attr('data-elemfid');
        content = $("[data-fid='" + id + "']").html();
        return showGlossary($(this), content);
      }
    });
    showGlossary = function($el, content) {
      var $tooltip;
      if (0 === $("#glossary").size()) {
        $tooltip = $('<div></div>').attr('id', 'glossary');
        $('body').append($tooltip);
      }
      $("#glossary").html(content).addClass('open').css({
        'top': $el.position().top,
        'left': $el.position().left,
        'display': 'block'
      });
      return $('.page').one("click", function() {
        return hideGlossary($el);
      });
    };
    hideGlossary = function($el) {
      $("#glossary").css("display", "none");
      return $el.removeClass("open");
    };
  }
  return Glossary;
})();