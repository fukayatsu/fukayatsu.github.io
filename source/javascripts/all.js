//= require jquery-2.0.3.min
//= require rails

$(document).on('input', '#new_post_name', function() {
  var name = $('#new_post_name').val();
  $('#new_post_link').attr('href', 'my-blog://new?name=' + name);
});
