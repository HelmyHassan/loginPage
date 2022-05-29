$(function() {

  'use strict';

  $(".toggle-password").click(function() {

    $(this).toggleClass("ph-eye ph-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

    

});










