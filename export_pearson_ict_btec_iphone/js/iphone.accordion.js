var Accordion;
Accordion = (function() {
  function Accordion($) {
    $(".accordion-title").bind("click", function() {
      var elem;
      elem = this;
      read.toggleAccordion(elem, function() {
        document.body.scrollTop = $(elem).position().top;
        return document.location.href = "native:accordionIsOpen";
      });
      return document.location.href = "native:accordionBeginOpen";
    });
  }
  Accordion.prototype.toggleAccordion = function(item, callback) {
    var line;
    if (callback == null) {
      callback = null;
    }
    line = item.parentElement;
    $('.accordion-line.open').each(function() {
      if (this !== line) {
        $('.accordion-content', this).hide();
        return $(this).toggleClass('open');
      }
    });
    $(document.body).animate({
      'scrollTop': $(line).position().top
    });
    $('.accordion-content', line).slideToggle(callback);
    return $(line).toggleClass('open');
  };
  return Accordion;
})();