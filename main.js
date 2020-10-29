$(document).ready(function(){
  $("button").click(function(){
    $('#nav').toggle('normal');
  });
  $(".nav_link").click(function(){
    $('#nav').hide('normal');
	});
});