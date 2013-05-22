var Glossary;
Glossary = (function() {
  var deleteGlossary;
  function Glossary() {
    var link;
    link = void 0;
    $('span[data-type=Key_terms],ref[data-type=Key_terms]').click(function(event) {
      var $, destination, elemfid, glossary;
      if ($ === void 0) {
        $ = jQuery;
      }
      if ($(this).hasClass("open")) {
        $("#glossary").css("display", "none");
        $(this).removeClass("open");
        return $('body').unbind("click");
      } else {
        elemfid = $(this).attr('data-elemfid');
        destination = $("[data-fid='" + elemfid + "']").eq(0);
        if ($("#glossary")[0] === void 0) {
          glossary = $('<div></div>').attr('id', 'glossary');
          $('body').append(glossary);
        }
        $("#glossary").html(destination.html());
        $("#glossary").css('top', $(this).position().top + 20);
        $("#glossary").css('left', 10);
        $("#glossary").css("display", "block");
        $(this).addClass("open");
        link = $(this);
        event.stopPropagation();
        event.preventDefault();
        return $('.page').bind("click", deleteGlossary);
      }
    });
  }
  deleteGlossary = function(event) {
    var $, target;
    if ($ === void 0) {
      $ = jQuery;
    }
    target = event.target;
    $('.page').unbind("click", deleteGlossary);
    if ($(target).parents().index($("#glossary")) !== 0 && $(link)[0] !== target) {
      if ($("#glossary").css("display") === "block") {
        $("#glossary").css("display", "none");
        return $(link).removeClass("open");
      }
    }
  };
  return Glossary;
})();