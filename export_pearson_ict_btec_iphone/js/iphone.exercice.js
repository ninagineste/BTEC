/*
 * Exercices plug-in
 *
 * @author Christophe Bragard
 * @version 3.0
 * @copyright Gutenberg Technology (http://gutenberg-technology.com)
*/
'use strict';
var Exercice;
Exercice = (function() {
  Exercice.prototype.options = {};
  function Exercice($) {
    var verifQuestion;
    verifQuestion = function($question, $input) {
      var $answer, $inputs, gfid;
      $answer = $question.next(".answer");
      if ($answer === void 0) {
        return false;
      }
      $inputs = $('input', $question);
      gfid = $('div[data-fid]', $answer).data('fid');
      if ($input.data("fid") !== gfid) {
        $input.closest('.choice').addClass("wrong");
        if (!$question.hasClass('try-again')) {
          return $question.addClass('try-again');
        } else {
          $question.addClass('locked');
          return $inputs.each(function(index, input) {
            if (input.checked) {
              if (input.getAttribute("data-fid") !== gfid) {
                $(input).closest('.choice').addClass("wrong");
                input.setAttribute('data-correct', 'false');
                return $question.attr('data-correct', 'false');
              } else {
                $(input).closest('.choice').addClass("good");
                input.setAttribute('data-correct', 'true');
                $question.attr('data-correct', 'true');
                return $(this).next().addClass("right qcm_right");
              }
            } else {
              if (input.getAttribute("data-fid") === gfid) {
                return $(input).parent().addClass("choosed");
              }
            }
          });
        }
      }
    };
    $(".choice").click(function(event) {
      var $input, $question;
      $question = $(this).closest('.question');
      $input = $('input', $(this));
      if (!$question.hasClass('locked')) {
        return verifQuestion($question, $input);
      } else {
        return false;
      }
    });
  }
  return Exercice;
})();