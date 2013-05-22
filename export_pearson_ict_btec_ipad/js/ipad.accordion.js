/*
 * Glossary plug-in
 *
 * @author Denis Thevenot
 * @author Christophe Bragard
 * @version 3.0
 * @copyright Gutenberg Technology (http://gutenberg-technology.com)
*/
'use strict';
var Accordion;
Accordion = (function() {
  function Accordion($) {
    var B1, B2, L1, Np, larg, speed;
    if (0 < $(".accordion").size()) {
      speed = 700;
      L1 = $(".accordion:first").width();
      Np = $(".accordion .panel").size();
      B1 = $(".accordion .panel:first").css("border-left-width").replace("px", "");
      B2 = $(".accordion .panel .content:first").css("border-left-width").replace("px", "");
      larg = L1 - (Np * B1 + (Np - 1) * B2) + 10;
      $(".accordion .content .pcontent").css("width", larg - 20);
      $(".accordion .panel:first").addClass("open").css({
        width: "100%"
      });
      $(".accordion .panel").click(function() {
        if (!$(this).hasClass("open")) {
          $(".accordion .open:first").removeClass("open").animate({
            width: "0"
          }, speed);
          return $(this).addClass("open").animate({
            width: larg
          }, speed);
        }
      });
    }
  }
  return Accordion;
})();