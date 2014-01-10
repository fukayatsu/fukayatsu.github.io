//= require jquery-2.0.3.min
//= require rails
//= require turbolinks
//= require nprogress

$(document).on('input', '#new_post_name', function() {
  var name = $('#new_post_name').val();
  $('#new_post_link').attr('href', 'my-blog://new?name=' + name);
});

$(document).on('page:fetch',   function() {
  console.log('fetch');
  NProgress.start();
});

$(document).on('page:change',  function() {
  console.log('change');
  NProgress.done();
});

$(document).on('page:restore', function() {
  console.log('restore');
  NProgress.remove();
});
